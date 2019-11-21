class Tweet
    @@all = [ ]

    attr_reader :message
    attr_accessor :user

    def initialize(message, user)
        @user = user
        @message = message
        #self is going to represent the instance
        @@all << self
    end

    def self.all
        @@all
    end
end