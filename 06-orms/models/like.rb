class Like
    @@all =  [ ]

    attr_accessor :tweet, :user
    
    def initialize(user, tweet)
        @user = user
        @tweet = tweet
        @@all << self
    end

    def self.all
        @@all
    end
end