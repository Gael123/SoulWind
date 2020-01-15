require 'test_helper'

class WeatherControllerTest < ActionDispatch::IntegrationTest
  test "should get find_city" do
    get weather_find_city_url
    assert_response :success
  end

end
