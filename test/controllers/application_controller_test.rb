require 'test_helper'

class ApplicationControllerTest < ActionDispatch::IntegrationTest
  test 'should get application home' do
    get root_path
    assert_response :ok
  end
end
