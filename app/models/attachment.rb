class Attachment < ApplicationRecord
  belongs_to :post
  has_attached_file :asset, 
    if: :is_image_type?, styles: {:large => "750x750>", :medium => "300x300#", :thumb => "100x100#" }, :default_url => "no_image.png",
    if: :is_video_type?, :styles =>  {
      :medium => { :geometry => "640x480", :format => 'flv' },
      :thumb => { :geometry => "100x100#", :format => 'jpg', :time => 10 }
    }, :processors => [:transcoder]

  validates_attachment_content_type :asset,
    :content_type => ['image/png', 'image/jpeg', 'image/jpg', 'image/gif', "video/mp4", "video/m4v", "video/mpeg","video/webm"]

  def is_image_type?
    content_type = ['image/png', 'image/jpeg', 'image/jpg', 'image/gif']
  end 

  def is_video_type?
    content_type = ['video/mp4', 'video/m4v', 'video/mpeg','video/webm']
  end
end
