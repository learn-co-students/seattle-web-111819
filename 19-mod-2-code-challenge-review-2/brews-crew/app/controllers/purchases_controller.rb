class PurchasesController < ApplicationController
    def show
        @purchase = Purchase.find(params[:id])
    end

    def index
        @purchases = Purchase.all
    end

    def new
        @purchase = Purchase.new
    end

    def create
        @purchase = Purchase.new(purchase_params)
        if @purchase.save
            redirect_to @purchase
        else
            render :new
        end
    end

    private 

    def purchase_params
        params.require(:purchase).permit(:customer_name, :price, :brew_id)
    end
end
