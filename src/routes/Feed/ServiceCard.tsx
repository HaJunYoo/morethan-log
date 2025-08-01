import styled from "@emotion/styled"
import React from "react"
import { AiFillCodeSandboxCircle } from "react-icons/ai"
import { CONFIG } from "site.config"
import { Emoji } from "src/components/Emoji"
import { TProject } from "src/types"

const ServiceCard: React.FC = () => {
  const projects = CONFIG.projects as TProject[]

  if (!projects || projects.length === 0) return null

  return (
    <>
      <StyledTitle>
        <Emoji>🌟</Emoji> Service
      </StyledTitle>
      <StyledWrapper>
        {projects.map((project: TProject, idx: number) => (
          <a
            key={idx}
            href={project.href}
            rel="noreferrer"
            target="_blank"
          >
            <AiFillCodeSandboxCircle className="icon" />
            <div className="name">{project.name}</div>
          </a>
        ))}
      </StyledWrapper>
    </>
  )
}

export default ServiceCard

const StyledTitle = styled.div`
  padding: 0.25rem;
  margin-bottom: 0.75rem;
`

const StyledWrapper = styled.div`
  display: flex;
  padding: 0.25rem;
  margin-bottom: 2.25rem;
  flex-direction: column;
  border-radius: 1rem;
  background-color: ${({ theme }) =>
    theme.scheme === "light" ? "white" : theme.colors.gray4};
  > a {
    display: flex;
    padding: 0.75rem;
    gap: 0.75rem;
    align-items: center;
    border-radius: 1rem;
    color: ${({ theme }) => theme.colors.gray11};
    cursor: pointer;

    :hover {
      color: ${({ theme }) => theme.colors.gray12};
      background-color: ${({ theme }) => theme.colors.gray5};
    }
    .icon {
      font-size: 1.5rem;
      line-height: 2rem;
    }
    .name {
      font-size: 0.875rem;
      line-height: 1.25rem;
    }
  }
`
