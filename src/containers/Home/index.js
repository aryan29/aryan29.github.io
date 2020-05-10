import React from 'react'
import { Link } from 'react-router-dom';
import Header from '../../components/Header'

/**
* @author Aryan Khandelwal
* @function Home
**/
import './style.css';
const Home = (props) => {
    return (
<div>
   <main class='burrito-wrap'>
    <section>
      <h1>
        &gt;
        <span class='blink'>_</span>
        Hello, World!
        <br/>I'm Aryan
        <span class='rotate'>:K</span>
        <br/>&amp; I Am A Human
        <span class="glitch-txt" data-text="Design">Design</span>
      </h1>
      <h2>
        <span>A Budding Developer &
          <br/>console.log() Competetive Programmer</span>
      </h2>
      <p>
          <br/>
        <span class='status blink-slow'>¡Available for hiring!</span>
      </p>
      <br/>
      <p>
        <a href='about'>About</a>
      </p>
      <p>
        <a href='resume.pdf' download>Resume</a>
      </p>
      <p>
        <a href='projects'>Projects</a>
      </p>
      <p>
        <a href='blogs'>Blogs</a>
      </p>
      <p>
        <a  href='codes'>Codes</a>
      </p>
      <p>
        <a href='https://github.com/aryan29'>Github</a>
      </p>
      <p>
        <a href='https://www.linkedin.com/in/aryan-khandelwal-467339178/'>Linkedin</a>
      </p>
      <p>
        <a  href='profiles'>Other Profiles</a>
      </p>
    </section>
    <footer>
  <div class="social">
<div class="flex-center">
  <i class="fab fa-github fa-1x icon-3d"></i>
  <i class="fab fa-facebook fa-1x icon-3d"></i>
  <i class="fab fa-instagram fa-1x icon-3d"></i>
  <i class="fab fa-whatsapp fa-1x icon-3d"></i>
  <i class="fab fa-linkedin fa-1x icon-3d"></i>
</div>
</div>
    </footer>
  </main>

</div>
    )

}

export default Home