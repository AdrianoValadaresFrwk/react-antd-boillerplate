import { createGlobalStyle } from 'styled-components';

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
    background: #F5F5F5;
  }
  button, input, optgroup, select, textarea {
    font-family: inherit;
  }
  body {
    -webkit-font-smoothing: antialiased !important;
    background-color: #F5F5F5;
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

  @media (max-width: 768px) {
    .remove-from-sm-screen{
      display: none;
    }
  }
  .ant-form-item-required::before {
    content: '' !important;
  }
  .ant-input, .ant-input-affix-wrapper{
    color: #0A5F55;
    border: 1px solid #fff;
    border-radius: 4px;
  }
  .ant-input-password-icon{
    color: #0A5F55;
  }
  .ant-form-item-label label{
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 16px;
    color: #454545;
  }
`;

export default GlobalStyle;
