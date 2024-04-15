import React from 'react'
import { assets } from '../../assets/assets'
import "./Footer.css"


const Footer = () => {
  return (
    <div className='footer' id="footer">
        <div className='footer-content'>
             <div className='footer-content-left'>
                    <img src={assets.logo} />
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
                    <div className='footer-social-icons'>
                        <img src={assets.facebook_icon} alt=""/>
                        <img src={assets.twitter_icon} alt="" />
                        <img src={assets.linkedin_icon} alt="" />
                    </div>

             </div>

             <div className='footer-content-right'>
                <h2>COMPANY</h2>
                 <ul>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Delivery</li>
                    <li>Privacy Policy</li>
                 </ul>
             </div>

             <div className='footer-content-right'>
                 <h2>Get In Touch </h2>
                 <ul>
                    <li>+1 -212-456-7890</li>
                    <li>contact@gmail.com</li>
                 </ul>

             </div>
              <hr/>
               <p className='footer-copyright'>Copyright 2024 @tomato.com All Right Reserved</p>

        </div>


    </div>
  )
}

export default Footer