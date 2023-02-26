import styled from "styled-components";
import imgTop from '../../assets/bg-header-top.svg'
import imgBottom from '../../assets/bg-header-bottom.svg'

export const HeaderContainer = styled.header`
    min-height: 33.25rem;
    background-color: #F8F8FF;
    position: relative;
    overflow: hidden;
    display: grid;
    place-content: center;

    ::before{
        content: "";
        background-image: url(${imgTop});
        width: 25.438rem;
        height: 21.563rem;
        position: absolute;
        z-index: 0;
        top: 0;
        left: 0;
    }

    ::after{
        content: "";
        background-image: url(${imgBottom});
        width: 25.875rem;
        height: 20.625rem;
        position: absolute;
        bottom: -0.7rem;
        right: 0;
    }

    .content{
        width: fit-content;
        position: relative;
        z-index: 1;
    }

    .top{
        text-align: center;
    }

    p{
        font-weight: 500;
        font-size: 1rem;
        line-height: 160%;
        letter-spacing: 0.1em;
        text-transform: uppercase;
        color: #E45858;
    }

    h1{
        font-size: 3rem;
        line-height: 125%;
        color: #121214;
        max-width: 40.438rem;
        margin: 1.5rem auto 0;

        span{
            color: #6246EA;
        }
    }
`

export const Form = styled.form`
    margin-top: 2.5rem;
    display: flex;
    padding: 2.5rem;
    gap: 1.5rem;
    background: #FFFFFF;
    border: 1px solid #EAEAEA;
    border-radius: 10px;

  
    input, select{
        color: #7C7C8A;
        min-width: 18.125rem;
    }

    .search-field{
        display: flex;
        align-items: center;
        gap: 0.75rem;
        background: #F4F4FF;
        border-radius: 5px;
        padding: 0.75rem 0.5rem 0.75rem 0.875rem;

        img{
            width: 1.5rem;
            height: 1.5rem;  
        }
    }

    label {
        display: none;
    }

    select, .select {
        position: relative;
    }

    select{
        z-index: 1;
    }

    .select img.open-selection{
        position: absolute;
        right: 1rem;
        z-index: 0;
    }

    button{
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 0.75rem 2rem;
        gap: 0.5rem;
        font-weight: 500;
        font-size: 0.875rem;
        line-height: 24px;
        text-transform: uppercase;
        color: #FFFFFF;
        background: #6246EA;
        border-radius: 5px;
        cursor: pointer;
        transition: background 200ms;

        :hover{
            background: #523dbe;
        }
    }
`