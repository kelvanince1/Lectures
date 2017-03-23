class AddRolesToMovies < ActiveRecord::Migration[5.0]
  def change
    add_reference :movies, :role, foreign_key: true
  end
end
