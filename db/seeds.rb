# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
User.destroy_all
User.connection.execute('ALTER SEQUENCE users_id_seq RESTART WITH 1')

User.create(
  first_name: 'Jason', last_name: 'Liao', email: 'jasonliao@live.com',
  zipcode: 94134, birth_month: 12, birth_day: 28, birth_year: 1995, password: "123456"
)

#SF Businesses
Businesse.destroy_all
Businesse.connection.execute('ALTER SEQUENCE businesses_id_seq RESTART WITH 1')

Businesse.create(
  name: 'Ichiraku Ramen', address: '125 Chashu St', city: 'San Francisco', state: 'CA', zipcode: 94134, description: 'Rāmen Ichiraku, Literally meaning: (Ramen is the Best Pleasure) is a ramen restaurant in Konohagakure.', open_hour: '9:00 AM', closing_hour: '7:00 PM', latitude: 37.7275, longitude: -122.4040, phone: '(415)-123-4567', website: 'https://naruto.fandom.com/wiki/Ramen_Ichiraku', price_range: 'Inexpensive', parking: 'Street', takeout: 'No', noise_level: 'High', accept_card: "No", cater: "No", wifi: "No", category: 'Restaurant', sub_category: 'Japanese'  
)

Businesse.create(
  name: 'Baratie', address: '175 Sanji St', city: 'San Francisco', state: 'CA', zipcode: 94124, description: 'The Baratie is an ocean-going restaurant run by Zeff. It is located in the Sambas Region (サンバス海域 Sanbasu Kaiiki?) of the East Blue, close to the entrance of the Grand Line. It is the setting of the Baratie Arc.', open_hour: '11:00 AM', closing_hour: '5:00 PM', latitude: 37.7211 , longitude: -122.3795, phone: '(415)-020-0560', website: 'https://onepiece.fandom.com/wiki/Baratie', price_range: 'Ultra High-End', parking: 'Parking Lot', takeout: 'Yes', noise_level: 'High', accept_card: "Yes", cater: "No", wifi: "Yes", category: 'Restaurant', sub_category: 'Japanese'  
)

Businesse.create(
  name: 'Restaurant Yukihira', address: '95 Sumiredori St', city: 'San Francisco', state: 'CA', zipcode: 94114, description: 'Japanese style special-of-the-day type restaurant owned by Jōichirō Yukihira in the Sumiredōri Shopping District. However, Jōichirō closed it in order to travel abroad for 3 years and send his son Sōma to an Elite Culinary School called Tōtsuki Culinary Academy.', open_hour: '2:00 PM', closing_hour: '11:00 PM', latitude: 37.7651 , longitude: -122.4762, phone: '(415)-450-0060', website: 'https://shokugekinosoma.fandom.com/wiki/Restaurant_Yukihira', price_range: 'Moderate', parking: 'Meter', takeout: 'No', noise_level: 'Low', accept_card: "No", cater: "No", wifi: "No", category: 'Restaurant', sub_category: 'Japanese'  
)


Businesse.create(
  name: 'Western Cuisine Mitamura', address: '95 Mitamura St', city: 'San Francisco', state: 'CA', zipcode: 94103, description: 'Western Cuisine Mitamura (洋食の三田村 Yōshoku no Mitamura) is a restaurant owned by Mamoru Mitamura and the first Stagiaire location for Sōma Yukihira and Hisako Arato.', open_hour: '6:00 PM', closing_hour: '11:00 PM', latitude: 37.7792 , longitude: -122.4109, phone: '(415)-480-0000', website: 'https://shokugekinosoma.fandom.com/wiki/Western_Cuisine_Mitamura', price_range: 'Moderate', parking: 'Meter', takeout: 'No', noise_level: 'Low', accept_card: "No", cater: "No", wifi: "No", category: 'Restaurant', sub_category: 'Japanese'  
)


Businesse.create(
  name: 'Trattoria Aldini', address: '959 Cuoco Ave', city: 'San Francisco', state: 'CA', zipcode: 94102, description: 'Trattoria Aldini is a restaurant located in a Tuscany region of Florence, Italy. Prior to the beginning of the story, Takumi Aldini and Isami Aldini gained experience from this restaurant since the age of five before moving to Tōtsuki Culinary Academy to further their studies.', open_hour: '11:00 AM', closing_hour: '8:00 PM', latitude: 37.7825 , longitude: -122.4156, phone: '(415)-439-0760', website: 'https://shokugekinosoma.fandom.com/wiki/Trattoria_Aldini', price_range: 'Pricey', parking: 'Meter', takeout: 'Yes', noise_level: 'High', accept_card: "Yes", cater: "Yes", wifi: "Yes", category: 'Restaurant', sub_category: 'Other'  
)


Businesse.create(
  name: 'Sanji\'s Express', address: '569 Vinsmoke Ave', city: 'San Francisco', state: 'CA', zipcode: 94109, description: 'Sanji\'s Express is a restaurant opened by Sanji from One Piece after his journey with Luffy to beomce a Pirate King', open_hour: '8:00 AM', closing_hour: '8:00 PM', latitude: 37.7956 , longitude: -122.4237, phone: '(415)-220-0060', website: 'https://onepiece.fandom.com/wiki/Sanji', price_range: 'Ultra High-End', parking: 'Parking Lot', takeout: 'No', noise_level: 'Low', accept_card: "Yes", cater: "Yes", wifi: "Yes", category: 'Restaurant', sub_category: 'Other'  
)

Businesse.create(
  name: 'Charmy\'s Puffy Lunch', address: '77 BlackBulls Ave', city: 'San Francisco', state: 'CA', zipcode: 94124, description: 'Sanji\'s Express is a restaurant opened by Sanji from One Piece after his journey with Luffy to beomce a Pirate King', open_hour: '8:00 AM', closing_hour: '8:00 PM', latitude: 37.7249 , longitude: -122.3698, phone: '(415)-490-0060', website: 'https://blackclover.fandom.com/wiki/Charmy_Pappitson', price_range: 'Moderate', parking: 'Parking Lot', takeout: 'Yes', noise_level: 'High', accept_card: "No", cater: "Yes", wifi: "Yes", category: 'Restaurant', sub_category: 'Other'  
)

Businesse.create(
  name: 'Rukia Boba Shop', address: '7000 Shinigami Dr', city: 'San Francisco', state: 'CA', zipcode: 94132, description: 'A Boba Shop that Rukia from Bleach operates while she waits on Monsters to appear.', open_hour: '9:00 AM', closing_hour: '5:00 PM', latitude: 37.7205 , longitude: -122.4724, phone: '(415)-590-1060', website: 'https://bleach.fandom.com/wiki/Rukia_Kuchiki', price_range: 'Pricey', parking: 'Street', takeout: 'Yes', noise_level: 'High', accept_card: "Yes", cater: "No", wifi: "No", category: 'Boba Shop'  
)

Businesse.create(
  name: 'Toriko', address: '100 Hunter Dr', city: 'San Francisco', state: 'CA', zipcode: 94124, description: 'Toriko is Boba Shop opened by a gourmet hunter who has been around all four corners of the earth to experience all the delicacies that the world has to offer. Currently, he is taking a break from cooking and has opened a Boba Shop that\'s named after himself', open_hour: '7:00 AM', closing_hour: '5:00 PM', latitude: 37.7254 , longitude: -122.3717, phone: '(415)-990-1060', website: 'https://bleach.fandom.com/wiki/Rukia_Kuchiki', price_range: 'Pricey', parking: 'Street', takeout: 'Yes', noise_level: 'High', accept_card: "Yes", cater: "No", wifi: "No", category: 'Boba Shop'  
)

Businesse.create(
  name: 'Cancer\'s Barber Shop', address: '1337 Spirit Ln', city: 'San Francisco', state: 'CA', zipcode: 94124, description: 'Premium styling Barber Shop/Salon that is operated by once of the best stylist to have ever existed.', open_hour: '10:00 AM', closing_hour: '7:00 PM', latitude: 37.7433 , longitude: -122.3876, phone: '(415)-580-7260', website: 'https://fairytail.fandom.com/wiki/Cancer', price_range: 'Pricey', parking: 'Street', takeout: 'No', noise_level: 'Low', accept_card: "Yes", cater: "No", wifi: "No", category: 'Barber Shop'  
)








