import React from 'react';
import BusinessIndexItem from './business_index_item';
import NavBar from '../nav_bar/nav_bar';
import BenchMap from '../map/business_map';


export default class BusinessIndex extends React.Component {
  
  
  componentDidMount() {
    debugger
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
    if (this.props.businesses === undefined) return (<div></div>)
    return (
      <div>
        <NavBar />
        <div className="business-index-main-flex">
          <div className="business-index-main">
            <ol>
              {businesses}
            </ol>
            <div className="map-div">
              <BenchMap 
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