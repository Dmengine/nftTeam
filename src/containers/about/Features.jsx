
import React ,{useEffect}from 'react';

import  AOS  from 'aos';
import "aos/dist/aos.css"
import './features.css';

function Features() {


useEffect(()=>{
  AOS.init({duration:1000});
}, [])
  return (
    <div  className="gpt3__features" id="About">
    <div className="hed"><h1>About Drop</h1></div>
    <div className="abt-text" data-aos="zoom-in">
     <h1>Own a Piece of the Legend</h1>
     <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</p>

     <div className="abt-boxs">
      <div data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="3000"  className="box"><p className='box25'>250 <br/>NFT<small>s</small></p></div>
      <div data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="3000"  className="box"><p>49€</p> </div>
      <div  data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="3000" className="box"><p className='box1'>1 <br/>oportunidad</p></div>
     </div>
    </div>
  </div>
  )
}

export default Features




