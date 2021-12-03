import styled from 'styled-components';
import logoImg from '../../assets/logo3.png'


export const Content = styled.div`
    max-width: 1120px;
    margin: 0 auto;
    padding: 1rem 1rem 10rem;
    display: flex;
    align-items: center;
    justify-content: space-between;

    button {
        font-size: 1rem;
        color: #FFF;
        background: #700505;
        border: 0;
        padding: 0 2rem;
        border-radius: 0.25rem;
        height: 90px;

        transition: filter 0.2s;

        &:hover {
            filter: brightness(0.9);
        }
    }
`;