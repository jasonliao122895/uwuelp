import React from 'react';
import { withRouter } from 'react-router-dom';

class NavLink extends React.Component {
  
  constructor(props) {
    super(props);
    this.handleJapanese = this.handleJapanese.bind(this);
    this.handleMexian = this.handleMexian.bind(this);
    this.handleOther = this.handleOther.bind(this);
    this.handleBoba = this.handleBoba.bind(this);
    this.handleBarber = this.handleBarber.bind(this);
    this.handleClothing = this.handleClothing.bind(this);
  }

  handleShow() {
    const restaurantNav = document.getElementById('restaurant-nav-menu')
    restaurantNav.classList.remove('hide');
  }

  handleHide() {
    const restaurantNav = document.getElementById('restaurant-nav-menu')
    restaurantNav.classList.add('hide');
  }

  handleJapanese(e) {
    e.preventDefault()
    this.props.filter('near', 'San Francisco')
      .then(() => {
        this.props.filter('find', 'Japanese')
          .then(() => {
            this.props.history.replace('/businesses?find=japanese&near=san-francisco');
          })
      })
  }

  handleMexian(e) {
    e.preventDefault()
    this.props.filter('near', 'San Diego')
      .then(() => {
        this.props.filter('find', 'Mexican')
          .then(() => {
            this.props.history.replace('/businesses?find=mexican&near=san-diego');
          })
      })
  }

  handleOther(e) {
    e.preventDefault()
    this.props.filter('near', 'San Francisco')
      .then(() => {
        this.props.filter('find', 'other')
          .then(() => {
            this.props.history.replace('/businesses?find=other&near=san-francisco');
          })
      })
  }



  handleBoba(e) {
    e.preventDefault()
    this.props.filter('near', 'San Francisco')
      .then(() => {
        this.props.filter('find', 'Boba Shops')
          .then(() => {
            this.props.history.replace('/businesses?find=boba-shops&near=san-francisco');
          })
      })
  }

  handleBarber(e) {
    e.preventDefault()
    this.props.filter('near', 'San Diego')
      .then(() => {
        this.props.filter('find', 'Barber Shops')
          .then(() => {
            this.props.history.replace('/businesses?find=barber-shops&near=san-diego');
          })
      })
  }

  handleClothing(e) {
    e.preventDefault()
    this.props.filter('near', 'San Diego')
      .then(() => {
        this.props.filter('find', 'Clothing Stores')
          .then(() => {
            this.props.history.replace('/businesses?find=clothing-stores&near=san-diego');
          })
      })
  }

  render() {
    // debugger;
    return (

      <div className="nav-links-container-flex">

        <div className="nav-links-main" >    

          <div className="restaurants-nav" onMouseOver={this.handleShow} onMouseOut={this.handleHide}>
            <button>Restaurants <span>	&#9660; </span></button>
            <div className="hide" id="restaurant-nav-menu">
              <ul>
                <li><a onClick={this.handleJapanese}>Japanese</a></li>
                <li><a onClick={this.handleMexian}>Mexican</a></li>
                <li><a onClick={this.handleOther}>Other</a></li>
              </ul>
            </div>
          </div>

          <div>
            <button onClick={this.handleBoba}>Boba</button>
          </div>

          <div>
            <button onClick={this.handleBarber}>Barber</button>
          </div>

          <div>
            <button onClick={this.handleClothing}>Clothing</button>
          </div>

        </div>

      </div>
    )
  }
}

export default withRouter(NavLink)