class User
    attr_reader :username
    @@all = [ ]
    def initialize(username)
        @username = username
        @tweets = [ ]
        @@all << self
    end

    def self.all
        @@all
    end

    def post_tweet(message)
        # binding.pry
        tweet = Tweet.new(message, self)
        @tweets << tweet
    end

end