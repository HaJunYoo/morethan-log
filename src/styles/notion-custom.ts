import { css } from "@emotion/react"

export const notionCustomStyles = css`
  /* 글로벌 폰트 설정 */
  * {
    -webkit-text-size-adjust: 100% !important;
    -moz-text-size-adjust: 100% !important;
    text-size-adjust: 100% !important;
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
  .notion-list > ol > li:first-child,
  .notion-list > ul > li:first-child,
  .notion-list-numbered > ol > li:first-child,
  .notion-list-numbered > ul > li:first-child {
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

  /* 텍스트 요소 공통 스타일 */
  .notion-quote,
  .notion-callout,
  .notion-table-of-contents,
  .notion-table-of-contents *,
  .notion-simple-table-cell,
  .notion-simple-table-cell * {
    font-size: 1rem;
    line-height: 1.5;
  }

  /* 특정 요소 스타일 */
  .notion-quote,
  .notion-callout {
    margin-top: 0.8rem;
    margin-bottom: 0.8rem;
  }
  .notion-table-of-contents,
  .notion-table-of-contents * {
    font-size: 0.925em;
    font-weight: 400;
  }
  .notion-simple-table-cell b,
  .notion-simple-table-cell strong {
    font-weight: 600;
  }

  /* 코드 스타일 */
  .notion-inline-code {
    display: inline-block;
    max-width: 100%;
    overflow-x: auto;
    vertical-align: middle;
    white-space: pre;
    -webkit-overflow-scrolling: touch;
  }
  .notion-code,
  .notion-inline-code {
    font-family: 'Fira Mono', 'Menlo', 'Monaco', 'Consolas', monospace !important;
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

  /* 모바일 대응 */
  @media screen and (max-width: 768px) {
    .notion-quote,
    .notion-callout,
    .notion-table-of-contents,
    .notion-table-of-contents *,
    .notion-simple-table-cell,
    .notion-simple-table-cell * {
      font-size: 0.9rem !important;
    }
  }

  /* iOS/Android 특화 대응 */
  @media screen and (-webkit-min-device-pixel-ratio:0) {
    .notion-quote,
    .notion-callout,
    .notion-table-of-contents,
    .notion-table-of-contents *,
    .notion-simple-table-cell,
    .notion-simple-table-cell * {
      font-size: 0.9rem !important;
      -webkit-text-size-adjust: none !important;
    }
  }
`;