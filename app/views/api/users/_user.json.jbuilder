json.id user.id
json.firstName user.first_name.capitalize
json.lastName user.last_name[0].upcase
json.numReviews user.reviews.length
json.profPic url_for(user.prof_pic)