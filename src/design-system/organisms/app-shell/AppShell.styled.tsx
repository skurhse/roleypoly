import styled, { createGlobalStyle } from 'styled-components';
import { palette } from 'roleypoly/src/design-system/atoms/colors';
import * as _ from 'styled-components'; // eslint-disable-line no-duplicate-imports

export const Content = styled.div<{ small?: boolean }>`
    margin: 0 auto;
    margin-top: 50px;
    width: ${(props) => (props.small ? '960px' : '1024px')};
    max-width: 98vw;
    max-height: calc(100vh - 50px);
`;

export const GlobalStyles = createGlobalStyle`
    body {
        background-color: ${palette.taupe200};
        color: ${palette.grey600};
        overflow-y: hidden;
        scroll-behavior: smooth;
    }
    * {
        box-sizing: border-box;
    }
`;
