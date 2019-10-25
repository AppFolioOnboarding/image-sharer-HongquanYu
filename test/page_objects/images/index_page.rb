module PageObjects
  module Images
    class IndexPage < PageObjects::Document
      path :images

      element :img, locator: '.single-image'
      element :notice, locator: '#notice'
      element :image_list, locator: '.js-index-btn'

      collection :images, locator: '.js-image-list', item_locator: '.js-single-image', contains: ImageCard do
        def view!
          node.click_on('To Image')
          window.change_to(ShowPage)
        end
      end

      def add_new_image!
        node.click_on('New Image')
        window.change_to(NewPage)
      end

      def showing_image?(url:, tags: nil)
        images.any? do |image|
          result = image.url == url
          tags.present? ? (result && image.tags == tags) : result
        end
      end

      def clear_tag_filter!
        image_list.node.click # 2nd way of clicking a button
        window.change_to(IndexPage)
      end
    end
  end
end
