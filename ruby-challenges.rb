# ASSESSMENT 5: Ruby Coding Practical Questions
# MINASWAN

# --------------------1) Create a method that takes in an array of words and a single letter and returns an array of all the words containing that particular letter. Use the test variables provided.

beverages_array = ['coffee', 'tea', 'juice', 'water', 'soda water']

letter_o = 'o'
# Expected output: ['coffee', 'soda water']
letter_t = 't'
# Expected output: ['tea', 'water', 'soda water']

# pseudo
# Create a method called only_words_with_this_letter that takes in an array and a letter as arguments.
# We want to return an array of only the values in the argument array that contain the letter included as an argument. Knowing this, and the fact that we have to iterate over each item in an array, we will use a select block. To create a block in Ruby we have to call on select (array.select) and define our block using the 'do' and 'end' keywords. 
# To pass through a 'value' parameter in our block we will use |P I P E S|. Within the block we define what values we want to return in our new array.
# include?() is a built in method in ruby that returns true if the argument passed through is present in the value (value.include?(letter))
# It doesn't appear to be an issue in the provided examples, but to cover for any potential capitalization edge-cases, we will use the downcase built in method for Ruby to place each value in lower case before using include?() (value.downcase.include?(letter))
# ruby has implicit return so we do not need to use the return keyword in this case.
# outside of our method, call on our method by using p and passing the array and the variable for each letter

def only_words_with_this_letter (array, letter)
    array.select do |value|
        value.downcase.include?(letter)
    end
end

p only_words_with_this_letter(beverages_array, letter_o)
# ["coffee", "soda water"]

p only_words_with_this_letter(beverages_array, letter_t)
# ["tea", "water", "soda water"]

# -------------------2) Create a method that takes in a hash and returns one array with all the hash values at their own index and in alphabetical order. No nested arrays. Use the test variable provided.
# HINT: Google 'ruby get rid of nested arrays'

us_states = { northwest: ['Washington', 'Oregon', 'Idaho'], southwest: ['California', 'Arizona', 'Nevada'], notheast: ['Maine', 'New Hampshire', 'Rhode Island'] }
# Expected output: ['Arizona', 'California', 'Idaho', 'Maine', 'Nevada', 'New Hampshire', 'Oregon', 'Rhode Island', 'Washington'] 

# pseudo
# create a method called hash_it_up_bro that takes in a hash as an argument
# our hash contains multiple arrays as values, we want to combine those into one array and then sort them in alphabetical order
# .values is a built in method in Ruby that returns an array containing all of the values that the method was called on. This returns all of the values in our hash in an array, but it keeps them as three seperate arrays. (hash.values)
# in addition to using .values on our hash, we want to also use .flatten, which is a built in method in ruby that combines all of the values from multiple arrays and combines them into one array. (hash.values.flatten)
# lastly we want to sort our values in our new large array, we can use (you guessed it) the .sort built in method to sort our values alphabetically. (we can just use it out of the box for what we are doing here, no need to pass a function through, which is nice.) (hash.values.flatten.sort)
# call on our method using p and pass in our variable to see the output in the terminal

def hash_it_up_bro (hash)
    hash.values.flatten.sort
end

p hash_it_up_bro(us_states)
# ["Arizona", "California", "Idaho", "Maine", "Nevada", "New Hampshire", "Oregon", "Rhode Island", "Washington"]

# --------------------3a) Create a class called Bike that is initialized with a model, wheels, and current_speed. The default number of wheels is 2. The current_speed should start at 0. Create a bike_info method that returns a sentence with all the data from the bike object.

# Expected output example: 'The Trek bike has 2 wheels and is going 0 mph.'

# -------------------3b) Add the ability to pedal faster and brake. The pedal_faster method should increase the speed by a given amount. The brake method should decrease the speed by a given amount. The bike cannot go negative speeds.

# Expected output example: my_bike.pedal_faster(10) => 10
# Expected output example: my_bike.pedal_faster(18) => 28
# Expected output example: my_bike.brake(5) => 23
# Expected output example: my_bike.brake(25) => 0

# pseudo:
# create a class called Bike
# define an initialize method that takes in an arguement for the model. We do not need to pass an argument for wheels or current_speed as they have default values. In the future we can add methods to change the wheels value, but it is outide of the scope for this challenge.
# create an attr_accessor for :model, :wheels, and :current_speed so we can update the attributes that we have initialized.
# create another method in our class called bike_info that returns a string with string interpolation describing the model of the bike, how many wheels it has, and its current speed.
# define a method called pedal_faster that takes in and integer as an argument (speed) that when called on reassigns @current_speed to @current_speed + speed. return a string with string interpolation stating the current speed of the bike.
# finally, define a method called brake that takes in an integer as an argument (brake_power) that when called on reassigns @current_speed to @current_speed - speed. return a string with string interpolation stating the current speed of the bike. within the brake method create a conditional statement that checks if @current_speed less than or equal to 0, if that is true, set @current_speed to 0 and return "You have come to a stop."

class Bike 
    attr_accessor :model, :wheels, :current_speed
    def initialize(model)
        @model = model
        @wheels = 2
        @current_speed = 0
    end
    def bike_info
        "The #{@model} bike has #{@wheels} wheels and is going #{@current_speed} mph."
    end
    def pedal_faster(speed)
        @current_speed = @current_speed + speed
        "You are going #{@current_speed} mph on your #{@model}"
    end
    def brake(brake_power)
        @current_speed = @current_speed - brake_power
        if @current_speed <= 0
            @current_speed = 0
            "You have come to a stop."
        elsif @current_speed > 0
            "You have slowed down to #{@current_speed} mph thanks to your professional braking power."
        end
    end
end

trek = Bike.new('Trek')
p trek.bike_info
# "The Trek bike has 2 wheels and is going 0 mph."
p trek.pedal_faster(20)
# "You are going 20 mph on your Trek"
p trek.pedal_faster(5)
# "You are going 25 mph on your Trek"
p trek.brake(10)
# "You have slowed down to 15 mph thanks to your professional braking power."
p trek.brake(10)
# "You have slowed down to 5 mph thanks to your professional braking power."
p trek.brake(10)
# "You have come to a stop."
p trek.brake(10)
# "You have come to a stop."
p trek.pedal_faster(5)
# "You are going 5 mph on your Trek"


