class Image < ApplicationRecord
  require 'uri'

  validates :link, presence: true
  validate :valid_url?

  private

  def valid_url?
    uri = URI.parse(link)
    errors.add :link, 'invalid image url!' if uri.scheme.nil? || uri.host.nil?
  rescue URI::InvalidURIError
    errors.add :link, 'invalid image url!' # without this line, cannot pass test
  end
end
