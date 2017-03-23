class CreateJoinTableMovieGenre < ActiveRecord::Migration[5.0]
  def change
    create_join_table :movies, :genres 
  end
end
