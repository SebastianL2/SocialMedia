import React from 'react'
import { Header,Widget,DivIcon } from './styles'
import SearchIcon from '@material-ui/icons/Search';

export const Widgets = () => {
  return (
   <Widget>
     <Header>
       <DivIcon>
         <SearchIcon className="searchIcon"/>
         <input placeholder="Buscar"/>
         
       </DivIcon>
     </Header>
   </Widget>
  )
}
