class User
    attr_reader :username
    # @@all = [ ]
    def initialize(user)
        binding.pry

        @username = user["username"]
        @id = user["id"]
        # @@all << self
    end

    def self.all
        # @@all
        users = DB[:conn].execute("SELECT * FROM users")
        users.map do |user|
            User.new(user)
        end           
    end

    def self.create_table
        DB[:conn].execute("CREATE TABLE users(id INTEGER PRIMARY KEY, username TEXT)")
    end

    def self.insert_data(username)
        DB[:conn].execute("INSERT INTO users(username) VALUES(?)", username)
    end

    def post_tweet(message)
        tweet = Tweet.new(message, self)
        # @tweets << tweet
    end

    def tweets
        Tweet.all.select { |tweet| tweet.user == self }
    end

    def likes
       Like.all.select {|like| like.user == self }
    end

    def liked_messages
        likes.map { |like| like.tweet.message }
    end
end