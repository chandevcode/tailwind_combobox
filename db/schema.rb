ActiveRecord::Schema[7.0].define(version: 20_230_216_014_230) do
  create_table 'people', force: :cascade do |t|
    t.string 'name'
    t.string 'image_url'
    t.datetime 'created_at', null: false
    t.datetime 'updated_at', null: false
  end
end
