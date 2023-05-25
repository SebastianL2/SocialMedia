import {createGlobalStyle} from 'styled-components' 

export default 
createGlobalStyle`

:root{
    --webcolor: #1d9bf0;
    --webhover: #1a91da;
    --Hover: rgba(24,161,242, .1);
}
*{
    margin: 0;
    margin-top: 5px;
}
    body {
        margin: 0;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
        'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
        sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }
    
    code {
        font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
        monospace;
    }
    .App{
        display: flex;
        height: 100vh;
        max-width: 12250px;
        margin: 0 auto;
       // border:1px solid #ddd;
    }
    
`