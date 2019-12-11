class BooksController < Sinatra::Base
    set :views, "app/views"
    set :method_override, true

    get '/' do
        "This is the home root Page for our book class"
    end

    #index page
    get '/books' do
        @books = Book.all
        erb :index
    end


    get '/books/new' do
        erb :new
    end

    get '/books/:id/edit' do
        @book = Book.find(params[:id])
        erb :edit
    end

    #show page
    get '/books/:id' do
        # binding.pry
    #    @book = Book.first
        @book = Book.find(params["id"])
       erb :show
    end

    post '/books' do
        # binding.pry
        @book = Book.new(params)
        if @book.save
            redirect "/books/#{@book.id}"
        else
            redirect "/books"
        end
    end

    patch '/books/:id' do
        # binding.pry
        @book = Book.find(params[:id])
        @book.update(title: params[:title], 
            author: params[:author], 
            snippet: params[:snippet])          
    end


    delete '/books/:id' do
        @book = Book.find(params[:id])
        @book.delete
        redirect "/books"
    end

end