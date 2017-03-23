class Person
  attr_reader :age, :first_name, :last_name
  attr_accessor :first_name, :last_name, :full_name

  def self.foo
    @@foo = 'something'
    'bar'
  end

  def initialize(first_name, last_name, age)
    self.first_name = first_name
    self.last_name = last_name
    @age = age
  end

  def full_name
    first_name + ' ' + last_name
  end
end

class Student < Person
  attr_accessor :expected_salary

  def initialize(first_name:, last_name:, age:, expected_salary:)
    super(first_name, last_name, age)
    @expected_salary = expected_salary
  end
end

student = Student.new(first_name: 'Kelvan', last_name: 'Ince', age: 24, expected_salary: 1000000)
puts student.first_name

puts Person.foo
