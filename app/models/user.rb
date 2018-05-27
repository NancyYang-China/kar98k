class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :recoverable, #:registerable,
         :rememberable, :trackable, :validatable

  rails_admin do
    list do
      exclude_fields :reset_password_sent_at, :remember_created_at,
                     :current_sign_in_at, :sign_in_count, :created_at
    end
  end
end
