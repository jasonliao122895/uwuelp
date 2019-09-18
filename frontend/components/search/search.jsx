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
            this.props.history.replace('/businesses?find=restaurants&near=san-francisco');
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
      });
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

  handleSubmit(e) {
    e.preventDefault();
    let near = this.state.near.split(' ').join('-');
    let find = this.state.find.split(' ').join('-');
    this.props.filter('near', this.state.near)
      .then(() => {
        this.props.filter('find', this.state.find)
          .then(() => {
            this.props.history.replace(`/businesses?find=${find}&near=${near}`)
          })
      })
    
  }
  
  render() {

    return  (
      <form>
        <div>
        <label id="nav-find">
          Find
          <input type="text" value={this.state.find} onChange={this.handleInput('find')} placeholder="Categories, Name... " />
        </label>

        <label id="nav-near">
          Near
        <input type="text" value={this.state.near} onChange={this.handleInput('near')} placeholder="City, Address..." />
        </label>

        <button className="nav-search-but" onClick={this.handleSubmit}>
          <FontAwesomeIcon icon={faSearch} />
        </button>
        </div>
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