# frozen_string_literal: true
require 'kramdown'

# App can require and use gems from Gemfile
module App
  def self.preview(name)
    Kramdown::Document.new(name).to_html.to_s
  end
end
