import styled from "styled-components"

export const Card = styled.div`
    background: #FFFFFF;
    border: 1px solid #EAEAEA;
    border-radius: 10px;
    max-width: 384px;
    overflow: hidden;

    .content{
        display: grid;
        padding: 16px;
        gap: 16px;
        
    }

    .content h3{
        color: #121214;
        font-weight: 700;
        font-size: 20px;
        line-height: 140%;
    }

    .content p{
        opacity: 0.75;
    }

    .location{
        display: flex;
        align-items: center;
        gap: 10px;
        opacity: 0.75;
    }

    .location img{
        opacity: 1;
    }
`