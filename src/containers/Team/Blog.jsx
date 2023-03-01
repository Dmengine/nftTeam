import React, {useEffect} from 'react';
import { motion } from "framer-motion"
import blog01 from '../../assets/01.png';
import blog02 from '../../assets/00.png';
import blog03 from '../../assets/03.png';
import blog04 from '../../assets/02 .png';
import './blog.css';
import  AOS  from 'aos';
import "aos/dist/aos.css"


function Blog() {
      useEffect(()=>{
  AOS.init({duration:500});
}, []);
  return (
      <div data-aos="zoom-in-down" className="gpt3__blog" id="blog">
   <div className="blog-hed"><h1>Our Team</h1></div>
   <div className="team">
    <motion.div whileHover={{
          scale:1.1,
          textShadow:"0px 0px 8px rgb(255,255,255)",
          boxShadow:"0px 0px 8px rgb(255,255,255)",
        }} data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000" className="teams">
      <img src={blog01} alt="" srcset="" />
      <h5>Mario Fueyo</h5>
      <p>Designation</p>
    </motion.div>
    <motion.div whileHover={{
          scale:1.1,
          textShadow:"0px 0px 8px rgb(255,255,255)",
          boxShadow:"0px 0px 8px rgb(255,255,255)",
        }} data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000" className="teams">
      <img src={blog02} alt="" srcset="" />
      <h5>Ana Montalbán</h5>
      <p>Designation</p>
    </motion.div>
    <motion.div whileHover={{
          scale:1.1,
          textShadow:"0px 0px 8px rgb(255,255,255)",
          boxShadow:"0px 0px 8px rgb(255,255,255)",
        }} data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000" className="teams">
      <img src={blog03} alt="ok" srcset="" />
      <h5>Gonzalo Ladreda</h5>
      <p>Designation</p>
    </motion.div>
    <motion.div whileHover={{
          scale:1.1,
          textShadow:"0px 0px 8px rgb(255,255,255)",
          boxShadow:"0px 0px 8px rgb(255,255,255)",
        }}  data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000" className="teams">
      <img src={blog04} alt="ok" srcset="" />
      <h5>Mario Fueyo</h5>
      <p>Designation</p>
    </motion.div>
   </div>


<div data-aos="zoom-out"className="dic">
  <h1>Join Our Discord Group</h1>
  <motion.button 
        whileHover={{
          scale:1.1,
          textShadow:"0px 0px 8px rgb(255,255,255)",
          boxShadow:"0px 0px 8px rgb(255,255,255)",
        }}  
        type="button">Join Now</motion.button>
</div>

  </div>
  )
}

export default Blog