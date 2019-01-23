import React from 'react';
import Room from './room';
import renderer from 'react-test-renderer';

it('renders correctly', () => {
  const tree = renderer
    .create(<Room/>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
