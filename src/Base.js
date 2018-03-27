import { injectGlobal } from "styled-components";

injectGlobal`
  html {
    box-sizing: border-box;
    line-height: 1.5;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
  }

  *,
  *::before,
  *::after {
	  box-sizing: inherit;
  }

  body {
    font-family: 'IBM Plex Mono', monospace;
    font-size: 100%;
    margin: 0;
  }

  #appRoot {
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  main {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    padding: 1rem;
  }


  /**
   * 1. Change the font styles in all browsers.
   * 2. Remove the margin in Firefox and Safari.
   */

  button,
  input,
  optgroup,
  select,
  textarea {
    font-family: inherit; /* 1 */
    font-size: 100%; /* 1 */
    line-height: 1.15; /* 1 */
    margin: 0; /* 2 */
  }


  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p {
    margin: 0;
  }
`;
