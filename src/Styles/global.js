import { createGlobalStyle } from 'styled-components';
import px2vw from '../utils/px2vw';

export const Global = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    background-color: #EDF1F5;
    color: #ABB4BD;
    position: relative;
  :root{
    font-size: ${px2vw(24)};
    font-weight:600;

    @media (min-width: 425px) {
      font-size: .8rem;
 
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
`;

export default Global;
