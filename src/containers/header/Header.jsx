import React from 'react';
import { motion } from "framer-motion"
import ai from '../../assets/ai.png';
import './header.css';

const Header = () => (
  <div className="gpt3__header section__padding" id="home">
    <motion.div
    initial={{x:"-100vw"}}
    animate={{x:0}}
    transition={{delay:"1", duration:1}}
    className="gpt3__header-content">
      <h1 className="gradient__text">NFT Drop</h1>
      <p>Nft Name first NFT collection will be available Friday, November 18 as part of an exclusive, multi-year partnership with Company Name, the world's leading blockchain ecosystem and cryptocurrency infrastructure provider.</p>

      <div className="gpt3__header-content__input">
        <motion.button 
        whileHover={{
          scale:1.1,
          textShadow:"0px 0px 8px rgb(255,255,255)",
          boxShadow:"0px 0px 8px rgb(255,255,255)",
        }}
        type="button">Get more details</motion.button>
      </div>
    </motion.div>

    <motion.div 
    initial={{opacity:0}}
    animate={{opacity:1}}
    transition={{delay:1, duration:3}}
    className="gpt3__header-image">
      <img src={ai} />
    </motion.div>
  </div>
);

export default Header;
