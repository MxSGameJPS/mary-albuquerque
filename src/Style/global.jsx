import { createGlobalStyle } from "styled-components";

const EstilosGlobais = createGlobalStyle`
  :root {
    --primary-color: #0a2351;
    --secondary-color: #3d6cb9;
    --tertiary-color: #8baae8;
    --accent-color: #6a4c9f;
    --accent-light: #b39fe6;
    --text-color: #1a1a2e;
    --text-light: #ffffff;
    --text-muted: #555566;
    --background-light: #f6f9fe;
    --background-medium: #e9edf5;
    --success-color: #2e8b57;
    --warning-color: #f39c12;
    --error-color: #e74c3c;
    --spacing-xs: 0.25rem;
    --spacing-sm: 0.5rem;
    --spacing-md: 1rem;
    --spacing-lg: 1.5rem;
    --spacing-xl: 2rem;
    --border-radius-sm: 4px;
    --border-radius: 8px;
    --border-radius-lg: 12px;
    --transition-speed: 0.3s;
    --font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    --box-shadow-sm: 0 2px 5px rgba(0, 0, 0, 0.1);
    --box-shadow: 0 4px 10px rgba(0, 0, 0, 0.15);
    --box-shadow-lg: 0 8px 20px rgba(0, 0, 0, 0.2);
  }

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html {
    line-height: 1.15;
    -webkit-text-size-adjust: 100%;
    height: 100%;
    scroll-behavior: smooth;
    font-size: 16px;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  body {
    margin: 0;
    padding: 0;
    font-family: var(--font-family);
    color: var(--text-color);
    min-height: 100vh;
    line-height: 1.6;
    overflow-x: hidden;
    text-rendering: optimizeSpeed;
  }

  @media (max-width: 768px) {
    html {
      font-size: 14px;
    }
  }

  @media (max-width: 480px) {
    html {
      font-size: 12px;
    }
  }

  @media screen and (orientation: portrait) {
    html {
      /* Ajustes específicos para modo retrato */
    }
  }

  @media screen and (orientation: landscape) {
    html {
      /* Ajustes específicos para modo paisagem */
    }
  }

  main {
    display: block;
  }

  h1, h2, h3, h4, h5, h6 {
    margin-top: 0;
    line-height: 1.2;
    color: var(--primary-color);
  }

  h1 {
    font-size: 2.5rem;
    margin-bottom: 1.2rem;
    font-weight: 700;
  }

  h2 {
    font-size: 2rem;
    margin-bottom: 1rem;
    font-weight: 600;
  }

  h3 {
    font-size: 1.75rem;
    margin-bottom: 0.875rem;
    font-weight: 600;
  }

  h4 {
    font-size: 1.5rem;
    margin-bottom: 0.75rem;
    font-weight: 600;
  }

  p {
    margin-bottom: 1rem;
    color: var(--text-color);
  }

  a {
    background-color: transparent;
    color: var(--secondary-color);
    text-decoration: none;
    transition: color var(--transition-speed), transform var(--transition-speed);
    position: relative;
  }

  a:hover {
    color: var(--primary-color);
    text-decoration: none;
  }

  a:active {
    transform: translateY(1px);
  }

  img {
    max-width: 100%;
    height: auto;
    display: block;
  }

  button,
  input,
  optgroup,
  select,
  textarea {
    font-family: inherit;
    font-size: 100%;
    line-height: 1.15;
    margin: 0;
  }

  button,
  input {
    overflow: visible;
  }

  button,
  select {
    text-transform: none;
  }

  button,
  [type="button"],
  [type="reset"],
  [type="submit"] {
    -webkit-appearance: button;
    cursor: pointer;
    background-color: var(--secondary-color);
    color: var(--text-light);
    border: none;
    padding: 0.5rem 1rem;
    border-radius: var(--border-radius);
    transition: all var(--transition-speed);
  }

  button:hover,
  [type="button"]:hover,
  [type="reset"]:hover,
  [type="submit"]:hover {
    background-color: var(--primary-color);
    transform: translateY(-2px);
    box-shadow: var(--box-shadow-sm);
  }

  button:active,
  [type="button"]:active,
  [type="reset"]:active,
  [type="submit"]:active {
    transform: translateY(0);
  }

  button::-moz-focus-inner,
  [type="button"]::-moz-focus-inner,
  [type="reset"]::-moz-focus-inner,
  [type="submit"]::-moz-focus-inner {
    border-style: none;
    padding: 0;
  }

  :focus {
    outline: 2px solid var(--secondary-color);
    outline-offset: 2px;
  }

  :focus:not(:focus-visible) {
    outline: none;
  }
  
  :focus-visible {
    outline: 2px solid var(--secondary-color);
    outline-offset: 2px;
  }

  ::-webkit-scrollbar {
    width: 10px;
    height: 10px;
  }

  ::-webkit-scrollbar-track {
    background: var(--background-medium);
  }

  ::-webkit-scrollbar-thumb {
    background: var(--tertiary-color);
    border-radius: 10px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: var(--secondary-color);
  }

  ::selection {
    background-color: var(--secondary-color);
    color: var(--text-light);
  }

  hr {
    box-sizing: content-box;
    height: 0;
    overflow: visible;
  }

  pre {
    font-family: monospace, monospace;
    font-size: 1em;
  }

  abbr[title] {
    border-bottom: none;
    text-decoration: underline;
    text-decoration: underline dotted;
  }

  b,
  strong {
    font-weight: bolder;
  }

  code,
  kbd,
  samp {
    font-family: monospace, monospace;
    font-size: 1em;
  }

  small {
    font-size: 80%;
  }

  sub,
  sup {
    font-size: 75%;
    line-height: 0;
    position: relative;
    vertical-align: baseline;
  }

  sub {
    bottom: -0.25em;
  }

  sup {
    top: -0.5em;
  }

  fieldset {
    padding: 0.35em 0.75em 0.625em;
  }

  legend {
    box-sizing: border-box;
    color: inherit;
    display: table;
    max-width: 100%;
    padding: 0;
    white-space: normal;
  }

  progress {
    vertical-align: baseline;
  }

  textarea {
    overflow: auto;
  }

  [type="checkbox"],
  [type="radio"] {
    box-sizing: border-box;
    padding: 0;
  }

  [type="number"]::-webkit-inner-spin-button,
  [type="number"]::-webkit-outer-spin-button {
    height: auto;
  }

  [type="search"] {
    -webkit-appearance: textfield;
    outline-offset: -2px;
  }

  [type="search"]::-webkit-search-decoration {
    -webkit-appearance: none;
  }

  ::-webkit-file-upload-button {
    -webkit-appearance: button;
    font: inherit;
  }

  details {
    display: block;
  }

  summary {
    display: list-item;
  }

  template {
    display: none;
  }

  [hidden] {
    display: none;
  }

  .gpu-accelerated {
    will-change: transform;
    transform: translateZ(0);
    backface-visibility: hidden;
  }

  @media (prefers-reduced-motion: reduce) {
    *, *::before, *::after {
      animation-duration: 0.01ms !important;
      animation-iteration-count: 1 !important;
      transition-duration: 0.01ms !important;
      scroll-behavior: auto !important;
    }
  }
`;

export default EstilosGlobais;
