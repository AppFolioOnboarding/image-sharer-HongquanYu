module PageObjects
  module Images
    class NewPage < PageObjects::Document
      path :new_image
      path :images # from failed create

      form_for :simple_form do
        element :image_title, locator: '.image-title'
        element :image_link, locator: '.image-link'
        element :image_tag_list, locator: '.image-tag-list'
        element :create_image_button, locator: '.new-image-btn'
      end

      def create_image!(url: nil, tags: nil)
        image_title.set 'this is a title'
        image_link.set url if url.present?
        image_tag_list.set tags if tags.present?
        create_image_button.node.click

        window.change_to(ShowPage, self.class)
      end
    end
  end
end
