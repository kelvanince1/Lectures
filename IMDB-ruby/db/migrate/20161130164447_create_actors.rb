class CreateActors < ActiveRecord::Migration[5.0]
  def change
    create_table :actors do |t|
      t.string :first_name
      t.string :last_name
      t.date :birth_date
      t.boolean :washed_up

      t.timestamps
    end
  end
end
