import React from 'react';
import './ProfileCard.css';
import profilePicture from '../images/profile.jpg';
import instagram from '../images/instagram.png';
import github from '../images/github.png';
import linkedin from '../images/linkedin.png';
import discord from '../images/discord.png';
import applemusic from '../images/applemusic.png';

const ProfileCard = () => {
  return (
    <div className="card">
      <img src={profilePicture} alt="Owen Coenraad" className="profile" />
      <div className="container">
        <h2>Owen Coenraad</h2>
        <p>HBO-ICT Student</p>
        <a href="https://instagram.com/owencoenraad" className="btn-social" target="_blank" rel="noopener noreferrer">
          <img src={instagram} alt="Instagram" className="icon" />
          <span>Instagram</span>
        </a>
        <a href="https://discord.gg/XfpsKCaUbJ" className="btn-social" target="_blank" rel="noopener noreferrer">
          <img src={discord} alt="Instagram" className="icon" />
          <span>Discord</span>
        </a>
        <a href="https://github.com/Fxreball" className="btn-social" target="_blank" rel="noopener noreferrer">
          <img src={github} alt="GitHub" className="icon" />
          <span>GitHub</span>
        </a>
        <a href="https://linkedin.com/in/owencoenraad" className="btn-social" target="_blank" rel="noopener noreferrer">
          <img src={linkedin} alt="LinkedIn" className="icon" />
          <span>LinkedIn</span>
        </a>
        <a href="https://music.apple.com/profile/owencoenraad" className="btn-social" target="_blank" rel="noopener noreferrer">
          <img src={applemusic} alt="Apple Music" className="icon" />
          <span>Apple Music</span>
        </a>
      </div>
    </div>
  );
};

export default ProfileCard;
