import React from 'react';
import renderer from 'react-test-renderer';
import '../components/MissionList';
// import '../components/Myprofile';
// import NavLink from 'react-router-dom'

test('matches snapshot', () => {
  const tree = renderer.create(
    <tr>
      <th>Mission</th>
      <th>Description</th>
      <th>Status</th>
    </tr>,
  ).toJSON();
  expect(tree).toMatchSnapshot();
});

// test('matches snapshot', () => {
//   const tree = renderer.create(
//     <div className="Info">
//     Ooops! You have no book missions.
//     Click
//     {' '}
//     <NavLink to="/misions">here</NavLink>
//     {' '}
//     to book.
//   </div>
//   )
// });

// describe('Missions component test', () => {
//   test('builds the snapshot of the Missions component', () => {
//     const tree = renderer.create(<Missions />);
//     expect(tree.toJSON()).toMatchSnapshot();
//   });
// });
