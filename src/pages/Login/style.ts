import styled from 'styled-components'

export const LoginS = styled.div`
display: flex;
justify-content: center;
align-items: center;
width: 100%;
min-height: 100vh;
background-color: var(--white);

>div{
    justify-content: center;
    align-items: flex-start;
    padding-top: 1rem;
}
`
export const MainContent = styled.div`
display: flex;
flex-direction: row-reverse;
justify-content: space-between;
width: 960px;
height: 460px;
background-color: var(--white);

@media (max-width:930px) {
    flex-direction: column;
    justify-content: flex-start;
    width: 100%;
}
`
