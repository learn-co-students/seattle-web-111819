class BrewsController < ApplicationController
    before_action :find_brew, only:[:destroy, :show, :edit, :update]

    def index
        @brews = Brew.all
    end

    def show
    end

    def new
        @brew = Brew.new
    end

    def create
        # byebug
        @brew = Brew.new(brew_params)
        if @brew.save
            redirect_to @brew
        else
            flash[:message] = @brew.errors.full_messages
            render :new
        end
    end

    def edit
    end

    def update
        if @brew.update(brew_params)
            redirect_to @brew
        else
            flash[:message] = @brew.errors.full_messages
            render :edit
        end
    end

    def destroy
        @brew.destroy
        redirect_to brews_path
    end

    def strongest
        @brew = Brew.strongest_brew
    end

    private

    def find_brew
        @brew = Brew.find(params[:id])
    end

    def brew_params
        params.require(:brew).permit(:blend_name, :origin, :notes, :strength)
    end
end
