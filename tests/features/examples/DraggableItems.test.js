import React from 'react';
import { shallow } from 'enzyme';
import { DraggableItems } from '../../../src/features/examples';

it('renders node with correct class name', () => {
  const renderedComponent = shallow(<DraggableItems />);
  expect(renderedComponent.find('.examples-draggable').length).toBe(1);
});
