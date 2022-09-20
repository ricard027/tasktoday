import styled from 'styled-components';
import colors from '../colors/colors.style';

export const MessageInput = styled.span`


height: 2rem;
text-align: center;

font-size: 1.2rem;
color: #A74D3E;
opacity:90%;
`

export const CustomSection = styled.section(()=> (`

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

.inptAdd, button{
  border: none;
  margin:0 .2rem;
  border-radius: .7rem;
  width: 12rem;
  padding: .6rem;
  outline: none;

 
}

.add{
 
 cursor: pointer;
 background-color:${colors.LightColor};
 display: flex;
 align-itens: center;
 justify-content: space-between;
 gap: .2rem;
 font-size: 1em;
 transition: 300ms;
 
}

.add:hover{
box-shadow: 1px 2px 10px #21786d;
}
.spanButton{
 transition:  300ms;

}


button:active .spanButton{
 transform:rotate(360deg)
}

.inptAdd{
  border: solid 1px #eee;
}

.completed{
  heigth:18px;
  font-size:.9rem;
  cursor: pointer;
  border-radius:.3rem;
  background-color:rgba(0,0,0,.03);
  color:${colors.SecundaryColor};
  position:relative;


  .qtd{
 
    background-color:${colors.SecundaryColor};
    border-radius:50%;
    position:absolute;
    display: none;
    padding:.2rem;
    font-size:.5rem;
    top:-0.7rem;
    right:-0.1rem;
    color:#fff;
    border:solid #fff;

  &.active{
    
    display: block;
    opacity:90%;
    padding:.4rem;

  }
    
 }

}

`
))


export const Container = styled.ul`
background-color:rgba(0,0,0,0.020);

padding: 2rem;
margin: 3rem auto 0 auto;
min-width: 60vw;
border-radius: 1rem;

`;


export const Card = styled.li(({done})=> (
`
&:after{
  content:'';
  background-color:${done?colors.SecundaryColor:'#fff'};
  width:${done?'100%':'0'};
  height:100%;
  position:absolute;
  top:0;
  left:0;
  bottom:0;
  opacity:${done?'50%':'0%'};
  border-radius:1rem;
  transition:ease-in-out .3s;

}

transition:ease-in 300ms;
background-color:#fff;
box-shadow: .2rem .2rem 1rem #eee;
justify-content: space-between;
align-items: center;
padding: 1.1rem;
display:flex;

width:70%;
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

input{
  cursor: pointer;
  width:1.2rem;
  height:1.2rem;
  z-index:1;
}

label{
  text-wrap:wrap;
  text-decoration:${done?'line-through':'initial'};
  font-size: 1.2rem;
  color:${done?'#000':'#333'};
  
}
`
))



export const ButtonsTask = styled.div(({done})=>(
  `
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
z-index: 2;

}

.remove:hover{

color:red;
background-color:rgba(0,0,0,0.1);

}
.edit:hover{
background-color:rgba(0,0,0,0.1);
color: green;

}
`
))

export const CustomModal = styled.div`
background-color: rgba(0,0,0,.2);
position: fixed;
top:0;
width: 100%;
height: 100vh;
align-items: center;
margin: 0 auto;
display: flex;
justify-content:center;
z-index: 2;

.modal{
z-index: 3;

}
input{
  outline: none;
  padding:.5rem;
  border-radius: .5rem;
  border: none;
}
`
export const CompletedTasks = styled.section`

width: 60vw;
height: 100vh;
margin: 0 auto;
border-radius: .2rem;
padding:1rem;


.previousButton{
  text-decoration: none;
  color:#333;
  font-size:1.5rem;
  opacity:50%;
  border-radius:50%;
  width:1.5rem;
  height:1.5rem;
  transition: .3s;
  margin-left: 15%;

  &:hover{
    background-color:rgba(0,0,0,0.1);
    color:#000;
    opacity:100%;
  }

 }


 h3{
  color:${colors.PrimaryColor};
  text-align: center;
  padding:1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  gap:.5rem;
  margin: 0 auto;

  & .completedIcon{
   
  }
}

li{

background-color:${colors.LightColor};
box-shadow: .1rem .1rem .5rem #eee;
justify-content: space-between;
align-items: center;
padding: 2rem;
display: flex;
width:70%;
transition:all .2s;
margin: 0 auto;
margin-top: 1rem;
border-radius:1rem;
position:relative;
cursor: pointer;
box-shadow: .2rem .2rem 1rem ${colors.LightColor};

&:hover{
  transform: scale(1.010);
}

}


`