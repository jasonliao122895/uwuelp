
  json.id @user.id
  json.firstName @user.first_name.capitalize
  json.lastName @user.last_name[0].upcase
  json.fullLastName @user.last_name
  json.email @user.email
  json.zipcode @user.zipcode
  json.numReviews @user.reviews.length
  json.profPic url_for(@user.prof_pic)
  json.birthdate [@user.birth_month, @user.birth_day, @user.birth_year].join('/')
  json.city @user.city
  json.state @user.state
  json.hobbies @user.hobbies
  json.website @user.website
  json.gender @user.gender
  json.createdAt @user.created_at
  json.reviews @user.reviews
