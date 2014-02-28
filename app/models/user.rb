class User < ActiveRecord::Base

  require 'role_model'
  include RoleModel

  has_and_belongs_to_many :organizations
  has_many :organization_users

  # Include default devise modules. Others available are:
  # :token_authenticatable, :confirmable,
  # :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable

  attr_accessible :email, :password, :password_confirmation, :remember_me, :roles, :roles_mask, :name, :id
  validates_presence_of :email

end
