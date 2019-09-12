import React from 'react';

export default class ImageSlide extends React.Component {

  constructor(props) {
    super(props);
    this.handleNext = this.handleNext.bind(this);
    this.handlePrev = this.handlePrev.bind(this);
  }

  handleNext(e) {
    e.preventDefault(); 
    const prevBut = document.getElementById('prev');
    const nextBut = document.getElementById('next');
    nextBut.classList.toggle('hide')
    prevBut.classList.toggle('hide')
    const carouselSlide = document.querySelector('.carousel-slide');
    carouselSlide.style.transition = 'transform 1s ease-in-out'
    carouselSlide.style.transform = 'translateX(-102%)'
  }

  handlePrev(e) {
    e.preventDefault();
    const nextBut = document.getElementById('next');
    const prevBut = document.getElementById('prev');
    nextBut.classList.toggle('hide')
    prevBut.classList.toggle('hide')
    const carouselSlide = document.querySelector('.carousel-slide');
    carouselSlide.style.transition = 'transform 1s ease-in-out'
    carouselSlide.style.transform = 'translateX(0px)'
  }
 

  render() {
    return (
      <div className="test-carousel">

        <div className="carousel-container">

          <div className="carousel-slide">
            <img src="https://i.redd.it/btujcq4vmcjy.jpg" alt=""/>
            <img src="https://i.pinimg.com/originals/fb/10/e1/fb10e16ce8776e6b7e4d4213a16d4344.jpg" alt=""/>
            <img src="https://i.redd.it/lna6iw05i4hy.jpg" alt=""/>
            <img src="https://cdn.mmos.com/wp-content/uploads/2016/07/naruto-online-key-art-2-banner.jpg" alt=""/>
            <img src="https://cdn3.myjapanbox.com/wp-content/uploads/2017/07/Naruto-banner.jpg" alt=""/>
            <img src="http://www.f-covers.com/cover/naruto-facebook-cover-timeline-banner-for-fb.jpg" alt=""/>
            <img src="https://img.christiantimes.com/full/29574/630-0/naruto-shippuden.jpg" alt=""/>
            <img src="http://wallpaperstock.net/naruto-evolution%2C-anime_wallpapers_55179_852x480.jpg" alt=""/>
          </div>
        </div>

        
        <button className="hide" onClick={this.handlePrev} id="prev">&#10094;</button> 
        
        <button onClick={this.handleNext} id="next">&#10095;</button>
        
      </div>
    )
  }
  
}