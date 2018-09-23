class ProductShow < ApplicationRecord
  belongs_to :creative_category

  default_scope { order('position ASC') }
  mount_uploader :image1, ImageUploader
  mount_uploader :image2, ImageUploader
  mount_uploader :image3, ImageUploader
  mount_uploader :image4, ImageUploader
  mount_uploader :image5, ImageUploader
  mount_uploader :image6, ImageUploader
  mount_uploader :image7, ImageUploader

  rails_admin do
    nestable_list true

    edit do
      field :name
      field :creative_category
      field :image1
      field :image2
      field :image3
      field :image4
      field :image5
      field :image6
      field :image7
    end

    list do
      sort_by :position
      field :position
      field :name
      field :creative_category do
        pretty_value do # used in list view columns and show views, defaults to formatted_value for non-association fields
          bindings[:object].creative_category.name
        end
      end
      field :updated_at do
        label I18n.t('updated_at')
      end
      field :created_at do
        label I18n.t('created_at')
      end
    end
  end
end
