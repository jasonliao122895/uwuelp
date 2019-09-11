import React from 'react';
import MarkerManager from '../../util/marker_manager';

export default class BusinessMap extends React.Component {

  constructor(props) {
    super(props);
    this.handleFilter = this.handleFilter.bind(this);
    this.handleUnfilter = this.handleUnfilter.bind(this);
  }
  
  componentDidMount() {
    const location = { lat: 37.7758, lng: -122.435 };
    this.initMap(location);
    this.MarkerManager = new MarkerManager(this.map);
    
    if (this.props.businesses.length > 0) {
      this.MarkerManager.updateMarkers(this.props.businesses)
    }

  }

  handleFilter(e) {
    e.preventDefault();
    this.map.addListener('idle', () => {

      let bounds = this.map.getBounds();
      let northEast = bounds.getNorthEast();
      let southWest = bounds.getSouthWest();

      bounds = {
        northEast: { lat: northEast.lat(), lng: northEast.lng() },
        southWest: { lat: southWest.lat(), lng: southWest.lng() }
      }
      this.props.updateBounds('bounds', bounds)
    })
    const filterButton = document.getElementById('filt-but');
    const unfiltButton = document.getElementById('unfilt-but');
    filterButton.classList.toggle('hide');
    unfiltButton.classList.toggle('hide');
  }

  handleUnfilter(e) {
    e.preventDefault();
    google.maps.event.clearListeners(this.map, 'idle');
    const unfiltButton = document.getElementById('unfilt-but');
    const filterButton = document.getElementById('filt-but');
    unfiltButton.classList.toggle('hide');
    filterButton.classList.toggle('hide');
  }

  componentDidUpdate() {
    console.log(this.filter);
    this.MarkerManager.updateMarkers(this.props.businesses);
  }
  

  initMap (location) {
    this.map = new google.maps.Map(
      document.getElementById('map-container'), { zoom: 11, center: location}
    )
  }

  render() {
    // debugger
    return (
      <div>
        <button onClick={this.handleFilter} id="filt-but" className="show">Filter</button>
        <button onClick={this.handleUnfilter} id="unfilt-but" className="hide">Unfilter</button>
      <div id="map-container" ref={map => this.mapNode = map}>
      </div>
      </div>
    )
  }
}