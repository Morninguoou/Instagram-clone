import React from 'react';
import "./Sidenav.css";
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import ExploreIcon from '@mui/icons-material/Explore';
import SlideshowIcon from '@mui/icons-material/Slideshow';
import ChatIcon from '@mui/icons-material/Chat';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import MenuIcon from '@mui/icons-material/Menu';

function Sidenav() {
  return (
    <div className='sidenav'>
        <img className='sidenav__logo'src='http://logo-logos.com/2016/10/Instagram_logo_wordmark_logotype.png' alt='Instagram Logo'></img>
    <div className='sidenav__btns'>
        <button className='sidenav__btn'>
            <HomeIcon className='icon'/>
            <span>Home</span>
        </button>
        <button className='sidenav__btn'>
            <SearchIcon className='icon'/>
            <span>Search</span>
        </button>
        <button className='sidenav__btn'>
            <ExploreIcon className='icon'/>
            <span>Explore</span>
        </button>
        <button className='sidenav__btn'>
            <SlideshowIcon className='icon'/>
            <span>Reels</span>
        </button>
        <button className='sidenav__btn'>
            <ChatIcon className='icon'/>
            <span>Messages</span>
        </button>
        <button className='sidenav__btn'>
            <FavoriteBorderIcon className='icon'/>
            <span>Notification</span>
        </button>
        <button className='sidenav__btn'>
            <AddCircleOutlineIcon className='icon'/>
            <span>Create</span>
        </button>
    </div>
        <div className='sidenav__more'>
            <button className='sidenav__btn'>
                <MenuIcon className='icon'/>
                <span>More</span>
            </button>
        </div>
    </div>
  )
}

export default Sidenav