import React from 'react';
import MarkerManager from '../../util/marker_manager';
import { Redirect } from 'react-router-dom';

export default class BusinessMap extends React.Component {

  constructor(props) {
    super(props);
    this.handleFilter = this.handleFilter.bind(this);
    this.handleUnfilter = this.handleUnfilter.bind(this);
    this.state = {
      filterOn: false,
      count: 1
    }
  }
  
  componentDidMount() {
      if (this.props.businesses && this.props.business === undefined ) {
        if (this.props.businesses.length >= 1) {
          let allLats = this.props.businesses.map((business) => (business.latitude))
          allLats = allLats.reduce((acc, el) => acc + el)
          const avgLat = allLats / this.props.businesses.length;
      
          let allLngs = this.props.businesses.map((business) => (business.longitude))
          allLngs = allLngs.reduce((acc, el) => acc + el)
          const avgLng = allLngs / this.props.businesses.length;
          const centerLocation = { lat: avgLat, lng: avgLng }

          this.initMap(centerLocation, 11);
          this.MarkerManager = new MarkerManager(this.map);
          this.MarkerManager.updateMarkers(this.props.businesses);
        } else {
          let location;
          if (this.props.location.toLowerCase() === 'san francisco') {
            location = { lat: 37.76149, lng: -122.4139 }
          } else if (this.props.location.toLowerCase() === 'san diego') {
            location = { lat: 32.8604, lng: -117.2075 }
          } else {
            location = { lat: 37.71771, lng: -122.6446}
          }
          this.initMap(location)
          this.MarkerManager = new MarkerManager(this.map);
          this.MarkerManager.updateMarkers(this.props.businesses);
        }
      }
    

    if (this.props.business) {
      this.initMap({ lat: 37.1223, lng: -122.1343 }, 11)
      let business = this.props.business;
      this.map.setOptions({ draggable: false, disableDefaultUI: true, zoom: 15 });
      this.map.setCenter({ lat: business.latitude, lng: business.longitude });
      let latLng = { lat: this.props.business.latitude, lng: this.props.business.longitude }
      const marker = new google.maps.Marker({
        position: latLng,
        map: this.map,
        animation: google.maps.Animation.BOUNCE
      })
    }

    

  }

  handleFilter(e) {
    e.preventDefault();
    this.setState({
      filterOn: true
    })
    this.map.addListener('idle', () => {
     
      let bounds = this.map.getBounds();
      let northEast = bounds.getNorthEast();
      let southWest = bounds.getSouthWest();

      bounds = {
        northEast: { lat: northEast.lat(), lng: northEast.lng() },
        southWest: { lat: southWest.lat(), lng: southWest.lng() }
      }
  
      this.props.filter('bounds', bounds)
    
    })
    const filterButton = document.getElementById('filt-but');
    const unfiltButton = document.getElementById('unfilt-but');
    filterButton.classList.toggle('hide');
    unfiltButton.classList.toggle('hide');
  }

  handleUnfilter(e) {
    e.preventDefault();
    this.setState({
      filterOn: false
    })
    google.maps.event.clearListeners(this.map, 'idle');
    const unfiltButton = document.getElementById('unfilt-but');
    const filterButton = document.getElementById('filt-but');
    unfiltButton.classList.toggle('hide');
    filterButton.classList.toggle('hide');
  }

  componentDidUpdate() {
    
    if (this.props.businesses && this.props.business === undefined) {
      if (this.props.businesses.length >= 1 ) {
        let allLats = this.props.businesses.map((business) => (business.latitude))
        allLats = allLats.reduce((acc, el) => acc + el)
        const avgLat = allLats / this.props.businesses.length;
    
        let allLngs = this.props.businesses.map((business) => (business.longitude))
        allLngs = allLngs.reduce((acc, el) => acc + el)
        const avgLng = allLngs / this.props.businesses.length;
        const centerLocation = { lat: avgLat, lng: avgLng }

        if (!this.state.filterOn && this.map) {
          this.map.setOptions( { center: centerLocation, zoom: 11 } )
        }
      } else {
        let location;
        if (this.props.location.toLowerCase() === 'san francisco') {
          location = { lat: 37.76149, lng: -122.4139 }
        } else if (this.props.location.toLowerCase() === 'san diego') {
          location = { lat: 32.8604, lng: -117.2075 }
        } else {
          location = { lat: 37.71771, lng: -122.6446 }
        }
        this.map.setCenter(location);
      }
      if (!this.props.business) {
        this.MarkerManager.updateMarkers(this.props.businesses);
      }
    }
      
  }

  handleRedirect() {
    if (this.MarkerManager) {
      Object.values(this.MarkerManager.markers).forEach(marker => {
        marker.addListener('click', () => {
          return <Redirect to={`/businesses/${marker.businessId}`} />
        })
      })
    }
  }
  

  initMap (location, zoomOption) {
    this.map = new google.maps.Map(
      document.getElementById('map-container'), { zoom: zoomOption, center: location, streetViewControl: false, mapTypeControl: false, fullscreenControl: false }
    )
  }

  render() {
    

    return (
      <div>
        {this.handleRedirect()}
        {/* {!this.props.business ? 
        <div>
          <button onClick={this.handleFilter} id="filt-but" className="show">Filter</button>
          <button onClick={this.handleUnfilter} id="unfilt-but" className="hide">Unfilter</button>
          <span>Click To Toggle Filter By Map Movement</span>
        </div> : ""} */}
      <div id="map-container" ref={map => this.mapNode = map}>
      </div>
      </div>
    )
  }
}