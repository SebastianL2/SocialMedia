import React from 'react'
import VerifiedUserIcon from '@material-ui/icons/VerifiedUser';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import {Post, PostBody, PostDescription, Images, Avatar, PostsFooter  } from "./styles";
export const Posts = ({
    name,
    username,
    verifield,
    text,
    avatar,
    imagePost,
}) => {
  return (
      <Post>
    <div className="post_avatar">
        <Avatar src= {avatar}/>
       
    </div>
    <PostBody>
        <div>
            <h3>{name} <span>
                <VerifiedUserIcon className="post_icon"/>
                @{username}  </span></h3>
            <PostDescription>
            <p>{text}</p>
            </PostDescription>
        </div>
        <Images src={imagePost}/>
        <PostsFooter>
        <ChatBubbleOutlineIcon fontSize="small"/>
        <FavoriteBorderIcon fontSize="small"/>
        
        </PostsFooter>
    </PostBody>
    </Post>


  )

}

