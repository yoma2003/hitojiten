class CategoriesController < ApplicationController
  def create
    @category = Category.new(category_params)
  end

  private
  
  def category_params
    params.require(:category).permit(:name, :describe)
  end
end
