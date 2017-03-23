# number = 3
#
# if number == 3
#   puts "It's a 3"
# end

puts "How old are you?"

user_input = gets.chomp.to_i

if user_input > 20
  puts "You can have a beer"
else
  puts "You can't have a beer"
end
