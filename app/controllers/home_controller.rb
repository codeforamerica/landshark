class HomeController < ApplicationController
  def index
    @recipient = Recipient.all
    @recents = Conversation.where(:from_number => '14154198992').find(:all, :order => "date desc", :limit => 10)
    @upcoming = Notification.where("send_date >= ?", DateTime.now)
    @report = Report.all
  end
end
