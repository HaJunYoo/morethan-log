import { NotionAPI } from "notion-client"
import { idToUuid } from "notion-utils"
import { CONFIG } from "site.config"

import getAllPageIds from "src/libs/utils/notion/getAllPageIds"
import getPageProperties from "src/libs/utils/notion/getPageProperties"
import { TPosts } from "src/types"

/**
 * @param {{ includePages: boolean }} - false: posts only / true: include pages
 */

// TODO: react query를 사용해서 처음 불러온 뒤로는 해당데이터만 사용하도록 수정
const sleep = (ms: number) => new Promise(resolve => setTimeout(resolve, ms))

export const getPosts = async (retries = 5) => {
  let id = CONFIG.notionConfig.pageId as string
  const api = new NotionAPI()

  let response
  for (let attempt = 0; attempt < retries; attempt++) {
    try {
      response = await api.getPage(id)
      break
    } catch (error: any) {
      const isNetworkError = error?.cause?.code === 'UND_ERR_SOCKET' || 
                           error?.message?.includes('fetch failed') ||
                           error?.message?.includes('other side closed') ||
                           error?.message?.includes('502 Bad Gateway')
      
      if (attempt === retries - 1) {
        console.error(`Failed to fetch posts after ${retries} attempts:`, error)
        throw error
      }

      const baseDelay = isNetworkError ? 2000 : 1000
      const delay = Math.pow(2, attempt) * baseDelay
      console.warn(`Attempt ${attempt + 1} failed for posts (${isNetworkError ? 'network error' : 'unknown error'}), retrying in ${delay}ms...`)
      await sleep(delay)
    }
  }

  if (!response) {
    throw new Error('Failed to fetch response from Notion API')
  }

  id = idToUuid(id)
  const collection = Object.values(response.collection)[0]?.value
  const block = response.block
  const schema = collection?.schema

  const rawMetadata = block[id].value

  // Check Type
  if (
    rawMetadata?.type !== "collection_view_page" &&
    rawMetadata?.type !== "collection_view"
  ) {
    return []
  } else {
    // Construct Data
    const pageIds = getAllPageIds(response)
    const data = []
    for (let i = 0; i < pageIds.length; i++) {
      const id = pageIds[i]
      const properties = (await getPageProperties(id, block, schema, retries)) || null
      // Add fullwidth, createdtime to properties
      properties.createdTime = new Date(
        block[id].value?.created_time
      ).toString()
      properties.fullWidth =
        (block[id].value?.format as any)?.page_full_width ?? false

      data.push(properties)
    }

    // Sort by date
    data.sort((a: any, b: any) => {
      const dateA: any = new Date(a?.date?.start_date || a.createdTime)
      const dateB: any = new Date(b?.date?.start_date || b.createdTime)
      return dateB - dateA
    })

    const posts = data as TPosts
    return posts
  }
}
