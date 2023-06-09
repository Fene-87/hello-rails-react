class Api::V1::GreetingsController < ApplicationController
    def index
        @greeting = Greeting.order('RANDOM()').limit(1).first
        render json: @greeting
    end
end
