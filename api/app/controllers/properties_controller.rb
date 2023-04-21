class PropertiesController < ApplicationController
    skip_before_action :authorized
    def index
        @properties = Property.all
        render json: @properties
    end

    def show
        @property = Property.find(params[:id])
        render json: @property
    end

    def create
        @property = Property.create(property_params)
        render json: @property
    end

    def update
        @property = Property.find(params[:id])
        @property.update(property_params)
        render json: @property
    end

    def destroy
        @property = Property.find(params[:id])
        @property.destroy
        render json: @property
    end

    private

    def property_params
        params.permit(:property_type, :address, :description, :price, :image)
    end
end
