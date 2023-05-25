import React, { useEffect, useState} from 'react'
import {Tweetbox, Div, Avatar, Form,DivBox,File} from "./styles"
import AddPhotoAlternateIcon from '@material-ui/icons/AddPhotoAlternate';
import GifIcon from '@material-ui/icons/Gif';
import { Button } from '@material-ui/core';
import {db,storage} from "../../firebase"
import User from '../../img/userd.png'


export const TweetBox = () => {
  const [images, setImages] = useState ('');
  const [tweetImg, setTweetImg] = useState ('');
  const [tweetMsg, setTweetMsg] = useState ('');
  const [usuario, setUsuario] = useState ('');

  useEffect(()=> {
    const perfil = JSON.parse(localStorage.getItem('Perfil'))
    const usuario = JSON.parse(localStorage.getItem('Usuario'))
    if(perfil){
      setImages(perfil)
     
    } 
    if(usuario){
      setImages(usuario)
    }
   },[])

   useEffect(()=> {
    localStorage.setItem('Perfil', JSON.stringify(images))
    localStorage.setItem('Usuario', JSON.stringify(usuario))
   },[images,usuario])



   const sendTweet = async (e) => {
   e.preventDefault()
   if(usuario.length < 1){
     return alert("Debes ingresar un nombre de usaurio")
   }
   if(images.length < 1){
    return alert("Debes ingresar una foto de perfil")
   }
   if(tweetMsg.length < 5){
    return  alert("ingresa mas informacion a tu publicacion")
   }
   if(tweetMsg.length > 300){
    return alert("demasiada informacion en tu publicacion");
   }else{
     await db.collection('posts').doc().set({
       name:usuario,
       username: usuario,
       verifield: true,
       text: tweetMsg,
       timestamp: Date.now(),
       avatar: images,
       imagePost: tweetImg
     })

     setTweetImg('')
     setTweetMsg('')
     setUsuario('')
   }
   }
   
   const handleSubir = e=>{
    const file = e.target.files[0];
    const storageRef= storage.ref(`/avatar/${file.name}`).put(file);
    storageRef.on(
      "state_changed",
      snapshot =>{},
      error =>{
        console.log(error)
      }, () => {
       storage 
       .ref("avatar")
       .child(file.name)  
       .getDownloadURL()
       .then(url =>{
        setImages(url)

       })
      }

    )

   }
   const handlePost= e=>{
    const file = e.target.files[0];
    const storageRef= storage.ref(`/post/${file.name}`).put(file);
    storageRef.on(
      "state_changed",
      snapshot =>{},
      error =>{
        console.log(error)
      }, () => {
       storage 
       .ref("post")
       .child(file.name)  
       .getDownloadURL()
       .then(url =>{
        setTweetImg(url)

       })
      }

    )

   }
    return (
      <Tweetbox>
        <Form>
          <Div>
            {
              images ? <Avatar src={images} alt="" /> : <Avatar src={User} alt="" />
            }
            
            <File type="file" onChange={handleSubir} />
            <div className="columns">
              <input type="text" 
              placeholder="Usuario" 
              value={usuario}
              onChange={e=> setUsuario(e.target.value)}
              />
              <input type="text" 
              placeholder="Sube lo que quieras" 
              value={tweetMsg}
              onChange={e=> setTweetMsg(e.target.value)}
              />
              
            </div>
          </Div>
          <Div>
            <DivBox>
              <File type="file" primary  onChange={handlePost}  />
              <AddPhotoAlternateIcon />
              <GifIcon />
            </DivBox>
            <File type="file" onChange={handlePost}  />
            <input
              className="entrU"
              type="text"
              placeholder="Opcional: Url de la imagen"
            />
            <Button
            onClick={sendTweet}
            >Subir</Button>
          </Div>
        </Form>
      </Tweetbox>
    );
  };