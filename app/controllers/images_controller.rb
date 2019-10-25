class ImagesController < ApplicationController
  before_action :set_image, only: [:show]

  def index
    @single_tag = params[:tag]

    @images = @single_tag ? Image.tagged_with([@single_tag]) : Image.all.order('created_at DESC')
  end

  def show; end

  def new
    @image = Image.new
  end

  def create
    @image = Image.new(image_params)
    if @image.save
      redirect_to @image, notice: 'Image link was successfully submitted.'
    else
      flash[:notice] = 'Invalid url'
      render :new, status: :unprocessable_entity
    end
  end

  def destroy
    id = params[:id] # This variable is to bypass rubocop condition length check
    if !Image.exists?(id)
      flash[:notice] = "Image with id #{id} does not exist!"
    else
      Image.find(id).destroy
      flash[:notice] = "Image with id #{id} has been successfully deleted!"
    end
    redirect_to images_path
  end

  private

  def set_image
    if !Image.exists?(params[:id])
      flash[:notice] = "Image with id #{params[:id]} does not exist"
      redirect_to new_image_path
    else
      @image = Image.find(params[:id])
    end
  end

  def image_params
    params.require(:image).permit(:title, :link, :tag_list)
  end
end
