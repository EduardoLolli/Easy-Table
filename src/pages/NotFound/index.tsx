import React from 'react';
import styled from 'styled-components';


const NotFound: React.FC = () => {
    const NotFoundPage = styled.div`
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        height: 100vh;
        font-family: Arial, sans-serif;
        background-color: #f8f8f8;
        color: #333;

        h2 {
            font-size: 2rem;
            margin-bottom: 1rem;
        }
    `;

    return (
        <NotFoundPage>

            <h2>Página não encontrada</h2>

        </NotFoundPage>
    );
};
export default NotFound;