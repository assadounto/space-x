import React from 'react';
import '@testing-library/jest-dom';
import TestRenderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import store from '../redux/ConfigureStore';
import Missionlist from '../components/Missionlist';

it('Rocket render correctly', () => {
  const Tree = TestRenderer.create(
    <Provider store={store}>
      <Missionlist />
    </Provider>,
  );
  expect(Tree).toMatchSnapshot();
});
