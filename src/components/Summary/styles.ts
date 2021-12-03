import styled from 'styled-components';

export const Container = styled.div`
    display: center;
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;
    margin-top: -8rem;

    div {
        background: var(--shape);
        padding: 2.8em;
        border-radius: 2rem;

        header {
            display: center;
            align-items: center;
            justify-content: space-between;
        }

        strong {
            align-items: center;
            margin-top: 2rem;
            font-size: 2rem;
            font-weight: 500;
            line-height: 3rem;
        }

        &.highlight-background {
            background: #4242b9;
            color: #FFF;
        }
    }
`;