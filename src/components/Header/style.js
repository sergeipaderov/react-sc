import styled from 'styled-components'

export const HeaderStyled = styled.header`
    width: 100%;
    background-color: ${({ theme }) => theme.primary};
    z-index: 9998;
    position: fixed;
    border-bottom: 1px solid #d4d6d5;
`

export const LogoStyled = styled.div`
    position: absolute;
    height: 100%;
    display: flex;
    align-items: center;
`

export const MenuContentStyled = styled.div`
    position: absolute;
    z-index: 4;
    width: 100%;
    background-color: ${({ theme }) => theme.primary};
    overflow: hidden;
    display: none;
    height: 40px;
    padding: 10px;

    ${({theme}) => theme.desktop`
        display: flex;
        align-items: center;
        position: fixed;
    `}
`

export const MenuIconStyled = styled.img`
    cursor: pointer;
`

export const MenuStyled = styled.ul`
    list-style: none;
    margin: 0;
    padding: 0 10%;
    overflow: hidden;
    font-size: 1.3rem;
    display: flex;
    justify-content: space-between;

    li a {
        display: block;
        color: ${({theme}) => theme.secondary};
        text-align: center;
        padding: 16px;
        outline: none;
        text-decoration: none;
        text-transform: uppercase;

        &:hover {
            color: #9f2727;
            transition: .5s;
        }
    }

    ${({theme}) => theme.desktop`
        display: ${({show}) => show ? 'block' : 'none'};
        position: fixed;
        z-index: 4;
        background-color: ${({ theme }) => theme.primary};
        top: 40px;
        overflow: hidden;
        height: 100%;
        width: 100%;
        padding: 0;

        li {
            width: 100%;
        }
    `}
`