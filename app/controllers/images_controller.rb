class ImagesController < ApplicationController
  before_action :set_image, only: [:show]

  def index
    @single_tag = params[:tag]

    @images = @single_tag ? Image.tagged_with([@single_tag]) : Image.all.order('created_at DESC')
  end

  # GET /images/1
  def show; end

  # GET /images/new
  def new
    @image = Image.new
  end

  # POST /images
  def create
    @image = Image.new(image_params)
    if @image.save
      redirect_to @image, notice: 'Image link was successfully submitted.'
    else
      flash[:notice] = 'Invalid url'
      render :new, status: :unprocessable_entity
    end
  end

  private

  # Use callbacks to share common setup or constraints between actions.
  def set_image
    if !Image.exists?(params[:id])
      flash[:notice] = "Image with id #{params[:id]} does not exist"
      redirect_to new_image_path
    else
      @image = Image.find(params[:id])
    end
  end

  # Only allow a trusted parameter "white list" through.
  def image_params
    params.require(:image).permit(:title, :link, :tag_list)
  end
end
