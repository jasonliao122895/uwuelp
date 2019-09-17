import React from 'react';
import { withRouter } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons'

class Search extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      find: "",
      near: this.props.near
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleRestaurants = this.handleRestaurants.bind(this);
    this.handleBoba = this.handleBoba.bind(this);
    this.handleClothing = this.handleClothing.bind(this);
    this.handleBarber = this.handleBarber.bind(this);
  }

  handleInput(type) {
    
    return (e) => {
      this.setState({
        [type]: e.target.value
      })
    }
  }

  handleRestaurants(e) {
    e.preventDefault();
    this.props.filter('near', 'San Francisco')
      .then(() => {
        this.props.filter('find', 'Restaurants')
          .then(() => {
            this.props.history.replace('/businesses');
          })
      })
  }

  handleBoba(e) {
    e.preventDefault()
    this.props.filter('near', 'San Francisco')
      .then(() => {
        this.props.filter('find', 'Boba Shops')
          .then(() => {
            this.props.history.replace('/businesses');
          })
      });
  }

  handleBarber(e) {
    e.preventDefault()
    this.props.filter('near', 'San Diego')
      .then(() => {
        this.props.filter('find', 'Barber Shops')
          .then(() => {
            this.props.history.replace('/businesses');
          })
      })
  }

  handleClothing(e) {
    e.preventDefault()
    this.props.filter('near', 'San Diego')
      .then(() => {
        this.props.filter('find', 'Clothing Store')
          .then(() => {
            this.props.history.replace('/businesses');
          })
      })
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.filter('near', this.state.near)
      .then(() => {
        this.props.filter('find', this.state.find)
          .then(() => {
            this.props.history.replace('/businesses')
          })
      })
    
  }
  
  render() {

    return  (
      <form>

        <label id="nav-find">
          Find
          <input type="text" value={this.state.find} onChange={this.handleInput('find')} placeholder="Categories, Name... " />
        </label>

        <label id="nav-near">
          Near
        <input type="text" value={this.state.near} onChange={this.handleInput('near')} placeholder="City, Address..." />
        </label>

        <button className="nav-search-but" onClick={this.handleSubmit}>
          <span><FontAwesomeIcon icon={faSearch} /></span>
        </button>

        <div className="category-links">
          <a onClick={this.handleRestaurants}>Restaurants</a>
          <a onClick={this.handleBoba}>Boba Shops</a>
          <a onClick={this.handleBarber}>Barber Shops</a>
          <a onClick={this.handleClothing}>Clothing Stores</a>
        </div>
      </form>


    )
  }
}

export default withRouter(Search);