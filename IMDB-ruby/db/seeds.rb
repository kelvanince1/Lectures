# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Role.destroy_all
Genre.destroy_all
Movie.destroy_all
Actor.destroy_all


m = Movie.create(name: 'Seven Pounds', date: Date.new(2002, 12, 12))

g = Genre.create(name: 'Drama')
g.movies << m

a = Actor.create!(first_name: 'Will', last_name: 'Smith', birth_date: Date.new(2012, 12, 12), washed_up: false)

r = Role.create(character_name: 'Ben', movie_id: m.id, actor_id: a.id)
