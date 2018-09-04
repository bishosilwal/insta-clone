class CreateAttachments < ActiveRecord::Migration[5.2]
  def change
    create_table :attachments do |t|
      t.references :post, foreign_key: true
      t.attachment :asset

      t.timestamps
    end
  end
end
