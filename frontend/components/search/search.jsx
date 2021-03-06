import React from 'react';
import { withRouter } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import SearchResultItem from './search_result_item';

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
    this.handleSearch = this.handleSearch.bind(this);
  }

  componentDidMount() {
    let searches = document.getElementsByClassName('search-result-container');
    searches = searches[0]
    if (this.props.location.search || this.props.location.pathname === "/" || this.props.location.pathname.split('/')[1] === "businesses" || this.props.location.pathname.split('/')[1] === "users" ) {
      if (searches !== null) {
        searches.classList.add('hide')
      }
    }
    this.setLocation();
  }

  componentDidUpdate(prevProp) {
    if (this.props.location.search !== prevProp.location.search) {
      this.setLocation()
    }
  }

  setLocation() {
    let location;
    if (this.props.location.search.split('=')[1] === "sd") {
      location = 'San Diego'
      this.setState({near: location})
    } else if (this.props.location.search.split('=')[1] === 'sf') {
      location = 'San Francisco'
      this.setState({ near: location })
    }
  }


  handleInput(type) {
    
    return (e) => {
      this.setState({
        [type]: e.target.value
      })
    }
  }


  handleSearch() {
    let searches = document.getElementsByClassName('search-result-container');
    searches = searches[0]
    let searchRes = document.getElementsByClassName('search-result-item');
    searchRes = Array.from(searchRes)
    
    if (searches !== null) {
      searches.classList.remove('hide')
      searchRes.forEach((search) => {
        search.classList.remove('hide')
      })
    }
    this.props.getBusinessesRes(this.state.find)
  }

  handleRestaurants(e) {
    e.preventDefault();
    this.props.filter('near', 'San Francisco')
      .then(() => {
        this.props.filter('find', 'Restaurants')
          .then(() => {
            this.props.history.push('/businesses?find=restaurants&near=san-francisco');
          })
      })
  }

  handleBoba(e) {
    e.preventDefault()
    this.props.filter('near', 'San Francisco')
      .then(() => {
        this.props.filter('find', 'Boba Shops')
          .then(() => {
            this.props.history.push('/businesses?find=boba-shops&near=san-francisco');
          })
      });
  }

  handleBarber(e) {
    e.preventDefault()
    this.props.filter('near', 'San Diego')
      .then(() => {
        this.props.filter('find', 'Barber Shops')
          .then(() => {
            this.props.history.push('/businesses?find=barber-shops&near=san-diego');
          })
      })
  }

  handleClothing(e) {
    e.preventDefault()
    this.props.filter('near', 'San Diego')
      .then(() => {
        this.props.filter('find', 'Clothing Stores')
          .then(() => {
            this.props.history.push('/businesses?find=clothing-stores&near=san-diego');
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
            this.props.history.push(`/businesses?find=${find}&near=${near}`)
          })
      })

    
    
  }
  
  render() {
    
    let searchRes = this.props.searchRes.map((result) => {
      return <SearchResultItem result={result} key={result.id} />
    })

    
    return  (
      <form>
        <div className="search-bar-container" >
        <label id="nav-find">
          Find
          <input type="text" value={this.state.find} onKeyUp={this.handleSearch} onChange={this.handleInput('find')} placeholder="Japanese, Barber, Clothing... " />
          <div className="search-result-container">
            {searchRes}
          </div>
        </label>
        

        <label id="nav-near">
          Near
        <input type="text" value={this.state.near} onChange={this.handleInput('near')} placeholder="San Francisco, San Diego..." />
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