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

Businesse.create(
  name: 'Ichiraku Ramen', address: '125 Chashu St', city: 'San Francisco', state: 'CA', zipcode: 94134, description: 'Rāmen Ichiraku, Literally meaning: Ramen is the Best Pleasure) is a ramen restaurant in Konohagakure.', open_hour: '9:00 AM', closing_hour: '7:00 PM', latitude: 37.7275, longitude: -122.4040, phone: '(415)-123-4567', website: 'https://naruto.fandom.com/wiki/Ramen_Ichiraku', price_range: 'Inexpensive', parking: 'Street', takeout: 'No', noise_level: 'High', accept_card: "No", cater: "No", wifi: "No", category: 'Restaurant', sub_category: 'Japanese'  
)

Businesse.create(
  name: 'Baratie', address: '175 Sanji St', city: 'San Francisco', state: 'CA', zipcode: 94124, description: 'The Baratie is an ocean-going restaurant run by Zeff. It is located in the Sambas Region (サンバス海域 Sanbasu Kaiiki?) of the East Blue, close to the entrance of the Grand Line. It is the setting of the Baratie Arc.', open_hour: '11:00 AM', closing_hour: '5:00 PM', latitude: 37.7211 , longitude: -122.3795, phone: '(415)-020-0560', website: 'https://onepiece.fandom.com/wiki/Baratie', price_range: 'Ultra High-End', parking: 'Parking Lot', takeout: 'Yes', noise_level: 'High', accept_card: "Yes", cater: "No", wifi: "Yes", category: 'Restaurant', sub_category: 'Japanese'  
)

Businesse.create(
  name: 'Restaurant Yukihira', address: '95 Sumiredori St', city: 'San Francisco', state: 'CA', zipcode: 94114, description: 'Japanese style special-of-the-day type restaurant owned by Jōichirō Yukihira in the Sumiredōri Shopping District. However, Jōichirō closed it in order to travel abroad for 3 years and send his son Sōma to an Elite Culinary School called Tōtsuki Culinary Academy.', open_hour: '06:00 PM', closing_hour: '11:00 PM', latitude: 37.7651 , longitude: -122.4762, phone: '(415)-420-0760', website: 'https://shokugekinosoma.fandom.com/wiki/Restaurant_Yukihira', price_range: 'Moderate', parking: 'Meter', takeout: 'No', noise_level: 'Low', accept_card: "No", cater: "No", wifi: "No", category: 'Restaurant', sub_category: 'Japanese'  
)



