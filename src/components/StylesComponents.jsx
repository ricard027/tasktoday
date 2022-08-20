import styled from 'styled-components';
import colors from '../colors/colors.style';


export const CustomSection = styled.section`

text-align: center;
height: 8rem;
padding:1rem;
display: flex;
flex-direction: column;
align-items: center;
gap: .5rem;



h2{
  font-size:2rem;
  color:${colors.SecundaryColor};
}

input, button{
  border: none;
  margin:0 .2rem;
  border-radius: .1rem;
  width: 10rem;
  padding: .2rem;
 
}

button{
 
 cursor: pointer;
 background-color:${colors.SecundaryColor};
 display: flex;
 align-itens: center;
 justify-content: space-evenly;
 gap: .2rem;
 font-size: 1em;
 
}
`


export const Container = styled.ul`
background-color:rgba(0,0,0,.1)};
padding: 2rem;
margin: 3rem auto 0 auto;
opacity: 90%;
width: 70vw;
border-radius: .5rem;

`;


export const Card = styled.li`
border-bottom: .1rem solid ${colors.greyColor};
color: ${colors.greyColor};
justify-content: space-between;
padding: 1rem;
display: flex;
width: 80%;
margin: 0 auto;
margin-top: 1rem;
position: relative;
`

export const ButtonsTask = styled.div`

display: flex;
flex-direction: column;
justify-content: space-evenly;
align-items: center;
gap: .3rem;



height: 100%;
width: 10%;


position: absolute;
right: -5rem;
top:.2rem;


.btnTask {

font-size: 1rem;
cursor: pointer;

 
}

`