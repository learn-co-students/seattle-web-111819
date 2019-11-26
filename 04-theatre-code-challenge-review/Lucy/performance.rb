class Performance
    attr_reader :date, :musical, :theater
    @@all = [ ]

    def initialize(date, musical, theater)
        @date = date
        @musical = musical
        @theater = theater
        @@all << self
    end

    def self.all
        @@all
    end

    def hometown_setting?
        #what are the variables setting_city(musical) && city(theater)
        #  include? -> true or false to a code that you pass it.
        # binding.pry
        musical.setting_city == theater.city
    end
end