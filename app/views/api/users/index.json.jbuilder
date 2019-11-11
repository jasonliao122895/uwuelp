@users.each do |user|
  json.set! user.id do
    json.id user.id
    json.profPic url_for(user.prof_pic)
    json.firstName user.first_name.capitalize
    json.lastName user.last_name[0].upcase
  end
end