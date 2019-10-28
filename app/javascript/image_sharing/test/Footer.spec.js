import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';

import Footer from "../components/Footer";

describe('<Footer />', () => {
  it('should display footer text correctly', () => {
    const wrapper = shallow(<Footer footer="Copyright: AppFolio Inc. Onboarding" />);
    const footer = wrapper.find('.js-footer');

    expect(footer).to.have.length(1);
    expect(footer.text()).to.equal('Copyright: AppFolio Inc. Onboarding');
  })
})
