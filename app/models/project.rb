class Project < ApplicationRecord

  belongs_to :creative_category

  default_scope { order('position ASC') }
  mount_uploader :logo, LogoUploader
  mount_uploader :image1, ImageUploader
  mount_uploader :image2, ImageUploader
  mount_uploader :image3, ImageUploader
  mount_uploader :image4, ImageUploader
  mount_uploader :image5, ImageUploader

  rails_admin do
    nestable_list true

    edit do
      field :name
      field :logo
      field :description, :text do
        html_attributes maxlength: 80, rows: 2, cols: 40
      end
      # field :challenge, :text do
      #   html_attributes maxlength: 160, rows: 4, cols: 40
      # end
      # field :result, :text do
      #   html_attributes maxlength: 160, rows: 4, cols: 40
      # end
      # field :summary, :text do
      #   html_attributes maxlength: 160, rows: 4, cols: 40
      # end
      field :creative_category
      field :image1
      field :image2
      field :image3
      field :image4
      field :image5
    end

    list do
      sort_by :position
      field :position
      field :name
      field :description
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
