
  json.id @user.id
  json.firstName @user.first_name.capitalize
  json.lastName @user.last_name[0].upcase
  json.email @user.email
  json.zipcode @user.zipcode
  json.numReviews @user.reviews.length
  json.profPic url_for(@user.prof_pic)
  json.birthdate [@user.birth_month, @user.birth_day, @user.birth_year].join('/')
