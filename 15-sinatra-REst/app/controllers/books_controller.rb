class BooksController < Sinatra::Base
    set :views, "app/views"

    get '/' do
        "Hello World"
    end

    #index page
    get '/books' do
        @books = Book.all
        erb :index
    end

    #show page
    get '/books/:id' do
        # binding.pry
    #    @book = Book.first
        @book = Book.find(params["id"])
       erb :show
    end
end