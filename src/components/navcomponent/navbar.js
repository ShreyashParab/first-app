import React from 'react'
import { BiLogoFacebook , BiLogoTwitter , BiLogoLinkedin } from 'react-icons/bi'
import { BsSearch } from 'react-icons/bs'
import { GiHamburgerMenu } from 'react-icons/gi'
import "./navbar.css"
let toggleon = false

const Navbar = () =>{
    
    function toggle(){    
            if(toggleon == false)
            {
                document.getElementById('links').style.display='block'
                document.getElementById('social-media').style.display='block'
                toggleon = true
            }
            else{
                document.getElementById('links').style.display='none'
                document.getElementById('social-media').style.display='none'
                toggleon = false    
           }
           
    }
    window.addEventListener('resize', () => {
        const screenWidth = window.innerWidth;
        if (screenWidth >= 901) {
          toggleon = true;
          document.getElementById('links').style.display = 'block';
          document.getElementById('social-media').style.display='block'
        } else {
          toggleon = false;
          document.getElementById('links').style.display = 'none';
          document.getElementById('social-media').style.display='none'
        }
      });
    return(
        <>
            <nav className='nav' id='nav'>
                <div className='logo'>
                    <h2>PORTO</h2>
                </div>
                <div className='links' id='links'>
                    <ul>
                        <li><a href='#'>Home</a></li>
                        <li><a href='#'>About</a></li>
                        <li><a href='#'>Projects</a></li>
                        <li>
                            <a href='#'>services ↓</a>
                            <ul className='dropdown'>
                                <li><a href='#'>service1</a></li>
                                <li><a href='#'>service2</a></li>
                                <li><a href='#'>service3</a></li>
                            </ul>    
                        </li>
                        <li><a href='#'>Blog</a></li>
                        <li><a href='#'>Contact</a></li>
                        <li className='search'><BsSearch/></li>
                    </ul>
                </div>
                <div className='social-media' id='social-media'>
                    <ul>
                        <li><a href='#'><BiLogoFacebook/></a></li>
                        <li><a href='#'><BiLogoTwitter/></a></li>
                        <li><a href='#'><BiLogoLinkedin/></a></li>
                    </ul>
                </div>
                <div className='toggleButton'>
                    <GiHamburgerMenu onClick={toggle}/>
                </div>
            </nav>
        </> 
    )
}

export default Navbar
