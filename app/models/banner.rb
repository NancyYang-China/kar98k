class Banner < ApplicationRecord
  default_scope { order('position ASC') }

  mount_uploader :image, BannerUploader

  rails_admin do
    nestable_list true

    edit do
      field :image
    end

    list do
      sort_by :position
      field :position
      field :image
      field :updated_at do
        label I18n.t('updated_at')
      end
      field :created_at do
        label I18n.t('created_at')
      end
    end
  end
end
