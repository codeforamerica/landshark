class HomeController < ApplicationController
  def index
    @recipient = Recipient.all
    @conversations = Conversation.find(:all, :order => "date desc", :limit => 10)
    @upcoming = Reminder.grouped_reminders(10).collect
  end
end
