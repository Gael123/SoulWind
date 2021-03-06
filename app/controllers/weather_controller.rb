class WeatherController < ApplicationController
  def find_city
    @results = getOpenWeatherCities(params[:q])
    respond_to do |format|
    format.js { render json: @results }
    end
  end

  def get_open_weather_cities(query)
        require 'net/http'
        require 'json'
        require 'erb'
        query_escaped=ERB::Util.url_encode(query)
        appid = ConcertoConfig["open_weather_map_api_key"]
        url = "http://api.openweathermap.org/data/2.5/find?q=#{query_escaped}&type=like&mode=json&appid=#{appid}"
        return Net::HTTP.get(URI(url))
     end
end
