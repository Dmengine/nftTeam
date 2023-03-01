import React,{useEffect} from 'react';
import  AOS  from 'aos';
import "aos/dist/aos.css"
import './possibility.css';

function Possibility() {
    useEffect(()=>{
  AOS.init({duration:2000});
}, []);
  return (
     <div data-aos="zoom-out-left" className="gpt3__possibilityr " id="possibility">
    <div className="pick-hed">  <h1>Perks of Owning NFT</h1></div>
  <div className="bod">
    <div data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000" className="bods"><div className="bod-h">DISCORD</div><p className='drop1'>Special Discord group for nft holder</p></div>
    <div data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000" className="bods"><div className="bod-h">ENS</div><p className='drop2'>Ens domain for each holder</p></div>
    <div data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000" className="bods"><div className="bod-h">ROYALITY</div><p className='drop3'>5% ROYALTY ON EACH
 NFT</p></div>
  </div>
  </div>
  )
}

export default Possibility


