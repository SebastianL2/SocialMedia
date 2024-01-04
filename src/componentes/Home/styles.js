import styled,{css} from 'styled-components'

export const Container = styled.div` 
flex: 0.6;
border-right: 1px  solid #ddd;
overflow-y: scroll;
box-sizing: border-box;

&::-webkit-scrollbar{
    display: none;
  }

  -ms-overflow-style:none;

  @media only screen and (max-width: 1280px) {
     flex:0.55;
    }
  @media only screen and (max-width: 1004px) {
    flex:0.95;
  }
  @media only screen and (max-width: 500px) {
    flex: 1;
  }
`
export const Header= styled.div`

  padding: 10px; /* Espaciado interno */

  /* Estilos para el texto */
  font-family: 'Arial', sans-serif; /* Cambia la fuente según tus preferencias */
  font-size: 1.5rem; /* Tamaño del texto */
  font-weight: bold; /* Peso de la fuente */
` 

/*TWEETBOXX*/
export const Tweetbox = styled.div`
/* Estilos del Tweetbox */
align-items:center;
padding: 5px 15px;

`
  
  export const Div = styled.div`
    /* Estilos del Div */
    display: flex;
    width: 100%;
    
    >.columns{
        display: flex;
        flex-direction: column;
        width: 100%;
        >input{ 
            margin-left: 10px;
            margin-top: 10px;
            width: 100%;
            border: none;
            outline: 0;
            font-size: 19px;
            line-height: 25px;
            color: #0f1419;
        }
    }
    >input{
        margin-left: 10px;
        width: 100%;
        flex: 1;
        outline: 0;
        border: none;
        font-size: 16px;
        line-height: 25px;
        color: #0f1419;
    }
    >Button{
        background-color: var(--webcolor) !important;
        border: none !important;
        color: white !important;
        font-weight: 600 !important;
        width: 80px !important;
        height: 40px !important;
        margin-top: 20px !important;
        border-radius: 30px !important;

    }
  `
  export const DivBox = styled.div`
    /* Estilos del Div */
    display: flex;
    justify-content: space-aroaund
  `
  export const Avatar = styled.img`
    /* Estilos del Avatar */
    border-radius: 50%;
    width: 50px;
    height: 50px;
    object-fit: fill;
    >.MuiSvgIcon-root{
        fill: var(--webcolor);
        margin-left: 1rem;
        border: 2px var(--webcolor);
        width: 20px;
        height: 20px;
        border-radius: 5px;
        color: pointer;
     
       }
  `
  
  export const Form = styled.form`
    /* Estilos del Form */
     display: flex;
     flex-direction: column;
  `

  export const File= styled.input`
  /* Estilos del Form */
  max-width: 35px;
  position: absolute;
  z-index: 10;
  opacity: 0;
  padding-top: 10px;
  ${props =>
    props.primary && css`
    margin-left: 55px;
    `}
`
  /*post*/
  export const Post = styled.div`
  /* Estilos de los Posts */
  
  padding: 10px 15px;
  border-top: 1px solid #ddd;
  margin-top: 5px;
 
  .post_avatar{
    margin-top: 5px;
  }
`

export const PostBody = styled.div`
  /* Estilos del cuerpo del Post */
  
  padding-left: 10px;
  width: 100%;
  overflow: hidden;
  >div span{
    font-weight: 600;
    font-size: 15px;
    color: #5b7083;
  }
  .post_icon{
    font-size: 14px;
    color: var(--webcolor);

  }
  h3{
    padding: 0;
    margin: 0;
  }
`

export const PostDescription = styled.div`
  /* Estilos de la descripción del Post */

`

export const Images = styled.img`
  /* Estilos de las imágenes */
  max-width: 100%;
  height: auto;
`



export const PostsFooter = styled.div`
  /* Estilos del pie de los Posts */
  >.MuiSvgIcon-root:hover:nth-child(1){
    fill: #1da1f2 !important;
    cursor: pointer !important;
    
  }
  >.MuiSvgIcon-root:hover:nth-child(2){
    fill: #E02452 !important;
    cursor: pointer !important;
    
  }
`






