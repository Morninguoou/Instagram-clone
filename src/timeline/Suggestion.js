import React from 'react'
import "./Suggestion.css"
import { Avatar } from '@mui/material'

function Suggestion() {
  return (
    <div className='sugestions'>
        <div className='sugestion__title'>Sugestions for you</div>
        <div className='sugestions__usernames'>

            <div className='sugestion__username'>
                <div className='username__left'>
                    <span className='avatar'>
                        <Avatar>U</Avatar>
                    </span>
                    <div className='username__info'>
                        <span className='username'>user007</span>
                        <span className='relation'>New to Instagram</span>
                    </div>
                </div>
                <button className='follow__button'>Follow</button>
            </div>

            <div className='sugestion__username'>
                <div className='username__left'>
                    <span className='avatar'>
                        <Avatar>U</Avatar>
                    </span>
                    <div className='username__info'>
                        <span className='username'>userInwZa</span>
                        <span className='relation'>New to Instagram</span>
                    </div>
                </div>
                <button className='follow__button'>Follow</button>
            </div>

            <div className='sugestion__username'>
                <div className='username__left'>
                    <span className='avatar'>
                        <Avatar>U</Avatar>
                    </span>
                    <div className='username__info'>
                        <span className='username'>Newuser</span>
                        <span className='relation'>New to Instagram</span>
                    </div>
                </div>
                <button className='follow__button'>Follow</button>
            </div>
        </div>
    </div>
  )
}

export default Suggestion