module PageObjects
  module Images
    class ImageCard < AePageObjects::Element
      def url
        node.find('img')[:src]
      end

      def tags
        node.all('.js-tag-class').map(&:text)
      end

      def click_tag!(tag_name)
        node.all('.js-tag-class').map do |link|
          link.click if link.text == tag_name
        end
        window.change_to(IndexPage)
      end
    end
  end
end
