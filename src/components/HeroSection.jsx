import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';

function HeroSection() {
  function test(){
   const now = new Date();
   const h = now.getHours()+"h:"+now.getMinutes()+"mn:"+now.getSeconds()+"s";
   let t = document.getElementById('heure');
   t.innerHTML = `${h}`;
  }
  setInterval(test, 1000);
  return (
    <div className='hero-container'>
      <video src='/videos/video-2.mp4' autoPlay loop muted />
      <h1>SAFECORO <b>TV</b></h1>
      <p>Donnons la parole aux paysans</p>
      <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          SAVOIR PLUS
        </Button>
        <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          onClick={console.log('hey')}
        >
         REGARDER VIDEOS <i className='fa fa-play-circle' />
        </Button><br />
        <h1 id='heure'></h1>
      </div>
    </div>
  ); 
}

export default HeroSection;
