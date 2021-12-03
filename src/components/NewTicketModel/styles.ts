import styled from 'styled-components';
import { darken, transparentize } from 'polished'

export const Container = styled.form`
    h2 {
        color: var(--text-title);
        font-size: 24px;
        margin-top: 1px;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    input {
        width: 100%;
        padding: 0 1.5rem;
        height: 4rem;
        border-radius: 0.25rem;
        margin-top: 20px;


        border: 1px solid #d7d7d7;
        background: #e7e9ee;

        font-weight: 400;
        font-size: 1rem;

        &::placeholder {
            color: var(--text-body);
        }

        & + input {
            margin-top: 1rem;
        }
    }

    button[type="submit"] {
        width: 100%;
        padding: 0 1.5rem;
        height: 4rem;
        margin-top: 1.5rem;
        background: #c00012;
        color: #fff;
        border: 0;
        font-size: 1rem;
        border-radius: 0.25rem;
        font-weight: 600;

        transition: filter 0.2s;

        &:hover {
            filter: brightness(0.9)
        }
    }
`;

export const TransactionTypeContainer = styled.div`
    margin: 1rem 0;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 0.5rem;
`;

interface IRadioBoxProps {
    isActive: boolean;
    activeColor: 'red' | 'green';
}

const colors = {
    red: '#e52e4d',
    green: '#33cc95'
}

export const RadioBox = styled.button<IRadioBoxProps>`
button {
    height: 4rem;
    border: 1px solid #d7d7d7;
    border-radius: 0.25rem;
    /* background: transparent */
    background: ${(props) => 
        props.isActive ? 
        transparentize(0.9, colors[props.activeColor]) : 
        'transparent'};

    display: flex;
    align-items: center;
    justify-content: center;

    transition: border-color 0.2s;

    &:hover {
        border-color: ${darken(0.2, '#d7d7d7')}
    }


    img {
        width: 20px;
        height: 20px;
    }

    span {
        margin-left: 1rem;
        font-size: 1rem;
        color: var(--text-title);
    }
}
`;