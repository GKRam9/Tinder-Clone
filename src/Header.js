import React from 'react';
import './Header.css';
import PersonRoundedIcon from '@material-ui/icons/PersonRounded';
import IconButton from '@material-ui/core/IconButton';
import ForumIcon from '@material-ui/icons/Forum';

function Header() {
  return (
    <div className="header">
      <IconButton>
        <PersonRoundedIcon fontSize="large" className="header__icon" />
      </IconButton>

      <img
        src="https://1000logos.net/wp-content/uploads/2018/07/Tinder-logo.png"
        alt=""
        className="header__logo"
      />

      <IconButton>
        <ForumIcon fontSize="large" className="header__icon" />
      </IconButton>
    </div>
  );
}

export default Header;
 