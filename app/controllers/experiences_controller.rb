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


def new
    @experience = Experience.new
  end

def create
  @experience = Experience.new(experience_params)
    @experience.user = current_user
  if @experience.save
    # CALL THE create_pictures METHOD AFTER @product.save
    create_pictures
    redirect_to experience_path(@experience)
  else
    render :new
  end
end

private

def experience_params
    params.require(:experience).permit(:content, :gear, :location, :photo)
  end



def create_pictures
  photos = params.dig(:experience, :pictures) || []
  photos.each do |photo|
    @experience.pictures.create(photo: photo)
  end
end
end
