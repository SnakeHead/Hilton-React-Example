import React from 'react';
import Rooms from './rooms';
import renderer from 'react-test-renderer';

it('renders correctly', () => {
  const tree = renderer
    .create(<Rooms/>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
