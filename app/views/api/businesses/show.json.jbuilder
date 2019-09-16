open_duration = [@businesse.open_hour, @businesse.closing_hour].join('-')
ratings = @businesse.reviews.map{ |review| review.rating }

json.set! @businesse.id do
  json.id @businesse.id
  json.name @businesse.name
  json.address @businesse.address
  json.city @businesse.city
  json.state @businesse.state
  json.zipcode @businesse.zipcode
  json.description @businesse.description
  json.hours open_duration
  json.latitude @businesse.latitude
  json.longitude @businesse.longitude
  json.phone @businesse.phone
  json.website @businesse.website
  json.priceRange @businesse.price_range
  json.parking @businesse.parking
  json.takeout @businesse.takeout
  json.noiseLevel @businesse.noise_level
  json.acceptCard @businesse.accept_card
  json.cater @businesse.cater
  json.avgRating ratings.sum / (ratings.length * 1.0 ) 
  json.wifi @businesse.wifi
  json.category @businesse.category
  json.subCategory @businesse.sub_category
  json.photosUrls @businesse.food_pics.map { |file| url_for(file) }
  json.reviews @businesse.reviews
end