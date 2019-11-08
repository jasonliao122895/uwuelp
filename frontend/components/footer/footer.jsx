import React from 'react';

export default () => {
  return (
    <div className="footer">
      <div className="footer-social-medias">

        <div className="footer-content-item">
          <h3>Connect</h3>
          <ul>
            <li><a href="https://www.linkedin.com/in/jliao1228/" target="_blank">LinkedIn</a></li>
            <li><a href="https://github.com/jasonliao122895" target="_blank">Github</a></li>
            <li><a href="https://angel.co/jason-liao-4" target="_blank">AngelList</a></li>
            <li><a href="https://jliao.me/" target="_blank">Portfolio</a></li>
            <li><a href={window.resume} target="_blank">Resume</a></li>
          </ul>
        </div>

        <div className="footer-content-item">
          <h3>Other Projects</h3>
          <ul>
            <li><a href="">Highpaw</a></li>
            <li><a href="">Mario Rush</a></li>
          </ul>
        </div>


      </div>
      <img src={window.footerImg} alt=""/>
      <small>Made by Jason Liao</small>
    </div>
  )
}