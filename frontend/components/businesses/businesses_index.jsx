import React from 'react';
import BusinessIndexItem from './business_index_item';
import NavBar from '../nav_bar/nav_bar';
import BusinessMap from '../map/business_map';

export default class BusinessIndex extends React.Component {
  
  parseQuery(queryString) {
    let primaryRes = queryString.split('=').slice(1);
    let find = primaryRes[0];
    let near = primaryRes[1];
    find = find.split('&')[0].split('-').join(' ');
    near = near.split('-').join(' ');
    return [find, near]
  }

  componentDidMount() {
   
    let queryArr = this.parseQuery(this.props.history.location.search)
    let find = queryArr[0];
    let near = queryArr[1];
    this.props.filter('near', near)
      .then(() => {
        this.props.filter('find', find)
      })
    // debugger;
    // let bounds = "show all"
    // this.props.filter("near", 'San Francisco');
  }

  componentDidUpdate(prevProps) {
    // if (this.props.location.pathname !== prevProps.location.pathname) {
    //   this.props.filter('near', this.props.location)
    //     .then(() => {
    //       this.props.filter('find', this.props.find)
    //     })
    // }
  }

  render() {
    let numbers = []
    let businesses = this.props.businesses.map((business, idx) => {
      numbers.push(idx + 1);
      return (
        <BusinessIndexItem key={business.id} business={business}/>
      )
    })
    if (this.props.businesses === undefined || this.props.businesses.length === 0) {
      return (
        <div>
          <NavBar/>
          <div className="business-index-main-flex">
            <div className="business-index-main">
              <ol>
                <h1>{`There are no ${this.props.find} in ${this.props.location}! `}</h1>
              </ol>
              <div className="map-div">
                <BusinessMap
                  businesses={Object.values(this.props.businesses)}
                  filter={this.props.filter}
                  numbers={numbers} location={this.props.location}
                />
              </div>
            </div>
          </div>
        </div>
      )
    }
      
    return (
      <div>
        <NavBar />
        <div className="business-index-main-flex">
          <div className="business-index-main">
            <ol>
              {businesses}
            </ol>
            <div className="map-div">
              <BusinessMap 
                businesses={Object.values(this.props.businesses)}
                filter={this.props.filter}
                numbers={numbers} location={this.props.location}
              />
            </div>
          </div>
        </div>
      </div>
    )
  }
}