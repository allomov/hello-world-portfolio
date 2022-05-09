class CreatePerformances < ActiveRecord::Migration[7.0]
  def change
    create_table :performances, id: :uuid, default: -> { "gen_random_uuid()" }, force: :cascade do |t|
      t.string "title", null: false, default: ""

      t.timestamps
    end
  end
end
