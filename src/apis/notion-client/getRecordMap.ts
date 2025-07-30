import { NotionAPI } from "notion-client"

const sleep = (ms: number) => new Promise(resolve => setTimeout(resolve, ms))

export const getRecordMap = async (pageId: string, retries = 3) => {
  const api = new NotionAPI()
  
  for (let attempt = 0; attempt < retries; attempt++) {
    try {
      const recordMap = await api.getPage(pageId)
      return recordMap
    } catch (error) {
      if (attempt === retries - 1) {
        console.error(`Failed to fetch recordMap for pageId ${pageId} after ${retries} attempts:`, error)
        throw error
      }
      
      const delay = Math.pow(2, attempt) * 1000
      console.warn(`Attempt ${attempt + 1} failed for pageId ${pageId}, retrying in ${delay}ms...`)
      await sleep(delay)
    }
  }
}
