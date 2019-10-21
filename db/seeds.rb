# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

require 'open-uri'

User.destroy_all
User.connection.execute('ALTER SEQUENCE users_id_seq RESTART WITH 1')

user1 = User.create(
  first_name: 'Jason', last_name: 'Liao', email: 'jasonliao@live.com',
  zipcode: 94134, birth_month: 12, birth_day: 28, birth_year: 1995, password: "123456", city: 'San Francicso', state: 'CA'
)

ufile1 = open('https://uwuelp-seeds.s3-us-west-1.amazonaws.com/userprofpics/1.jpg')
user1.prof_pic.attach(io: ufile1, filename: 'jason.jpg')

user2 = User.create(
  first_name: 'Patty', last_name: 'Kim', email: 'Patty@uwuelp.io', password: '123456',
  zipcode: 94134, city: "Fresno", state: "CA"
)

ufile2 = open('https://uwuelp-seeds.s3-us-west-1.amazonaws.com/userprofpics/2.jpg')
user2.prof_pic.attach(io: ufile2, filename: 'patty.jpg')

user3 = User.create(
  first_name: 'B', last_name: 'Cho', email: 'BChoLovesTacos@cvs.io', password: '123456', zipcode: 94134, city: "Gilroy", state: "CA"
)

ufile3 = open('https://uwuelp-seeds.s3-us-west-1.amazonaws.com/userprofpics/3.png')
user3.prof_pic.attach(io: ufile3, filename: 'bcho.png')

user4 = User.create(
  first_name: 'Andrew', last_name: 'Huang', email: 'anHuang@sjsu.edu', password: '123456', zipcode: 94134, city: "San Francisco", state: "CA"
)

ufile4 = open('https://uwuelp-seeds.s3-us-west-1.amazonaws.com/userprofpics/4.jpg')
user4.prof_pic.attach(io: ufile4, filename: 'drew.jpg')

user5 = User.create(
  first_name: 'Ernie HKFB', last_name: 'Man', email: 'hkfb@mills.com', password: '123456', zipcode: 94134, city: "Milbrae", state: "CA"
)

ufile5 = open('https://uwuelp-seeds.s3-us-west-1.amazonaws.com/userprofpics/5.jpeg')
user5.prof_pic.attach(io: ufile5, filename: 'ern.jpeg')



Review.destroy_all
Review.connection.execute('ALTER SEQUENCE reviews_id_seq RESTART WITH 1')

#SF Businesses
Businesse.destroy_all
Businesse.connection.execute('ALTER SEQUENCE businesses_id_seq RESTART WITH 1')

business1 = Businesse.create(
  name: 'Ichiraku Ramen', address: '125 Chashu St', city: 'San Francisco', state: 'CA', zipcode: 94134, description: 'Rāmen Ichiraku, Literally meaning: (Ramen is the Best Pleasure) is a ramen restaurant in Konohagakure.', open_hour: '9:00 AM', closing_hour: '7:00 PM', latitude: 37.7275, longitude: -122.4040, phone: '(415)-123-4567', website: 'https://naruto.fandom.com/wiki/Ramen_Ichiraku', price_range: 'Inexpensive', parking: 'Street', takeout: 'No', noise_level: 'High', accept_card: "No", cater: "No", wifi: "No", category: 'Restaurant', sub_category: 'Japanese'  
)

business2 = Businesse.create(
  name: 'Baratie', address: '175 Sanji St', city: 'San Francisco', state: 'CA', zipcode: 94124, description: 'The Baratie is an ocean-going restaurant run by Zeff. It is located in the Sambas Region (サンバス海域 Sanbasu Kaiiki?) of the East Blue, close to the entrance of the Grand Line. It is the setting of the Baratie Arc.', open_hour: '11:00 AM', closing_hour: '5:00 PM', latitude: 37.7211 , longitude: -122.3795, phone: '(415)-020-0560', website: 'https://onepiece.fandom.com/wiki/Baratie', price_range: 'Ultra High-End', parking: 'Parking Lot', takeout: 'Yes', noise_level: 'High', accept_card: "Yes", cater: "No", wifi: "Yes", category: 'Restaurant', sub_category: 'Japanese'  
)

business3 = Businesse.create(
  name: 'Restaurant Yukihira', address: '95 Sumiredori St', city: 'San Francisco', state: 'CA', zipcode: 94114, description: 'Japanese style special-of-the-day type restaurant owned by Jōichirō Yukihira in the Sumiredōri Shopping District. However, Jōichirō closed it in order to travel abroad for 3 years and send his son Sōma to an Elite Culinary School called Tōtsuki Culinary Academy.', open_hour: '2:00 PM', closing_hour: '11:00 PM', latitude: 37.7651 , longitude: -122.4762, phone: '(415)-450-0060', website: 'https://shokugekinosoma.fandom.com/wiki/Restaurant_Yukihira', price_range: 'Moderate', parking: 'Meter', takeout: 'No', noise_level: 'Low', accept_card: "No", cater: "No", wifi: "No", category: 'Restaurant', sub_category: 'Japanese'  
)


business4 = Businesse.create(
  name: 'Western Cuisine Mitamura', address: '95 Mitamura St', city: 'San Francisco', state: 'CA', zipcode: 94103, description: 'Western Cuisine Mitamura (洋食の三田村 Yōshoku no Mitamura) is a restaurant owned by Mamoru Mitamura and the first Stagiaire location for Sōma Yukihira and Hisako Arato.', open_hour: '6:00 PM', closing_hour: '11:00 PM', latitude: 37.7792 , longitude: -122.4109, phone: '(415)-480-0000', website: 'https://shokugekinosoma.fandom.com/wiki/Western_Cuisine_Mitamura', price_range: 'Moderate', parking: 'Meter', takeout: 'No', noise_level: 'Low', accept_card: "No", cater: "No", wifi: "No", category: 'Restaurant', sub_category: 'Japanese'  
)


business5 = Businesse.create(
  name: 'Trattoria Aldini', address: '959 Cuoco Ave', city: 'San Francisco', state: 'CA', zipcode: 94102, description: 'Trattoria Aldini is a restaurant located in a Tuscany region of Florence, Italy. Prior to the beginning of the story, Takumi Aldini and Isami Aldini gained experience from this restaurant since the age of five before moving to Tōtsuki Culinary Academy to further their studies.', open_hour: '11:00 AM', closing_hour: '8:00 PM', latitude: 37.7825 , longitude: -122.4156, phone: '(415)-439-0760', website: 'https://shokugekinosoma.fandom.com/wiki/Trattoria_Aldini', price_range: 'Pricey', parking: 'Meter', takeout: 'Yes', noise_level: 'High', accept_card: "Yes", cater: "Yes", wifi: "Yes", category: 'Restaurant', sub_category: 'Other'  
)


business6 = Businesse.create(
  name: 'Sanji\'s Express', address: '569 Vinsmoke Ave', city: 'San Francisco', state: 'CA', zipcode: 94109, description: 'Sanji\'s Express is a restaurant opened by Sanji from One Piece after his journey with Luffy to beomce a Pirate King', open_hour: '8:00 AM', closing_hour: '8:00 PM', latitude: 37.7956 , longitude: -122.4237, phone: '(415)-220-0060', website: 'https://onepiece.fandom.com/wiki/Sanji', price_range: 'Ultra High-End', parking: 'Parking Lot', takeout: 'No', noise_level: 'Low', accept_card: "Yes", cater: "Yes", wifi: "Yes", category: 'Restaurant', sub_category: 'Other'  
)

business7 = Businesse.create(
  name: 'Charmy\'s Puffy Lunch', address: '77 BlackBulls Ave', city: 'San Francisco', state: 'CA', zipcode: 94124, description: 'Sanji\'s Express is a restaurant opened by Sanji from One Piece after his journey with Luffy to beomce a Pirate King', open_hour: '8:00 AM', closing_hour: '8:00 PM', latitude: 37.7249 , longitude: -122.3698, phone: '(415)-490-0060', website: 'https://blackclover.fandom.com/wiki/Charmy_Pappitson', price_range: 'Moderate', parking: 'Parking Lot', takeout: 'Yes', noise_level: 'High', accept_card: "No", cater: "Yes", wifi: "Yes", category: 'Restaurant', sub_category: 'Other'  
)

business8 = Businesse.create(
  name: 'Rukia Boba Shop', address: '7000 Shinigami Dr', city: 'San Francisco', state: 'CA', zipcode: 94132, description: 'A Boba Shop that Rukia from Bleach operates while she waits on Monsters to appear.', open_hour: '9:00 AM', closing_hour: '5:00 PM', latitude: 37.7205 , longitude: -122.4724, phone: '(415)-590-1060', website: 'https://bleach.fandom.com/wiki/Rukia_Kuchiki', price_range: 'Pricey', parking: 'Street', takeout: 'Yes', noise_level: 'High', accept_card: "Yes", cater: "No", wifi: "No", category: 'Boba Shop'  
)

business9 = Businesse.create(
  name: 'Toriko', address: '100 Hunter Dr', city: 'San Francisco', state: 'CA', zipcode: 94124, description: 'Toriko is Boba Shop opened by a gourmet hunter who has been around all four corners of the earth to experience all the delicacies that the world has to offer. Currently, he is taking a break from cooking and has opened a Boba Shop that\'s named after himself', open_hour: '7:00 AM', closing_hour: '5:00 PM', latitude: 37.7254 , longitude: -122.3717, phone: '(415)-990-1060', website: 'https://bleach.fandom.com/wiki/Rukia_Kuchiki', price_range: 'Pricey', parking: 'Street', takeout: 'Yes', noise_level: 'High', accept_card: "Yes", cater: "No", wifi: "No", category: 'Boba Shop'  
)

business10 = Businesse.create(
  name: 'Cancer\'s Barber Shop', address: '1337 Spirit Ln', city: 'San Francisco', state: 'CA', zipcode: 94124, description: 'Premium styling Barber Shop/Salon that is operated by once of the best stylist to have ever existed.', open_hour: '10:00 AM', closing_hour: '7:00 PM', latitude: 37.7433, longitude: -122.3876, phone: '(415)-580-7260', website: 'https://fairytail.fandom.com/wiki/Cancer', price_range: 'Pricey', parking: 'Street', takeout: 'No', noise_level: 'Low', accept_card: "Yes", cater: "No", wifi: "No", category: 'Barber Shop'  
)


business11 = Businesse.create(
  name: 'Aquarius\'s Seafood', address: '125 Ocean St', city: 'San Diego', state: 'CA', zipcode: 92037, description: 'a Seafood restaurant opened by one of the strongest celestial spirit from Fairy Tail.', open_hour: '9:00 AM', closing_hour: '7:00 PM', latitude: 32.8624, longitude: -117.2610, phone: '(858)-123-4567', website: 'https://fairytail.fandom.com/wiki/Aquarius', price_range: 'Inexpensive', parking: 'Street', takeout: 'No', noise_level: 'High', accept_card: "No", cater: "No", wifi: "No", category: 'Restaurant', sub_category: 'Seafood'  
)

business12 = Businesse.create(
  name: 'Taurus\'s Drip Shop', address: '175 Milk St', city: 'San Diego', state: 'CA', zipcode: 92108, description: 'A clothing store owned by a buff celestial spirit.', open_hour: '11:00 AM', closing_hour: '5:00 PM', latitude: 32.7700 , longitude: -117.1647, phone: '(858)-020-0560', website: 'https://fairytail.fandom.com/wiki/Taurus', price_range: 'Ultra High-End', parking: 'Parking Lot', takeout: 'Yes', noise_level: 'High', accept_card: "Yes", cater: "No", wifi: "Yes", category: 'Clothing Store' 
)

business13 = Businesse.create(
  name: 'Virgo\'s Maid Cafe', address: '95 GoShujinSama St', city: 'San Diego', state: 'CA', zipcode: 92123, description: 'A maid cafe owned by a spirit with TONS of experience as a maid over centuries of experience.', open_hour: '2:00 PM', closing_hour: '11:00 PM', latitude: 32.7873 , longitude: -117.1524, phone: '(858)-450-0060', website: 'https://fairytail.fandom.com/wiki/Virgo', price_range: 'Moderate', parking: 'Meter', takeout: 'No', noise_level: 'Low', accept_card: "No", cater: "No", wifi: "No", category: 'Restaurant', sub_category: 'Japanese'  
)


business14 = Businesse.create(
  name: 'Sagittarius\'s ', address: '95 MushiMushi St', city: 'San Diego', state: 'CA', zipcode: 92111, description: 'A clothing owned by one of the finest dressed celestial spirit.', open_hour: '6:00 PM', closing_hour: '11:00 PM', latitude: 32.7939 , longitude: -117.1668, phone: '(858)-480-0000', website: 'https://fairytail.fandom.com/wiki/Sagittarius', price_range: 'Moderate', parking: 'Meter', takeout: 'No', noise_level: 'Low', accept_card: "No", cater: "No", wifi: "No", category: 'Clothing Store'
)


business15 = Businesse.create(
  name: 'Leo', address: '959 Regulus Ave', city: 'San Diego', state: 'CA', zipcode: 92117, description: 'A restaurant managed by an Alpha.', open_hour: '11:00 AM', closing_hour: '8:00 PM', latitude: 32.8283 , longitude: -117.1930, phone: '(858)-439-0760', website: 'https://fairytail.fandom.com/wiki/Loke', price_range: 'Pricey', parking: 'Meter', takeout: 'Yes', noise_level: 'High', accept_card: "Yes", cater: "Yes", wifi: "Yes", category: 'Restaurant', sub_category: 'Japanese'  
)


business16 = Businesse.create(
  name: 'ArieTea', address: '569 Kawaii Ave', city: 'San Diego', state: 'CA', zipcode: 92117, description: 'A boba spot made by one of the kindest celestial spirit.', open_hour: '8:00 AM', closing_hour: '8:00 PM', latitude: 32.8359 , longitude: -117.1830, phone: '(858)-220-0060', website: 'https://fairytail.fandom.com/wiki/Aries', price_range: 'Ultra High-End', parking: 'Parking Lot', takeout: 'No', noise_level: 'Low', accept_card: "Yes", cater: "Yes", wifi: "Yes", category: 'Boba Shop'  
)

business17 = Businesse.create(
  name: 'ScorpCuts', address: '77 Sand Ave', city: 'San Diego', state: 'CA', zipcode: 92117, description: 'a barber shop owned by one of the coolest celestial spirits.', open_hour: '8:00 AM', closing_hour: '8:00 PM', latitude: 32.8355 , longitude: -117.1930, phone: '(858)-490-0060', website: 'https://fairytail.fandom.com/wiki/Scorpio', price_range: 'Moderate', parking: 'Parking Lot', takeout: 'Yes', noise_level: 'High', accept_card: "No", cater: "Yes", wifi: "Yes", category: 'Barber Shop'
)

business18 = Businesse.create(
  name: 'Gemini Tacos', address: '7000 Twins Dr', city: 'San Diego', state: 'CA', zipcode: 92117, description: 'A taco shops that sells mini tacos and is own by the Gemini twins.', open_hour: '9:00 AM', closing_hour: '5:00 PM', latitude: 32.8270 , longitude: -117.2060, phone: '(858)-590-1060', website: 'https://fairytail.fandom.com/wiki/Gemini', price_range: 'Pricey', parking: 'Street', takeout: 'Yes', noise_level: 'High', accept_card: "Yes", cater: "No", wifi: "No", category: 'Restaurant', sub_category: 'Mexican'  
)

business19 = Businesse.create(
  name: 'Capri Corns', address: '100 Best Zodiac', city: 'San Diego', state: 'CA', zipcode: 92122, description: 'A restaurants that sells elote corn and is owned by the Capricorn celestial spirit.', open_hour: '7:00 AM', closing_hour: '5:00 PM', latitude: 32.8671 , longitude: -117.2074, phone: '(858)-990-1060', website: 'https://fairytail.fandom.com/wiki/Capricorn', price_range: 'Pricey', parking: 'Street', takeout: 'Yes', noise_level: 'High', accept_card: "Yes", cater: "No", wifi: "No", category: 'Restaurant', sub_category: 'Mexican'  
)

business20 = Businesse.create(
  name: 'Nikoraaaa', address: '1337 Laaaaa Ln', city: 'San Diego', state: 'CA', zipcode: 92121, description: 'Laaaaaaaaaaaaaaaaaaa', open_hour: '10:00 AM', closing_hour: '7:00 PM', latitude: 32.8819, longitude: -117.2193, phone: '(858)-580-7260', website: 'https://fairytail.fandom.com/wiki/Nikora', price_range: 'Pricey', parking: 'Street', takeout: 'No', noise_level: 'Low', accept_card: "Yes", cater: "No", wifi: "No", category: 'Barber Shop'  
)






arr1 = [0, 5, 6, 7, 8, 9, 12, 13, 18, 19]

Businesse.all.each_with_index do |business, idx|
  front_url = "https://uwuelp-seeds.s3-us-west-1.amazonaws.com/" 
  file = ""
  url_tail = ""
  number = idx + 1

  if arr1.include?(idx)
    new_url = "#{front_url}" + "#{number}" + ".jpg"
    url_tail = "#{number}.jpg"
  else
    new_url = "#{front_url}" + "#{number}" + ".png"
    url_tail = "#{number}.png"
  end
 
  file = open(new_url)
  
  business.prof_pic.attach(io: file, filename: url_tail )
end

[business1, business4, business7, business10, business13, business16, business19].each do |business| 
  file1 = open("https://uwuelp-seeds.s3-us-west-1.amazonaws.com/food1/1.png")
  file2 = open("https://uwuelp-seeds.s3-us-west-1.amazonaws.com/food1/2.png")
  file3 = open("https://uwuelp-seeds.s3-us-west-1.amazonaws.com/food1/3.png")
  file4 = open("https://uwuelp-seeds.s3-us-west-1.amazonaws.com/food1/4.png")
  file5 = open("https://uwuelp-seeds.s3-us-west-1.amazonaws.com/food1/5.png")
  file6 = open("https://uwuelp-seeds.s3-us-west-1.amazonaws.com/food1/6.png")
  file7 = open("https://uwuelp-seeds.s3-us-west-1.amazonaws.com/food1/7.png")
  file8 = open("https://uwuelp-seeds.s3-us-west-1.amazonaws.com/food1/8.png")

  business.food_pics.attach(io: file1, filename: "#{business.name}1.png")
  business.food_pics.attach(io: file2, filename: "#{business.name}2.png")
  business.food_pics.attach(io: file3, filename: "#{business.name}3.png")
  business.food_pics.attach(io: file4, filename: "#{business.name}4.png")
  business.food_pics.attach(io: file5, filename: "#{business.name}5.png")
  business.food_pics.attach(io: file6, filename: "#{business.name}6.png")
  business.food_pics.attach(io: file7, filename: "#{business.name}7.png")
  business.food_pics.attach(io: file8, filename: "#{business.name}8.png")
 
end

[business2, business5, business8, business11, business14, business17, business20].each do |business|
  file1 = open("https://uwuelp-seeds.s3-us-west-1.amazonaws.com/food2/1.png")
  file2 = open("https://uwuelp-seeds.s3-us-west-1.amazonaws.com/food2/2.png")
  file3 = open("https://uwuelp-seeds.s3-us-west-1.amazonaws.com/food2/3.png")
  file4 = open("https://uwuelp-seeds.s3-us-west-1.amazonaws.com/food2/4.png")
  file5 = open("https://uwuelp-seeds.s3-us-west-1.amazonaws.com/food2/5.png")
  file6 = open("https://uwuelp-seeds.s3-us-west-1.amazonaws.com/food2/6.png")
  file7 = open("https://uwuelp-seeds.s3-us-west-1.amazonaws.com/food2/7.png")
  file8 = open("https://uwuelp-seeds.s3-us-west-1.amazonaws.com/food2/8.png")

  business.food_pics.attach(io: file1, filename: "#{business.name}1.png")
  business.food_pics.attach(io: file2, filename: "#{business.name}2.png")
  business.food_pics.attach(io: file3, filename: "#{business.name}3.png")
  business.food_pics.attach(io: file4, filename: "#{business.name}4.png")
  business.food_pics.attach(io: file5, filename: "#{business.name}5.png")
  business.food_pics.attach(io: file6, filename: "#{business.name}6.png")
  business.food_pics.attach(io: file7, filename: "#{business.name}7.png")
  business.food_pics.attach(io: file8, filename: "#{business.name}8.png")
end

[business3, business6, business9, business12, business15, business18].each do |business|
  file1 = open("https://uwuelp-seeds.s3-us-west-1.amazonaws.com/food3/1.png")
  file2 = open("https://uwuelp-seeds.s3-us-west-1.amazonaws.com/food3/2.png")
  file3 = open("https://uwuelp-seeds.s3-us-west-1.amazonaws.com/food3/3.png")
  file4 = open("https://uwuelp-seeds.s3-us-west-1.amazonaws.com/food3/4.png")
  file5 = open("https://uwuelp-seeds.s3-us-west-1.amazonaws.com/food3/5.png")
  file6 = open("https://uwuelp-seeds.s3-us-west-1.amazonaws.com/food3/6.png")
  file7 = open("https://uwuelp-seeds.s3-us-west-1.amazonaws.com/food3/7.png")
  file8 = open("https://uwuelp-seeds.s3-us-west-1.amazonaws.com/food3/8.png")

  business.food_pics.attach(io: file1, filename: "#{business.name}1.png")
  business.food_pics.attach(io: file2, filename: "#{business.name}2.png")
  business.food_pics.attach(io: file3, filename: "#{business.name}3.png")
  business.food_pics.attach(io: file4, filename: "#{business.name}4.png")
  business.food_pics.attach(io: file5, filename: "#{business.name}5.png")
  business.food_pics.attach(io: file6, filename: "#{business.name}6.png")
  business.food_pics.attach(io: file7, filename: "#{business.name}7.png")
  business.food_pics.attach(io: file8, filename: "#{business.name}8.png")
end 










