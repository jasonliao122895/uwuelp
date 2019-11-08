import { BrowserRouter } from 'react-router-dom';

export default class MarkerManager {
  constructor(map) {
    this.map = map;
    this.markers = {};
    this.updateMarkers = this.updateMarkers.bind(this)
  }

  updateMarkers(businesses) {

    let businessesObj = {};
    businesses.forEach(business => businessesObj[business.id] = business);
    let keys = Object.keys(this.markers);
    keys = keys.slice();
    Object.keys(this.markers).forEach(businessId => {
      if (!businessesObj[businessId]) {
        let unwantedMarker = this.markers[businessId];
        if (unwantedMarker) {
          this.removeMarker(unwantedMarker);
          delete this.markers[businessId];
        }
      }
    })

    businesses.forEach((business) => {
      this.createMarkerFromBusiness(business);
    })

    Object.keys(this.markers).forEach((markerId, idx) => {
      let marker = this.markers[markerId];
      let newNum = idx + 1
      newNum = newNum.toString()
      marker.setLabel(newNum)
    })
  }

  createMarkerFromBusiness(business) {
   
    if (!this.markers[business.id]) {
      let latLng = { lat: business.latitude, lng: business.longitude }
      let marker = new google.maps.Marker({
        position: latLng,
        map: this.map,
        animation: google.maps.Animation.DROP,
        businessId: business.id
      })
      
      let contentStr = '<div class="info-window">' + 
      '<div class="info-window-info">' + 
      `<p>${business.name}</p>` + 
      `<p>${business.category}</p>` + 
      `<p>${business.city}</p>` + 
      '</div>' +
      `<img src="${business.profPic}"/>` +
      '</div>'


      const infowindow = new google.maps.InfoWindow({
        content: contentStr,
        disableAutoPan: true
      });

      marker.addListener('mouseover', () => {
        infowindow.open(this.map, marker);
      })

      marker.addListener('mouseout', () => {
        infowindow.close(this.map, marker);
      })

      marker.addListener('click', () => {
        window.location.href = `https://uwuelp.herokuapp.com/#/businesses/${marker.businessId}`
      })

      this.markers[business.id] = marker; 
    }
  }

  removeMarker(marker) {
    marker.setMap(null);
  }


}