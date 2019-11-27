class Theater

    attr_accessor :title, :city

    @@all = [ ]
    def initialize(title, city)
        @title = title
        @city = city
        @@all << self
    end

    def self.all
        @@all 
    end

    def performances
        # [ #<Performance> , #<Performance>, #<P>]
        # Talk to the performance class
        # @@all 
        Performance.all.select { |performance| performance.theater == self }
    end

    def musicals
        performances.map { |performance| performance.musical }
    end

    # 1st - write a method that will return my upcoming musicals
    # Second - write a method that will return all of the upcoming events.
    # 1. does this need to be an instance method or a class method?
    # 2. which class do I need to talk to?
    # 3. how can I find my upcoming performances?
    # 4. how can I find my musicals?
    # 5. How do I find the upcoming ones from that?

    def upcoming_musicals

        current_date = Time.now.strftime("%m/%d/%Y")
        current_year = Time.now.strftime("%m/%d/%Y")[-2,4].to_i 

        # performances.
        upcoming_perf = performances.select { |performance| performance.date[-2,2].to_i > current_year }
        musicals = upcoming_perf.map {|performance|  performance.musical}.uniq
        # binding.pry
    end

end