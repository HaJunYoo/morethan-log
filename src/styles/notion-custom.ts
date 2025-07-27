import { css } from "@emotion/react"

export const notionCustomStyles = css`
  /* 글로벌 폰트 설정 */
  * {
    -webkit-font-smoothing: antialiased !important;
    -moz-osx-font-smoothing: grayscale !important;
  }

  /* 기본 레이아웃 */
  .notion-collection-page-properties {
    display: none !important;
  }
  .notion-page {
    padding: 0;
  }
  .notion-list {
    width: 100%;
  }

  /* 리스트 스타일 */
  .notion-list li {
    word-wrap: break-word;
    word-break: break-word;
    overflow-wrap: break-word;
    max-width: 100%;
  }
  .notion-list li > div {
    width: 100%;
    overflow-wrap: break-word;
    word-break: break-word;
  }
  .notion-list > ol,
  .notion-list > ul,
  .notion-list-numbered > ol,
  .notion-list-numbered > ul {
    margin-left: 0 !important;
    padding-left: 1.3em !important;
  }
  .notion-list > ol > li:first-of-type,
  .notion-list > ul > li:first-of-type,
  .notion-list-numbered > ol > li:first-of-type,
  .notion-list-numbered > ul > li:first-of-type {
    padding-left: 0 !important;
  }

  /* 테이블 스타일 */
  .notion-simple-table {
    width: 100%;
    display: block;
    overflow-x: auto;
    -webkit-overflow-scrolling: touch;
    margin-top: 0.5rem;
    margin-bottom: 0.5rem;
    border: none !important;
    border-collapse: collapse !important;
  }
  .notion-simple-table > tbody,
  .notion-simple-table > thead {
    display: table;
    width: 100%;
    min-width: max-content;
  }
  .notion-simple-table th,
  .notion-simple-table td {
    white-space: pre-wrap;
    word-break: break-word;
    padding: 8px;
    vertical-align: top;
    border: 1px solid #d1d5db !important;
  }

  /* 제목 스타일 - 오버플로우 방지 */
  .notion-h1,
  .notion-h2,
  .notion-h3,
  .notion-title {
    word-wrap: break-word !important;
    word-break: break-all !important;
    overflow-wrap: break-word !important;
    hyphens: auto !important;
    max-width: 100% !important;
    width: 100% !important;
    box-sizing: border-box !important;
    overflow: hidden !important;
    white-space: normal !important;
  }

  /* 반응형 텍스트 요소 스타일 */
  .notion-text,
  .notion-list,
  .notion-list * {
    font-size: clamp(0.75rem, 2.2vw, 0.95rem);
    line-height: 1.6;
  }

  /* 반응형 헤딩 스타일 */
  .notion-h1 {
    font-size: clamp(1.35rem, 3.5vw, 1.8rem) !important;
    line-height: 1.3 !important;
    margin-top: clamp(1rem, 2.5vw, 1.8rem) !important;
    margin-bottom: clamp(0.5rem, 1.2vw, 0.9rem) !important;
  }
  
  .notion-h2 {
    font-size: clamp(1.2rem, 3vw, 1.5rem) !important;
    line-height: 1.4 !important;
    margin-top: clamp(0.8rem, 2vw, 1.4rem) !important;
    margin-bottom: clamp(0.4rem, 1vw, 0.7rem) !important;
  }
  
  .notion-h3 {
    font-size: clamp(1.05rem, 2.5vw, 1.3rem) !important;
    line-height: 1.4 !important;
    margin-top: clamp(0.7rem, 1.8vw, 1.2rem) !important;
    margin-bottom: clamp(0.35rem, 0.8vw, 0.6rem) !important;
  }

  /* 반응형 특정 요소 스타일 */
  .notion-quote,
  .notion-callout {
    margin-top: 0.8rem;
    margin-bottom: 0.8rem;
    font-size: clamp(0.7rem, 2vw, 0.9rem) !important;
  }

  /* 반응형 토글 스타일 */
  .notion-toggle,
  .notion-toggle *,
  .notion-toggle-content,
  .notion-toggle-content * {
    font-size: clamp(0.75rem, 2.2vw, 0.95rem) !important;
    line-height: 1.6 !important;
  }
  
  .notion-toggle summary {
    font-size: clamp(0.75rem, 2.2vw, 0.95rem) !important;
    font-weight: 500 !important;
    margin-bottom: 0.5rem !important;
  }

  /* 반응형 헤딩 토글 스타일 */
  .notion-h1.notion-toggle,
  .notion-h1.notion-toggle summary {
    font-size: clamp(1.35rem, 3.5vw, 1.8rem) !important;
    line-height: 1.3 !important;
    font-weight: 700 !important;
    margin-top: clamp(1rem, 2.5vw, 1.8rem) !important;
    margin-bottom: clamp(0.5rem, 1.2vw, 0.9rem) !important;
  }

  .notion-h2.notion-toggle,
  .notion-h2.notion-toggle summary {
    font-size: clamp(1.2rem, 3vw, 1.5rem) !important;
    line-height: 1.4 !important;
    font-weight: 700 !important;
    margin-top: clamp(0.8rem, 2vw, 1.4rem) !important;
    margin-bottom: clamp(0.4rem, 1vw, 0.7rem) !important;
  }

  .notion-h3.notion-toggle,
  .notion-h3.notion-toggle summary {
    font-size: clamp(1.05rem, 2.5vw, 1.3rem) !important;
    line-height: 1.4 !important;
    font-weight: 700 !important;
    margin-top: clamp(0.7rem, 1.8vw, 1.2rem) !important;
    margin-bottom: clamp(0.35rem, 0.8vw, 0.6rem) !important;
  }

  /* 헤딩 토글 내부 컨텐츠는 일반 텍스트 크기 */
  .notion-h1.notion-toggle .notion-toggle-content,
  .notion-h1.notion-toggle .notion-toggle-content *,
  .notion-h2.notion-toggle .notion-toggle-content,
  .notion-h2.notion-toggle .notion-toggle-content *,
  .notion-h3.notion-toggle .notion-toggle-content,
  .notion-h3.notion-toggle .notion-toggle-content * {
    font-size: clamp(0.75rem, 2.2vw, 0.95rem) !important;
    line-height: 1.6 !important;
    font-weight: 400 !important;
  }

  /* 반응형 북마크 및 링크 멘션 스타일 */
  .notion-bookmark,
  .notion-bookmark-title,
  .notion-bookmark-description,
  .notion-bookmark-link,
  .notion-bookmark-link-text {
    font-size: clamp(0.75rem, 2.2vw, 0.95rem) !important;
    line-height: 1.5 !important;
  }

  .notion-bookmark-title {
    font-weight: 600 !important;
    margin-bottom: 0.25rem !important;
  }

  .notion-bookmark-description {
    color: rgba(55, 53, 47, 0.65) !important;
    margin-bottom: 0.5rem !important;
  }

  .notion-link-mention,
  .notion-link-mention *,
  .notion-link-mention-link,
  .notion-link-mention-title,
  .notion-link-mention-provider,
  .notion-link-mention-preview-title,
  .notion-link-mention-preview-description {
    font-size: clamp(0.75rem, 2.2vw, 0.95rem) !important;
    line-height: 1.5 !important;
  }

  .notion-link-mention-title,
  .notion-link-mention-preview-title {
    font-weight: 600 !important;
  }

  .notion-link-mention-provider,
  .notion-link-mention-preview-description {
    color: rgba(55, 53, 47, 0.65) !important;
  }
  
  /* 사이드바 스타일의 목차 (Table of Contents) */
  .sidebar__right {
    position: sticky;
    top: 2rem;
    max-height: calc(100vh - 4rem);
    overflow-y: auto;
    margin-left: 2rem;
    width: 300px;
    flex-shrink: 0;
  }

  .toc {
    background: rgba(255, 255, 255, 0.95);
    border: 1px solid rgba(0, 0, 0, 0.1);
    border-radius: 8px;
    padding: 0;
    overflow: hidden;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(8px);
  }

  .toc header {
    background: rgba(0, 0, 0, 0.03);
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    padding: 1rem;
    margin: 0;
  }

  .nav__title {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    margin: 0;
    font-size: 0.9rem;
    font-weight: 600;
    color: #374151;
  }

  .nav__title svg {
    width: 16px;
    height: 16px;
    opacity: 0.7;
  }

  .toc__menu {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  .toc__menu li {
    border-bottom: 1px solid rgba(0, 0, 0, 0.05);
  }

  .toc__menu li:last-child {
    border-bottom: none;
  }

  .toc__menu a {
    display: block;
    padding: 0.75rem 1rem;
    color: #4b5563;
    text-decoration: none;
    font-size: 0.85rem;
    line-height: 1.4;
    transition: all 0.2s ease;
    border-left: 3px solid transparent;
  }

  .toc__menu a:hover {
    background: rgba(34, 197, 94, 0.05);
    color: #22c55e;
    border-left-color: #22c55e;
  }

  .toc__menu ul {
    list-style: none;
    margin: 0;
    padding: 0;
    background: rgba(0, 0, 0, 0.02);
  }

  .toc__menu ul li a {
    padding-left: 2rem;
    font-size: 0.8rem;
    color: #6b7280;
  }

  .toc__menu ul ul li a {
    padding-left: 3rem;
    font-size: 0.75rem;
  }

  /* 다크 모드 스타일 */
  .dark .toc {
    background: rgba(31, 41, 55, 0.95);
    border-color: rgba(255, 255, 255, 0.2);
  }

  .dark .toc header {
    background: rgba(0, 0, 0, 0.3);
    border-bottom-color: rgba(255, 255, 255, 0.15);
  }

  .dark .nav__title {
    color: #f3f4f6;
  }

  .dark .toc__menu li {
    border-bottom-color: rgba(255, 255, 255, 0.1);
  }

  .dark .toc__menu a {
    color: #d1d5db;
  }

  .dark .toc__menu a:hover {
    background: rgba(34, 197, 94, 0.15);
    color: #4ade80;
    border-left-color: #4ade80;
  }

  .dark .toc__menu ul {
    background: rgba(0, 0, 0, 0.3);
  }

  .dark .toc__menu ul li a {
    color: #9ca3af;
  }

  .dark .toc__menu ul ul li a {
    color: #6b7280;
  }

  /* 다크 모드 기존 notion 목차 */
  .dark .notion-table-of-contents {
    background: rgba(31, 41, 55, 0.95) !important;
    border-color: rgba(255, 255, 255, 0.2) !important;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3) !important;
  }

  .dark .notion-table-of-contents::before {
    color: #f3f4f6 !important;
  }

  .dark .notion-table-of-contents a {
    color: #d1d5db !important;
  }

  .dark .notion-table-of-contents a:hover {
    color: #4ade80 !important;
  }

  .dark .notion-table-of-contents * {
    color: #d1d5db !important;
  }

  /* 기존 notion 목차 스타일 개선 */
  .notion-table-of-contents {
    background: rgba(255, 255, 255, 0.95);
    border: 1px solid rgba(0, 0, 0, 0.1);
    border-radius: 8px;
    padding: 1rem;
    margin: 2rem 0;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  }

  .notion-table-of-contents::before {
    content: "📋 Table of Contents";
    display: block;
    font-weight: 600;
    margin-bottom: 1rem;
    color: #374151;
    font-size: 0.9rem;
  }

  .notion-table-of-contents a {
    color: #374151 !important;
    text-decoration: none;
  }

  .notion-table-of-contents a:hover {
    color: #22c55e !important;
  }

  .notion-table-of-contents *,
  .notion-simple-table-cell,
  .notion-simple-table-cell * {
    font-size: clamp(0.7rem, 2vw, 0.9rem) !important;
    font-weight: 400;
  }
  
  .notion-simple-table-cell b,
  .notion-simple-table-cell strong {
    font-weight: 600;
  }

  /* 반응형 테이블 스타일 */
  .notion-simple-table th {
    font-size: clamp(0.72rem, 2.1vw, 0.85rem) !important;
    font-weight: 600 !important;
    background-color: rgba(0, 0, 0, 0.03);
  }
  .notion-simple-table td {
    font-size: clamp(0.7rem, 2vw, 0.82rem) !important;
  }

  /* 반응형 코드 스타일 */
  .notion-inline-code {
    display: inline-block;
    max-width: 100%;
    overflow-x: auto;
    vertical-align: middle;
    white-space: pre;
    -webkit-overflow-scrolling: touch;
    font-size: clamp(0.68rem, 1.8vw, 0.8rem) !important;
    padding: 2px 4px !important;
  }
  .notion-code,
  .notion-inline-code {
    font-family: 'Fira Mono', 'Menlo', 'Monaco', 'Consolas', monospace !important;
  }
  .notion-code {
    font-size: clamp(0.65rem, 1.7vw, 0.78rem) !important;
    line-height: 1.4 !important;
  }

  /* 구분선 */
  .notion-hr {
    margin: 2em 0 !important;
  }

  /* 폰트 패밀리 설정 */
  .notion-toggle,
  .notion-toggle-button,
  .notion-toggle-button-arrow,
  .notion-toggle-button-arrow-opened,
  .notion-toggle-content,
  .notion-simple-table,
  .notion-table-of-contents,
  .notion-text,
  .notion-list,
  .notion-h1,
  .notion-h2,
  .notion-h3,
  .notion-quote,
  .notion-callout,
  .category,
  .category * {
    font-family: "Noto Serif KR", "PingFang SC", "Microsoft YaHei", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji", sans-serif !important;
  }

  /* 전역 텍스트 크기 조정 방지 */
  * {
    -webkit-text-size-adjust: 100% !important;
    -moz-text-size-adjust: 100% !important;
    text-size-adjust: 100% !important;
  }
`;