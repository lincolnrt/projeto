import styled from "styled-components";

export const Container = styled.div`
    margin-top: 4rem;

    table {
        width: 100%;
        border-spacing: 0 0.5rem;

        th {
            color: #ffffff;
            text-shadow: 100;
            font-weight: 1800;
            padding: 1rem;
            text-align: left;

        }

        td {
            padding: 1rem 2.8rem;
            border: 1;
            background: var(--shape);
            color: var(--text-body);
            border-radius: 1.10rem;



            &:first-child {
              color: var(--text-title);
            }

            &.deposit {
              color: var(--green)
            }

            &.withdraw {
              color: var(--red)
            }
            
        }
    }
`;