require 'test_helper'

class ImageTest < ActiveSupport::TestCase
  def test_image__link_invalid
    img = Image.new(title: 'dog', link: 'this is a link')

    refute_predicate img, :valid?

    assert_equal ['invalid image url!'], img.errors[:link]
  end

  def test_image__link_valid
    image = Image.new(title: 'dog', link: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/An_up-close_picture_of_a_curious_male_domestic_shorthair_tabby_cat.jpg/600px-An_up-close_picture_of_a_curious_male_domestic_shorthair_tabby_cat.jpg')

    assert_predicate image, :valid?
  end

  def test_image__link_should_be_present
    img = Image.new(title: 'Hello')

    refute_predicate img, :valid?
    assert_includes img.errors[:link], 'can\'t be blank'
  end

  def test_image__should_check_tag
    Image.create(title: 'dog', link: 'https://www.gopetplan.com/sites/default/files/2018-07/rsz_shutterstock_165545006.jpg', tag_list: %w[dog cute])

    tags = Image.last.tag_list
    assert_equal 2, tags.count
    assert_includes tags, 'dog'
    assert_includes tags, 'cute'
  end
end
