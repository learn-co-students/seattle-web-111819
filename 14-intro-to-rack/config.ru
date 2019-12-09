require 'pry'
require 'rack'

class App
    def call(environment_hash)
        # binding.pry
        request = Rack::Request.new(environment_hash)
        path = request.path
        response = Rack::Response.new
        response.write("Hello InCRUDibles!")
        response.finish
    end
end

run App.new
