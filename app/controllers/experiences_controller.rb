class ExperiencesController < ApplicationController
   respond_to :js, :json, :html

  def index
    @experiences = Experience.geocoded
    @markers = @experiences.map do |experience|
      {
        lat: experience.latitude,
        lng: experience.longitude,
       infoWindow: render_to_string(partial: "info_window", locals: { flat: flat })
      }
    end
   end
end
