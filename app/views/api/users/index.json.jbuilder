@users.each do |user|
  json.set! user.id do
    json.id user.id
    json.profPic url_for(user.prof_pic)
    json.firstName user.first_name.capitalize
    json.friends user.friends
    json.reviews user.reviews
    json.createdAt user.created_at
    json.hobbies user.hobbies
    json.website user.website
    json.lastName user.last_name[0].upcase
    json.city user.city
    json.state user.state
    json.zipcode user.zipcode
    json.numReviews user.reviews.length
  end
end