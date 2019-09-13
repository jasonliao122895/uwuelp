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
    if (this.props.photos) {
      return (
        <div className="test-carousel">
  
          <div className="carousel-container">
  
            <div className="carousel-slide">
              {this.props.photos.map(photoUrl => (
                <img key={photoUrl} src={photoUrl} alt=""/>
              ))}
            </div>
          </div>
  
          
          <button className="hide" onClick={this.handlePrev} id="prev">&#10094;</button> 
          
          <button onClick={this.handleNext} id="next">&#10095;</button>
          
        </div>
      )
    } else {
      return <div>

      </div>
    }
  }
  
}