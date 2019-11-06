import React from 'react';
import BusinessIndexItem from './business_index_item';
import NavBar from '../nav_bar/nav_bar';
import BusinessMap from '../map/business_map';
import NavLinkContainer from '../nav_bar/nav_link_container'
import Loader from './loader';
import { Redirect } from 'react-router-dom';

export default class BusinessIndex extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      businesses: this.props.businesses,
      filtered: [],
      price1: "inactive",
      price2: "inactive",
      price3: "inactive",
      price4: "inactive",
      redirect: false
    }
    this.handlePrice1 = this.handlePrice1.bind(this);
    this.handlePrice2 = this.handlePrice2.bind(this);
    this.handlePrice3 = this.handlePrice3.bind(this);
    this.handlePrice4 = this.handlePrice4.bind(this);
  }
  
  parseQuery(queryString) {
    let primaryRes = queryString.split('=').slice(1);
    let find = primaryRes[0];
    let near = primaryRes[1];
    find = find.split('&')[0].split('-').join(' ');
    near = near.split('-').join(' ');
    return [find, near]
  }

  componentDidMount() {
    
    if (this.props.location.search !== "") {
      let queryArr = this.parseQuery(this.props.history.location.search)
      let find = queryArr[0];
      let near = queryArr[1];
      this.props.filter('near', near)
        .then(() => {
          this.props.filter('find', find)
        })
    } else if (this.props.location.search === ""){
      this.setState({
        redirect: true
      })
    }
    
  }

  handleRedirect() {
    if (this.state.redirect) {
      return <Redirect to='/404' />
    }
  }

  handlePrice1(e) {
    e.preventDefault();
    const button1 = document.getElementById('price1');
    const button2 = document.getElementById('price2');
    let arr = this.props.businesses.filter((business) => {
      return business.priceRange === "Inexpensive"
    })

    let newArr = this.state.filtered.filter((business) => {
      return !arr.includes(business)
    })

    if (this.state.price1 === "inactive") {
      button1.style.color = 'lightgreen';
      button1.style.border = '1px solid lightgreen';
      button1.style.borderRight = '0px';
      button2.style.borderLeftColor = 'lightgreen';
      this.setState({
        filtered: this.state.filtered.concat(arr),
        price1: "active"
      })
    } else {
      button1.style.color = ''
      button1.style.border = '';
      button2.style.borderLeftColor = '';
      this.setState({
        price1: "inactive",
        filtered: newArr
      })
    }
  }

  handlePrice2(e) {
    e.preventDefault();
    const button2 = document.getElementById('price2')
    const button3 = document.getElementById('price3');

    let arr = this.props.businesses.filter((business) => {
      return business.priceRange === "Moderate"
    })

    let newArr = this.state.filtered.filter((business) => {
      return !arr.includes(business)
    })

    if (this.state.price2 === "inactive") {
      button2.style.color = 'lightgreen';
      button2.style.border = '1px solid lightgreen';
      button2.style.borderRight = '0px';
      button3.style.borderLeftColor = 'lightgreen';
      this.setState({
        filtered: this.state.filtered.concat(arr),
        price2: "active"
      })
    } else {
      button2.style.color = ''
      button2.style.border = '';
      button3.style.borderLeftColor = '';

      this.setState({
        price2: "inactive",
        filtered: newArr
      })
    }
  }

  handlePrice3(e) {
    e.preventDefault();
    const button3 = document.getElementById('price3');
    const button4 = document.getElementById('price4');
    let arr = this.props.businesses.filter((business) => {
      return business.priceRange === "Pricey"
    })

    let newArr = this.state.filtered.filter((business) => {
      return !arr.includes(business)
    })

    if (this.state.price3 === "inactive") {
      button3.style.color = 'lightgreen';
      button3.style.border = '1px solid lightgreen';
      button3.style.borderRight = '0px';
      button4.style.borderLeftColor = 'lightgreen'
      this.setState({
        filtered: this.state.filtered.concat(arr),
        price3: "active"
      })
    } else {
      button3.style.color = ''
      button3.style.border = '';
      button4.style.borderLeftColor = ''

      this.setState({
        price3: "inactive",
        filtered: newArr
      })
    }
  }

  handlePrice4(e) {
    e.preventDefault();
    const button4 = document.getElementById('price4')
    let arr = this.props.businesses.filter((business) => {
      return business.priceRange === "Ultra High-End"
    })

    let newArr = this.state.filtered.filter((business) => {
      return !arr.includes(business)
    })

    if (this.state.price4 === "inactive") {
      button4.style.color = 'lightgreen';
      button4.style.border = '1px solid lightgreen';
      this.setState({
        filtered: this.state.filtered.concat(arr),
        price4: "active"
      })
    } else {
      button4.style.color = '';
      button4.style.border = '';

      this.setState({
        price4: "inactive",
        filtered: newArr
      })
    }
  }

  componentDidUpdate(prevProps) {

    if (this.props.pathname !== prevProps.pathname) {
      if (this.props.location.search !== "") {
        let queryArr = this.parseQuery(this.props.history.location.search)
        let find = queryArr[0];
        let near = queryArr[1];
        this.props.filter('near', near)
          .then(() => {
            this.props.filter('find', find)
          })
      } else if (this.props.location.search === "") {
        this.setState({
          redirect: true
        })
      }
    }

    if (this.props.location !== prevProps.location) {
      const button1 = document.getElementById('price1')
      const button2 = document.getElementById('price2')
      const button3 = document.getElementById('price3')
      const button4 = document.getElementById('price4')
      if (button1 && button2 && button3 && button4) {
        button1.style.color = "";
        button2.style.color = "";
        button3.style.color = "";
        button4.style.color = "";

      }
      this.setState({
        filtered: [],
        price1: "inactive",
        price2: "inactive",
        price3: "inactive",
        price4: "inactive",
      })
      
    }
  }


  render() {

    if (this.props.loading) return (<div><Loader /></div>)
    let queryArr = this.parseQuery(this.props.history.location.search)
    let find = queryArr[0];
    let near = queryArr[1];
    find = find.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
    near = near.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
    let noLocation = false;
    if (find === "") find = 'Businesses'
    if (near === "") noLocation = true;
    
    let numbers = []
    let price1 = this.state.price1;
    let price2 = this.state.price2;
    let price3 = this.state.price3;
    let price4 = this.state.price4;

    let allBusinesses;
    if (price1 === "active" || price2 === "active" || price3 === "active" || price4 === "active") {
      allBusinesses = this.state.filtered;
    } else {
      allBusinesses = this.props.businesses;
    }

    let businesses = allBusinesses.map((business, idx) => {
      numbers.push(idx + 1);
      return (
        <BusinessIndexItem key={business.id} business={business}/>
      )
    })
    if (this.props.businesses === undefined || this.props.businesses.length === 0) {
      return (
        <div>
          {this.handleRedirect()}
          <NavBar/>
          <NavLinkContainer />
          
          <div className="filter-options-index">
            <div className="filter-options-container">
              
              <div>
                <h5>Filters</h5>
                <div className="price-container">
                  <button>$</button>
                  <button>$$</button>
                  <button>$$$</button>
                  <button>$$$$</button>
                </div>
              </div>


            </div>
          </div>
      
        
          <div className="business-index-main-flex">
            <div className="business-index-main">
              <ol>
                <h1>{`There are no ${this.props.find} in ${this.props.near}! `}</h1>
              </ol>
              <div className="map-div">
                <BusinessMap
                  businesses={Object.values(this.props.businesses)}
                  filter={this.props.filter}
                  numbers={numbers} location={this.props.near}
                />
              </div>
            </div>
          </div>
        </div>
      )
    }
      
    return (
      <div>
        {this.handleRedirect()}
        <NavBar />
        <NavLinkContainer />

        <div className="filter-options-index">
          <div className="filter-options-container">
            <div>
              <h5>{`The Best ${find} `}{find === 'Japanese' || find === 'Mexican' || find === 'Other' ? "Restaurants " : ""}{noLocation ? "" : `in ${near}`}</h5>
            </div>
            <div className="filter-option-prices-container">

              <h5>Filters</h5>
              <div className="price-container">
                <button id="price1" onClick={this.handlePrice1}>$</button>
                <button id="price2" onClick={this.handlePrice2}>$$</button>
                <button id="price3" onClick={this.handlePrice3}>$$$</button>
                <button id="price4" onClick={this.handlePrice4}>$$$$</button>
              </div>

            </div>


          </div>
        </div>

        <div className="business-index-main-flex">
          <div className="business-index-main">
            <ol>
              {businesses}
            </ol>
            <div className="map-div">
              <BusinessMap 
                businesses={allBusinesses}
                filter={this.props.filter}
                numbers={numbers} location={this.props.near}
              />
            </div>
          </div>
        </div>
      </div>
    )
  }
}