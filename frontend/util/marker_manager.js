export default class MarkerManager {
  constructor(map) {
    this.map = map;
    this.markers = {};
    this.updateMarkers = this.updateMarkers.bind(this)
  }

  updateMarkers(businesses) {

    let businessesObj = {};
    businesses.forEach(business => businessesObj[business.id] = business);

    Object.keys(this.markers).forEach(businessId => {
      if (!businessesObj[businessId]) {
        let unwantedMarker = this.markers[businessId];
        if (unwantedMarker) {
          this.removeMarker(unwantedMarker);
          delete this.markers[businessId];
        }
      }
    })

    businesses.forEach(business => {
      this.createMarkerFromBusiness(business);
    })
  }

  createMarkerFromBusiness(business) {
    if (!this.markers[business.id]) {
      let latLng = { lat: business.latitude, lng: business.longitude }
      let marker = new google.maps.Marker({
        position: latLng,
        map: this.map,
        animation: google.maps.Animation.DROP
      })
      this.markers[business.id] = marker; 
    }
  }

  removeMarker(marker) {
    marker.setMap(null);
  }
}