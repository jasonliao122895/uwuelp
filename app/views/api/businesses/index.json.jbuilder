@businesses.each do |business|
  ratings = business.reviews.map{ |review| review.rating }
  json.set! business.id do
    json.id business.id
    json.name business.name
    json.phone business.phone
    json.address business.address
    json.city business.city
    json.priceRange business.price_range
    json.category business.category
    json.subCategory business.sub_category
    json.latitude business.latitude
    json.longitude business.longitude
    json.avgRating ratings.sum / (ratings.length * 1.0)
    json.numReviews ratings.length
    json.profPic url_for(business.prof_pic)
  end
end