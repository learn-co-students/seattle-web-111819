class Tweet
    @@all = [ ]

    attr_reader :message
    attr_accessor :user

    def initialize(message, user)
        @user = user
        @message = message
        @@all << self
    end

    def self.all
        @@all
    end

    def likes
        Like.all.select {|like| like.tweet == self }
    end

    def users_who_liked_me
       likes.map {|like| like.user}
    #    binding.pry 
    end

    # Tweet already storing use.
    # def user_who_created_me
    #     likes.map {|like| like.tweet.user}.unique
    # end
end