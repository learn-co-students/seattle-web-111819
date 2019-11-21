class User
    attr_reader :username
    @@all = [ ]
    def initialize(username)
        @username = username
        # @tweets = [ ]
        @@all << self
    end

    def self.all
        @@all
    end

    def post_tweet(message)
        tweet = Tweet.new(message, self)
        # @tweets << tweet
    end

    #return the tweets this user made
    def tweets
        # Pull in the @@all from tweets
        # search for the tweets 
        # with a matching user
        # self -> that tells us which instance this 
        # user is
        # binding.pry
        Tweet.all.select { |tweet| tweet.user == self }
    end

    #return all the likes that I have made
    # Like objects [ #<L>, #<L>, ...]
    def likes
       # talks to like class
       # @@all to match up elements
       # enumerate through @all 
       # pull user's tweets from this.
       # check to see which likes match which tweet.
       Like.all.select {|like| like.user == self }
    end

    # find all the messages
    def liked_messages
        # helper methods!! 
        # use the likes methods in this class
        likes.map { |like| like.tweet.message }
    end
end