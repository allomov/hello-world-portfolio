class CreatePerformances < ActiveRecord::Migration[7.0]
  def change
    create_table :performances, id: :uuid, default: -> { "gen_random_uuid()" }, force: :cascade do |t|
      t.string "title", null: false, default: ""
      t.references :user, type: :uuid, index: true, foreign_key: {to_table: :users}
      t.timestamps
    end
  end
end
