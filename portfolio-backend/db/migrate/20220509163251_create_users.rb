class CreateUsers < ActiveRecord::Migration[7.0]
  def change
    create_table :users, id: :uuid, default: -> { "gen_random_uuid()" }, force: :cascade do |t|
      t.string "last_name", null: false, default: ""
      t.string "first_name", null: false, default: ""

      t.timestamps
    end
  end
end
