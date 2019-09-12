import React from 'react';

export default class ImageSlide extends React.Component {

  constructor(props) {
    super(props);
    this.handleNext = this.handleNext.bind(this);
    this.handlePrev = this.handlePrev.bind(this);
  }

  handleNext(e) {
    e.preventDefault();
    const carouselSlide = document.querySelector('.carousel-slide');
    carouselSlide.style.transition = 'transform 0.4s ease-in-out'
    carouselSlide.style.transform = 'translateX(-1000px)'
  }

  handlePrev(e) {
    e.preventDefault();
    const carouselSlide = document.querySelector('.carousel-slide');
    carouselSlide.style.transition = 'transform 0.4s ease-in-out'
    carouselSlide.style.transform = 'translateX(1000px)'
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

        <button onClick={this.handlePrev} id="prev">Prev</button>
        <button onClick={this.handleNext} id="next">Next</button>
      </div>
    )
  }
  
}