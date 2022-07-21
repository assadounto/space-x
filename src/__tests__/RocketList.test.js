import React from 'react';
import '@testing-library/jest-dom';
import TestRenderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import store from '../redux/configureStore';
import Rockets from '../components/RocketList';

it('Rocket render correctly', () => {
  const Tree = TestRenderer.create(
    <Provider store={store}>
      <Rockets />
    </Provider>,
  );
  expect(Tree).toMatchSnapshot();
});
