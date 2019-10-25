module PageObjects
  module Images
    class ShowPage < PageObjects::Document
      path :image

      element :notice, locator: '#notice'
      element :url, locator: '.img_url'

      collection :tag_elements, locator: '.js-tags', item_locator: '.js-tag-class'

      def image_url
        node.find('.img_url')[:src]
      end

      def tags
        tag_elements.map(&:text)
      end

      def delete
        node.click_on('Delete')
        yield node.driver.browser.switch_to.alert if block_given?
      end

      def delete_and_confirm!
        delete
        node.driver.browser.switch_to.alert.accept
        window.change_to(IndexPage)
      end

      def go_back_to_index!
        node.click_on('Image List')
        window.change_to(IndexPage)
      end
    end
  end
end
