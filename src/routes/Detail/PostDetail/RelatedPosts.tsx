import React from "react"
import Link from "next/link"
import styled from "@emotion/styled"
import { TPost } from "src/types"
import { formatDate } from "src/libs/utils"
import { CONFIG } from "site.config"

type Props = {
  currentPost: TPost
  allPosts: TPost[]
}

const RelatedPosts: React.FC<Props> = ({ currentPost, allPosts }) => {
  const getRelatedPosts = () => {
    const filteredByIdAndStatus = allPosts
      .filter(post => post.id !== currentPost.id)
      .filter(post => post.status?.[0] === "Public")
    
    const relatedPosts = filteredByIdAndStatus
      .map(post => {
        let score = 0
        
        // 같은 카테고리면 높은 점수
        if (post.category?.[0] && currentPost.category?.[0] && 
            post.category[0] === currentPost.category[0]) {
          score += 3
        }
        
        // 공통 태그 개수에 따라 점수 부여
        const commonTags = post.tags?.filter(tag => 
          currentPost.tags?.includes(tag)
        ).length || 0
        score += commonTags * 2
        
        return { ...post, score }
      })
      .filter(post => post.score > 0)
      .sort((a, b) => b.score - a.score)
      .slice(0, 3)
    
    return relatedPosts
  }

  const relatedPosts = getRelatedPosts()

  if (relatedPosts.length === 0) return null

  return (
    <StyledWrapper>
      <h3>관련 포스트</h3>
      <div className="posts-grid">
        {relatedPosts.map(post => (
          <Link key={post.id} href={`/${post.slug}`} className="post-item">
            <article>
              <h4>{post.title}</h4>
              <div className="meta">
                <span className="date">
                  {formatDate(
                    post?.date?.start_date || post.createdTime,
                    CONFIG.lang
                  )}
                </span>
                {post.category?.[0] && (
                  <span className="category">{post.category[0]}</span>
                )}
              </div>
            </article>
          </Link>
        ))}
      </div>
    </StyledWrapper>
  )
}

export default RelatedPosts

const StyledWrapper = styled.section`
  margin-top: 3rem;
  padding-top: 2rem;
  border-top: 1px solid ${({ theme }) => theme.colors.gray6};

  h3 {
    margin-bottom: 1.5rem;
    font-size: 1.25rem;
    font-weight: 600;
    color: ${({ theme }) => theme.colors.gray12};
  }

  .posts-grid {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }

  .post-item {
    display: block;
    text-decoration: none;
    color: inherit;
    transition: all 0.2s ease;

    &:hover {
      article {
        background-color: ${({ theme }) =>
          theme.scheme === "light" ? "#f8f9fa" : theme.colors.gray6};
      }
    }

    article {
      padding: 0.75rem 1rem;
      border-radius: 0.5rem;
      background-color: ${({ theme }) =>
        theme.scheme === "light" ? "#fafafa" : theme.colors.gray5};
      border: 1px solid ${({ theme }) => theme.colors.gray6};
      transition: all 0.2s ease;

      h4 {
        margin-bottom: 0.5rem;
        font-size: 0.9rem;
        font-weight: 500;
        line-height: 1.3;
        color: ${({ theme }) => theme.colors.gray12};
        display: -webkit-box;
        -webkit-line-clamp: 1;
        -webkit-box-orient: vertical;
        overflow: hidden;
      }

      .meta {
        display: flex;
        align-items: center;
        gap: 0.5rem;
        font-size: 0.7rem;

        .date {
          color: ${({ theme }) => theme.colors.gray9};
        }

        .category {
          padding: 0.125rem 0.375rem;
          background-color: ${({ theme }) => theme.colors.gray7};
          color: ${({ theme }) => theme.colors.gray11};
          border-radius: 0.25rem;
          font-weight: 500;
        }
      }
    }
  }
`