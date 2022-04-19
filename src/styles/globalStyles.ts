import { createGlobalStyle } from 'styled-components';
import { theme } from './theme';

const GlobalStyle = createGlobalStyle`

    /* @font-face { 
    font-family: 'Open Sans', sans-serif;
    font-style: normal;
    font-weight: normal;
    src: url('../assets/fonts/OpenSans-Regular.ttf') format('truetype');
    } */

  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
    font-family: 'Open Sans', sans-serif;
  }
  html, body, #root {
    min-height: 100vh;
    overflow: hidden;
    font-family: 'Open Sans', sans-serif;
    background: ${theme.background};
  }
  button, input, optgroup, select, textarea {
    font-family: inherit;
  }
  body {
    -webkit-font-smoothing: antialiased !important;
    background-color: ${theme.background};
  }
  ol, ul {
    list-style: none;
  }
  a {
    text-decoration: none;
    color: inherit;
  }
  blockquote, q {
    quotes: none;
  }
  blockquote:before, blockquote:after,
  q:before, q:after {
    content: none;
  }

  ::-webkit-scrollbar {
    width: 0.5em;
  }
  ::-webkit-scrollbar-track {
    box-shadow: inset 0 0 5px #cfcfcf;
  }
  ::-webkit-scrollbar-thumb {
    background: ${theme.gray};
    border-radius: 10px;
  }
  ::-webkit-scrollbar-thumb:hover {
    background: #707070;
  }

  @media (max-width: 768px) {
    .remove-from-sm-screen{
      display: none;
    }
  }
  .ant-form-item-required::before {
    content: '' !important;
  }
  .ant-input, .ant-input-affix-wrapper{
    color: ${theme.secondary};
    border: 1px solid #fff;
    border-radius: 4px;
  }
  .ant-input-password-icon{
    color: ${theme.secondary};
  }
  .ant-form-item-label label{
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 16px;
    color: ${theme.gray};
  }

  .ant-collapse-borderless{
    background-color: ${theme.background} !important;
  }

  .ant-collapse-item{
    background-color: white !important;
    border-radius: 6px;
  }

  .ant-collapse-header{
    justify-content: space-between;
    height:87px !important;
    align-items: center !important;
  }

  [data-theme='compact'] .site-collapse-custom-collapse .site-collapse-custom-panel,
.site-collapse-custom-collapse .site-collapse-custom-panel {
  margin-bottom: 24px;
  overflow: hidden;
  background: ${theme.background};
  border: 0px;
  border-radius: 2px;
}

.ant-progress-inner{
  background-color:white
}

.app-modal {
  .ant-modal-content,
  .ant-modal-header {
    border-radius: 4px;
  }
  .ant-modal-body{
    background-color: ${theme.background};
  }
}
.ant-descriptions-item-label{
  color: ${theme.secondary};
}
.ant-descriptions-item-content{ 
  color: ${theme.gray};
}
`;

export default GlobalStyle;
