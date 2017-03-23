# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Profile.destroy_all
User.destroy_all
Restaurant.destroy_all
Category.destroy_all
Review.destroy_all

User.create(email: 'foo@bar.com')
r = Restaurant.create(name: 'McDonalds')
r.foods.create(name: 'Big Mac')

r.categories.create(name: 'Fast Food')

c = Category.create(name: 'Junk Food')
c.restaurants << r

Food.create(name: 'Royale with cheese', restaurant_id: r.id)

u = User.new
u.email = "anotheremaal@yahoo.com"
u.save
u.create_profile(first_name: 'Foo', last_name: 'Bar')

p = Profile.new
p.first_name = "Sally"
p.last_name = "Sue"
p.user = User.first
p.save

Review.create(rating: 2, description: 'this place sucks', user_id: u.id, restaurant: r)

# r = Restaurant.new
# r.name = "McDonalds"
# r.save
