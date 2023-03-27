import styled from "styled-components";

export const MainContainer = styled.main`
    max-width: 1200px;
    margin: 0rem auto;
    margin-top: 10rem;
    margin-bottom: 4rem;
    display: flex;
    justify-content: space-between;
    

    .show-content{
        display: flex;
        justify-content: center;
        align-items: center;
        width: 190px;
        height: 48px;
        gap: 1.5rem;
        border: 1px solid #EAEAEA;
        border-radius: 6px;
    }
`

export const ListButton = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 4px 24px;
    background: #6246EA;
    border-radius: 5px;
    font-weight: 700;
    font-size: 14px;
    line-height: 24px;
    text-transform: uppercase;
    color: #FFFFFF;
    cursor: pointer;
`

export const MapButton = styled.button`
    font-weight: 700;
    font-size: 14px;
    line-height: 24px;
    display: flex;
    align-items: center;
    text-align: center;
    text-transform: uppercase;
    color: #6246EA;
    cursor: pointer;
`
