import React, { useState } from 'react';
import "./Timeline.css";
import Suggestion from './Suggestion';
import Post from './Post';

function Timeline() {
    const [posts, SetPosts] = useState([
        {
            user : "minzenic_",
            postImage: 'https://scontent.fbkk6-1.fna.fbcdn.net/v/t39.30808-6/369059555_3503159009971712_2689767565895017690_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=efb6e6&_nc_ohc=-mrtu0r60DsAX9QK5Je&_nc_ht=scontent.fbkk6-1.fna&oh=00_AfDEuSHkoCZC580IeH_M8a6x-6TcDZLsmIVXXSYXuFgRxw&oe=657E458D',
            likes: 999,
            timespamp: '2d',
        },
        {
            user : "allure_thecatt",
            postImage: 'https://media.discordapp.net/attachments/794207922364088340/1184627078243565618/IMG_5206.jpg?ex=658ca8f0&is=657a33f0&hm=6906f9b5ad2c8bab6b6f1acfe6133f38bfb16201936b5b836ac6711cb60f0d34&=&format=webp&width=676&height=676',
            likes: 5,
            timespamp: '12h',
        },
        {
            user : "niranoon.nn",
            postImage: 'https://scontent.fbkk6-2.fna.fbcdn.net/v/t39.30808-6/352517754_293201216374218_3770683663861686552_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=efb6e6&_nc_ohc=LG5-DiLuQYgAX_xTYjV&_nc_ht=scontent.fbkk6-2.fna&oh=00_AfBFX9HFXSnrd5Zo4OsImnpCCrKupdHUprlHomRG9zX1Fg&oe=657EF72C',
            likes: 348,
            timespamp: '9h',
        },
    ]);
  return (
    <div className='timeline'>
        <div className='timeline__left'>
            <div className='timeline__post'>
                {posts.map((post) => (
                    <Post 
                    user = {post.user}
                    postImage = {post.postImage}
                    likes = {post.likes}
                    timespamp = {post.timespamp}/>
                ))}
            </div>
        </div>
        <div className='timeline__right'>
            <Suggestion/>
        </div>
    </div>
  )
}

export default Timeline