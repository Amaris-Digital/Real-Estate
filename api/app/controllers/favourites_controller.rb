class FavouritesController < ApplicationController
    skip_before_action :authorized
    def index
        @favourites = Favourite.all
        render json: @favourites
    end

    def create
        @favourite = Favourite.create(favourite_params)
        render json: @favourite
    end

    def destroy
        @favourite = Favourite.find(params[:id])
        @favourite.destroy
        render json: @favourite
    end

    private

    def favourite_params
        params.permit(:user_id, :property_id)
    end
    

end
