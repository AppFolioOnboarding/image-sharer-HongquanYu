require 'test_helper'

class FeedbacksControllerTest < ActionDispatch::IntegrationTest
  test 'feedback form should be rendered correctly' do
    get new_feedback_path
    assert_response :ok

    assert('#feedback-root', count: 1)
  end
end
