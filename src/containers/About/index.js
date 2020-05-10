import React from 'react'
import Cards from '../../components/Cards'
import './style.css';
import Skills from '../../components/Skills';

/**
* @author Aryan Khandelwal
* @function About
**/

const About = (props) => {
    console.log("Here I am")
  return(
      <div className="about">
          <div className="content">
              <h1 className="heading"> &gt; About Me</h1>
              <p> Hey There I am Aryan Khandelwal 3rd year IT student at Birla Institute of Technology Mesra, Ranchi
              ,I love solving Coding Problems on various online platforms ,and messing around with the web , I have experience in working
              with different languages,technologies and frameworks , In paticular I love coding in Python and C++ ,except that I have some experience in making
              mobile application with Flutter.

             </p>
              <div className="skills">
                <Skills></Skills>
              </div>
          </div>
          <div id="container">
              <img src="1.jpg"  className="myimage"></img>
          </div>
    </div>
   )
  }


export default About