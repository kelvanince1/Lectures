# class Numbers
#   def numbers
#     scope = (1..999)
#     numbers = Array.new
#     for x in scope
#       if x % 3 == 0 || x % 5 == 0
#         numbers.push(x)
#       end
#     end
#     numbers
#   end
#
#   def totNumbers(numbers)
#     value = 0
#     numbers.each { |x| value += x }
#     puts value
#   end
# end
#
# numbers = Numbers.new
# numbers.totNumbers(numbers.numbers)

#
# def prime_factors(y)
#   x = []
#   m = 2
#   if y < 2
#     return y
#   end
#
#   while (y % m == 0 && m < y)
#     x.push(m)
#   end
#   m += 1
#
#   return x
# end
#
# puts prime_factors(600851475143)
