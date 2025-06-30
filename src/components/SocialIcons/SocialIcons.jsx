import React from 'react';
import './SocialIcons.css';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube } from 'react-icons/fa';
import { FaXTwitter } from "react-icons/fa6";
import { TbBrandWhatsappFilled } from "react-icons/tb";
const SocialIcons = () => {
  return (
    <div className="social_icons mt-4">
      <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="link">
        <FaFacebookF />
      </a>
      <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="link">
        <FaInstagram />
      </a>
      <a href="https://www.whatsapp.com" target="_blank" rel="noopener noreferrer" className="link">
        <TbBrandWhatsappFilled />
      </a>
      <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="link">
        <FaLinkedinIn />
      </a>
      <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer" className="link">
        <FaYoutube />
      </a>
    </div>
  );
};

export default SocialIcons;
