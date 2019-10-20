require 'test_helper'

class ImagesControllerTest < ActionDispatch::IntegrationTest
  test 'should redirect to new image page' do
    @img_param1 = { title: 'dog', link: 'https://cdn.orvis.com/images/DBS_SibHusky.jpg' }

    assert_difference('Image.count') do
      post images_path, params: { image: @img_param1 }
    end

    assert_redirected_to image_path(Image.last)

    assert_equal @img_param1[:title], Image.last[:title]
    assert_equal @img_param1[:link], Image.last[:link]
    assert_equal 'Image link was successfully submitted.', flash[:notice]
  end

  test 'invalid link should get error message' do
    @img_param2 = { title: 'dog', link: 'random error link' }

    # assert_no_difference can do too!
    assert_no_changes('Image.count') do
      post images_path, params: { image: @img_param2 }
    end

    assert_equal 'Invalid url', flash[:notice]
    assert_response :unprocessable_entity
  end

  test 'should verify show action' do
    # insert a record and test
    @img_param3 = { title: 'dog', link: 'https://cdn.orvis.com/images/DBS_SibHusky.jpg' }
    post images_path, params: { image: @img_param3 }

    get image_path(Image.last)
    assert_response :ok

    assert_select 'img' do |imgs|
      assert_equal 1, imgs.count
      assert_equal Image.last[:link], imgs[0].attr('src')
    end
  end

  test 'should go to new image page when image does not exist' do
    get image_path(100_000)
    assert_redirected_to new_image_path
    assert_equal 'Image with id 100000 does not exist', flash[:notice]
  end

  # view tests

  test 'should have "New Image" h1 tag' do
    get new_image_path
    assert_response :ok

    assert_select('h1') do |elements|
      assert_equal 1, elements.count

      assert_equal 'New Image', elements[0].text
    end
  end

  test 'should have 2 label tags' do
    get new_image_path
    assert_response :ok

    assert_select('label') do |labels|
      labels.each do |label|
        assert_includes ['Title', '* Link'], label.text
      end
    end
  end

  test 'should have 2 input tags' do
    get new_image_path
    assert_response :ok

    assert_select('input[type=text]') do |inputs|
      assert_equal 2, inputs.count
    end
  end

  test 'should have 1 submit button' do
    get new_image_path
    assert_response :ok

    assert_select('input[type=submit]') do |submit|
      assert_equal 1, submit.count
    end
  end
end
