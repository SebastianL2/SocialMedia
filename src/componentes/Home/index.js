
import React, {useEffect, useState} from 'react'
import { Container,Header } from './styles'
import { TweetBox } from './TweetBox'
import { Posts } from './Posts'
import {db} from "../../firebase"
export const Home = () => {
  const [post, setPost] = useState([])
  const getPost = () => {
    db.collection("posts").orderBy("timestamp", "desc").onSnapshot ((res) =>{
      const docs = [];
      res.forEach(doc => {
        docs.push({...doc.data(), id:doc.id})
       

      })
      console.log(docs)
      setPost(docs)
    })
  }
  useEffect(() => {
   getPost()
  },[])
  return (
    <Container>
        {/*Header*/ }
        <Header>Home</Header>
        {/*TweetBox*/ }
        <TweetBox/> 
        {
          post.map((pos) =>(
            <Posts
            key={pos.id}
            name={pos.name}
            username={pos.name}
            verifield={pos.verifield}
            text={pos.text}
            avatar={pos.avatar}
            imagePost={pos.imagePost}
            />
            ))
          
        }
         {/*Post*/ }
         <Posts/>
         {/*Post*/ }
         {/*Post*/ }
         {/*Post*/ }
         {/*Post*/ }
         {/*Post*/ }
    </Container>
  )
}
