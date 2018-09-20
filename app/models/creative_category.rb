# == Schema Information
#
# Table name: creative_categories
#
#  id         :bigint(8)        not null, primary key
#  name       :string
#  position   :integer
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class CreativeCategory < ApplicationRecord
  # has_many :investment
  default_scope { order('position ASC') }

  mount_uploader :badge, BannerUploader

  rails_admin do
    nestable_list true

    edit do
      field :name
      field :badge
    end

    list do
      sort_by :position
      field :position
      field :name
      field :badge
      field :updated_at do
        label I18n.t('updated_at')
      end
      field :created_at do
        label I18n.t('created_at')
      end
    end
  end
end
