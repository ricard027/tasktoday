import styled from 'styled-components';
import colors from '../colors/colors.style';


export const MessageInput = styled.span`


height: 2rem;
text-align: center;

font-size: 1.2rem;
color: #459a96;
opacity:90%;
`

export const CustomSection = styled.section`

text-align: center;
height: 10rem;
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
  border-radius: .7rem;
  width: 12rem;
  padding: .6rem;

 
}

button{
 
 cursor: pointer;
 background-color:${colors.LightColor};
 display: flex;
 align-itens: center;
 justify-content: space-between;
 gap: .2rem;
 font-size: 1em;
 
}
button:hover{
box-shadow: 1px 2px 10px #21786d;
}
.spanButton{
 transition:  300ms;

}


button:active .spanButton{
 transform:rotate(360deg)
}

input{
  border: solid 1px #eee;
}
`


export const Container = styled.ul`
background-color:rgba(0,0,0,.3);

padding: 2rem;
margin: 3rem auto 0 auto;
min-width: 60vw;
border-radius: .5rem;

`;


export const Card = styled.li`

background-color: #fff;
justify-content: space-between;
align-items: center;
padding: 1.5rem;
display: flex;
width: 70%;
margin: 0 auto;
margin-top: 1rem;
border-radius:1rem;
position:relative;

span{
  font-size: .6rem;
  opacity: 60%;
  position: absolute;
  right:.8rem;
  bottom:.2rem;
  
 

}
`

export const ButtonsTask = styled.div`

display: flex;
flex-direction: column;
justify-content: space-evenly;
align-items: center;
gap: .5rem;



height: 100%;
width: 1%;





.edit,.remove{

transition:all .2s ease-in ;
font-size: 1.6rem;
cursor: pointer;

border-radius:50%;
padding:.3rem;
opacity:80%;

}

.edit:hover,.remove:hover{
opacity:100%;
background-color:#e3e9e5;
}

`