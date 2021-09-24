import { createGlobalStyle } from 'styled-components';
import px2vw from '../utils/px2vw';
export const Global = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    background-color: #EDF1F5;
    color: #ABB4BD;
  }
  :root{

    font-size: 24px;
    font-weight:600;

    @media (min-width: 425px) {
      font-size: 1rem;
 
    }
    @media (min-width: 768px) {
      font-size: 1rem;
      font-weight:600;
    }
    @media (min-width: 1024px) {
      font-size: 1.2rem;
      font-weight:600;

    }
  }
  ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }
  a {
    text-decoration: none;
  }
`;

export default Global;
