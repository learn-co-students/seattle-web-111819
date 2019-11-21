require 'pry'
require_relative 'tweet'
require_relative 'user'

coffee_dad = User.new("Coffee Dad")
tea_uncle = User.new("Tea Uncle")

t1 = Tweet.new("Coffeee is amazing", coffee_dad)
t2 = Tweet.new("Coffeee is ok", tea_uncle)
t3 = Tweet.new("Coffeee is weird", tea_uncle)

binding.pry
0