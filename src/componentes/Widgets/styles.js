import styled from 'styled-components'

export const Header = styled.div`
background-color:  white;


justify-content: flex-end;


`
export const Widget = styled.div`
display: flex;
margin-right: auto;
width: 80px !important;
&::-webkit-scrollbar{
    display: none;
  }
`
export const DivIcon  = styled.div`
display: flex;

align-items: center;
background-color: #eee;
padding: 10px;
border-radius: 20px;

>.searchIcon{
  color: #5b7083;
}
>input{
  border: none;
  outline:0;
  padding-left: 4px;
  background-color: #eee;
  font-size: 14px;
  height: 10px
 }
`