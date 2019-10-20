require 'test_helper'

class ApplicationControllerTest < ActionDispatch::IntegrationTest
  test 'should get application home' do
    get root_path
    assert_response :ok
  end

  test 'should have a hyperlink to new image page' do
    get root_path

    assert_select('a') do |elements|
      assert_equal 2, elements.count

      assert_equal 'New Image', elements[0].text
      assert_equal '/images/new', elements[0].attr('href').to_s

      assert_equal 'Image List', elements[1].text
      assert_equal '/images', elements[1].attr('href').to_s
    end
  end
end
