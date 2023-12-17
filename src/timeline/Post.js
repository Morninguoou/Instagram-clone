import React from 'react'
import "./Post.css"
import { Avatar } from '@mui/material'
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';
import BookmarkBorderOutlinedIcon from '@mui/icons-material/BookmarkBorderOutlined';

function Post({user,postImage,likes,timespamp}) {
  return (
    <div className='post'>
        <div className='post__header'>
            <div className='post__headerAuthor'>
                <Avatar style={{marginRight: "10px"}}>
                    {user.charAt(0).toUpperCase()}
                    </Avatar>
                {user} • <span>{timespamp}</span>
            </div>
            <MoreHorizIcon />
        </div>
        <div className='post__img'>
            <img src={postImage} alt=''/>
        </div>
        <div className='post__footer'>
            <div className='post__footerIcons'>
                <div className='post_iconsMain'>
                    <FavoriteBorderIcon className='postIcon'/>
                    <ChatBubbleOutlineIcon className='postIcon'/>
                    <SendOutlinedIcon className='postIcon'/>
                </div>
                <div className='post__iconSave'>
                    <BookmarkBorderOutlinedIcon  className='postIcon'/>
                </div>
            </div>
            Liked by {likes} people
        </div>
    </div>
  )
}

export default Post