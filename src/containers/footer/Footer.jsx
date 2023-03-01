import React from 'react';
import gpt3Logo from '../../logo.svg';
import './footer.css';

const Footer = () => (
  <div >
    <footer>
      <div className="row">
        <div className="col">
          <img src={gpt3Logo} alt='ol' className="logo"/>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
          </p>
        </div>
         <div className="col">
          <h2 className='foot-hed'>About us</h2>
          <ul>
           <li><a href="#">Zeux</a></li>
            <li><a href="#">Portfolio</a></li>
            <li><a href="#">Careers</a></li>
            <li><a href="#">Contacts</a></li>
          </ul>
        </div>
        <div className="col">
          <h2 className='foot-hed'>Contact us</h2>
          
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
          
          <h2 className='num'>+123 89097 890</h2>
        </div>
       
        <div className="col">
          {/* <h3>Newsletter</h3> */}
          {/* <form>
            <i className="fa-regular fa-envelope"></i>
            <input type="email" placeholder="Enter Your Email Id" required/>
            <button type="submit"><i className="fa-solid fa-arrow-right"></i></button>
          </form> */}
          <div className="social-icons">
            <i className="fa-brands fa-facebook"></i>
            <i className="fa-brands fa-instagram"></i>
            <i className="fa-brands fa-twitter"></i>
            <i className="fa-brands fa-youtube"></i>
          </div>
        </div>
      </div> 
      <hr/>
      <p className="copyright">2022 All Rights Reserved</p>
    </footer>
   
  </div>
);

export default Footer;
