import React from 'react'
import './style.css';

/**
* @author Aryan Khandelwal
* @function Cards
**/

const Cards = (props) => {
    return (
        <div>
            <div id="heading">
                <h5 data-text="My Projects">My Projects</h5>
            </div>
        <div className="list">
        <div className="project-card">
            <img className="project-image" src="https://raw.githubusercontent.com/aryan29/Food-Predicting-App/master/images/1.jpeg"></img>
                  <div className="project-content">
                   <h3 className="blink" data-text="CodeChef Buddy">Codechef Buddy</h3>
                     <p>
                            This is one of my first projects,It is basically a command line tool
                            to access codechef website with various features to help you while
                            giving contest and practicing problems
                </p>
                    <div className="project-skills"></div>
                    <div id="wrap">
                      <div className='project-links'>
                            <a href="#" className="project-links">View Source</a>
                    </div>
                </div>
            </div>
            </div>
        <div className="project-card">
            <img className="project-image" src="https://raw.githubusercontent.com/aryan29/Food-Predicting-App/master/images/1.jpeg"></img>
                  <div className="project-content">
                   <h3 className="blink" data-text="E-TutleAge">E-TutleAge</h3>
                <p>
                            This project is a basically a video conferencing platform to connect students
                            with teachers , but not only this it provide features like analyzing class attentivity
                            during live lectures which can help professors improve the quality of their lectures
                            and it also provides a brief analysis of your behaviour at the end of lecture after the lecture finishes
                </p>
                    <div className="project-skills"></div>
                    <div id="wrap">
                      <div className='project-links'>
                            <a href="#" className="project-links">View Source</a>
                    </div>
                </div>
            </div>
            </div>
        <div className="project-card">
            <img className="project-image" src="https://raw.githubusercontent.com/aryan29/Food-Predicting-App/master/images/1.jpeg"></img>
                  <div className="project-content">
                   <h3 className="blink">Flora(The Fitness App)</h3>
                <p>
                            This is a cross platform app made in Flutter which can do various work like
                             predicting delicious meals(On the basis of your diet and calories) ,making a diet chart for you
                            and not only this it can also approximately measure calories burned by you daily using your
                            mobile podometer, and all of this is Free
                </p>
                    <div className="project-skills"></div>
                    <div id="wrap">
                      <div className='project-links'>
                            <a href="#" className="project-links">View Source</a>
                    </div>
                </div>
            </div>
            </div>
        <div className="project-card">
            <img className="project-image" src="https://raw.githubusercontent.com/aryan29/Food-Predicting-App/master/images/1.jpeg"></img>
                  <div className="project-content">
                   <h3 className="blink" data-text="CodeChef Buddy">Desktop Text Editor</h3>
                <p>
                            This was basically a fun project made using Tkinter in Python, I am just mentioning it
                            because it is really a light weighed text editor and provides some really cool features like
                            direct pasting to Pastebin ,Google Translate and some more too so yeah it is definitely worth trying
                            over gedit(Default text editor in Ubuntu)
                </p>
                    <div className="project-skills"></div>
                    <div id="wrap">
                      <div className='project-links'>
                            <a href="#" className="project-links">View Source</a>
                    </div>
                </div>
            </div>
              </div>
            </div>
            </div>
    );
  }


export default Cards