import React from 'react';
import MarkerManager from '../../util/marker_manager';

export default class BusinessMap extends React.Component {

  constructor(props) {
    super(props);
    this.handleFilter = this.handleFilter.bind(this);
    this.handleUnfilter = this.handleUnfilter.bind(this);
    this.state = {
      filterOn: false
    }
  }
  
  componentDidMount() {
      // debugger
      if (this.props.businesses.length > 1 ) {
        let allLats = this.props.businesses.map((business) => (business.latitude))
        allLats = allLats.reduce((acc, el) => acc + el)
        const avgLat = allLats / this.props.businesses.length;
    
        let allLngs = this.props.businesses.map((business) => (business.longitude))
        allLngs = allLngs.reduce((acc, el) => acc + el)
        const avgLng = allLngs / this.props.businesses.length;
        const centerLocation = { lat: avgLat, lng: avgLng }
        this.initMap(centerLocation, 11);
      }
    
    // debugger
    this.MarkerManager = new MarkerManager(this.map);
    this.MarkerManager.updateMarkers(this.props.businesses);
   

    if (this.props.business) {
      
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
      // debugger
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

    if (this.props.businesses.length > 1 && this.props.business === undefined) {
      this.MarkerManager.updateMarkers(this.props.businesses);

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

    }

   

      
  }
  

  initMap (location, zoomOption) {
    this.map = new google.maps.Map(
      document.getElementById('map-container'), { zoom: zoomOption, center: location, streetViewControl: false, mapTypeControl: false, fullscreenControl: false }
    )
  }

  render() {
    // debugger
    return (
      <div>
        {!this.props.business ? 
        <div>
          <button onClick={this.handleFilter} id="filt-but" className="show">Filter</button>
          <button onClick={this.handleUnfilter} id="unfilt-but" className="hide">Unfilter</button>
          <span>Click To Toggle Filter By Map Movement</span>
        </div> : ""}
      <div id="map-container" ref={map => this.mapNode = map}>
      </div>
      </div>
    )
  }
}