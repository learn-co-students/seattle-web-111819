require_relative 'musical.rb'
require_relative 'theater.rb'
require_relative 'performance.rb'
require 'pry'
require 'date'

som = Musical.new("Sound of Music", "Seattle")
wicked = Musical.new('Wicked', "New York")
rent = Musical.new("Rent", "SanFran")

paramount = Theater.new("Paramount", "Seattle")
fifth_ave = Theater.new("Fifth Avanue", "Seattle")
broadway = Theater.new("Broadway", "New York")

p1 = Performance.new("11/11/19", som, paramount)
p2 = Performance.new("11/20/19", wicked, broadway)
p3 = Performance.new("01/11/20", som, fifth_ave)
p5 = Performance.new("01/11/20", rent, broadway)
p4 = Performance.new("12/23/19", wicked, paramount)
p6 = Performance.new("01/11/20", wicked, fifth_ave)
p7 = Performance.new("01/11/20", wicked, broadway)
p8 = Performance.new("12/23/19", wicked, paramount)


binding.pry
0