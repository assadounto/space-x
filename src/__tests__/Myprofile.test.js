import React from 'react';
import '@testing-library/jest-dom';
import TestRenderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import store from '../redux/ConfigureStore';
import Myprofile from '../components/Myprofile';

it('Rocket render correctly', () => {
  const Tree = TestRenderer.create(
    <Provider store={store}>
      <Myprofile />
    </Provider>,
  );
  expect(Tree).toMatchSnapshot();
});
