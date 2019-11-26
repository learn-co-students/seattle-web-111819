class Musical
    attr_reader :setting_city
    attr_accessor :name

    @@all = [ ]

    def initialize(name, setting_city)
        @name = name
        @setting_city = setting_city
        @@all << self
    end

    def self.all
        @@all
    end

    def self.all_introduction
        # find the musical name and the setting city
        # through @@all 
        Musical.all.each do |musical|
        puts "Welcome, this is #{musical.name}, set in #{musical.setting_city}" 
        end
    end

    def perform_in_theater(date, theater)
        Performance.new(date, self, theater)
        # theater, date
        # Associating a musical to that theater
    end

    def performances
        # [ #<Performance> , #<Performance>, #<P>]
        # Talk to the performance class
        # @@all 
        Performance.all.select { |performance| performance.musical == self }
    end

    def theater
        # talk to performance to get info about the theaters
        # see if performances a certain performance/musical and theater line up
        # put the theater into the function -> return a theater that matches the musical
        # binding.pry
        performances.map do |performance|
            performance.theater
        end            
        # self.performances.
    end


end