class DogsController < ApplicationController
  def index
  end

  def trigger
    data = params[:data]
    binding.pry
  end

end
