import styled, { css } from 'styled-components';

export const Contenedor = styled.div` 
padding: 20px;
border-right: 1px solid #ddd;
flex: 0.2;
min-width: 255px;

>.Libro-logo{
    display: flex;
    width: 25px;
    height: 25px;
    margin: 10px 0;
    width:46px;
    height: 30px;
    fill: var(--webcolor) !important;
}
>Button{
    background-color: var(--webcolor) !important;
    border: none !important;
    color: white !important;
    font-weight: 600 !important;
    width: 100px !important;
    height: 40px !important;
    margin-top: 20px !important;
    border-radius: 30px !important;
    display: flex;
    text-transform: inherit !important;
    
}
@media only screen and (max-width: 1280px) {
    flex:0.05;
    min-width: 50px;
    >Button{
        display: none;
    }

}
@media only screen and (max-width: 1004px) {
    width: 40px;


}
@media only screen and (max-width: 500px) {
  position: fixed;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items:center;
  z-index:999;
  height: 50px;
  background-color: white;
  width: 100%;
  padding: 0;
  .Libro-logo{
    display: none;
  }
}
`
export const SidebarIcon = styled.div`
 display: flex;
 align-items: center;
 justify-content: center;
 padding: 94px 90;
>h2{
    font-size: 19px;
    margin: 0 15px 0 20px;
    font-weight: 700;
}

>.MuiSvgIcon-root{
    width: 25px;
    height: 25px;
}
&:hover{
    background-color: var(--Hover);
    color: var(--webcolor);
    transform: color 100ms ease-out;
    border-radius: 99px !important;
    width: 170px !important;
  }
  
  ${props =>
    props.active && css`
      color: var(--webcolor);
      background-color: var(--Hover);
        border-radius: 99px !important;
        width: 170px !important;
    `}

    @media only screen and (max-width: 1280px) {
        border-radius: 50%;
        background-color: transparent;
        border-radius: 99px !important;
        width: 170px !important;
        >h2{
            display:none;
        }
    }
    @media only screen and (max-width: 500px) {
     color:"#b8b8b8";
     
    }
    
`