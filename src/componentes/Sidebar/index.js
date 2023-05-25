import React from 'react'
import PermIdentityIcon from '@material-ui/icons/PermIdentity';
import ImportContactsIcon from '@material-ui/icons/ImportContacts';
import HomeIcon from '@material-ui/icons/Home';
import { Contenedor } from './styles';
import { IconOption } from './IconOption';
import ExploreIcon from '@material-ui/icons/Explore';
import { Button } from '@material-ui/core';

export const Sidebar = () => {
  return (
    <Contenedor>

     <ImportContactsIcon className="Libro-logo"/>
     <IconOption active text="Home" Icon={HomeIcon}/>
     <IconOption text="Explorar" Icon={ExploreIcon}/>
     <IconOption text="Perfil" Icon={PermIdentityIcon}/>
     <Button variant="outlined" fullWidth> Subir </Button>
     </Contenedor>
    
  )
}
