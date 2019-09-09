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