import React, { Fragment, useContext } from 'react';
import { Row, Col } from 'react-bootstrap';
import Context from '../context/users/ContextUsers';
import { Link } from 'react-router-dom';
import sortBy from 'lodash/sortBy';
import uniqBy from 'lodash/uniqBy';

export default function FriendsList() {
  const { state } = useContext(Context);

  const selectedUsers = state.filter((user) => user.showFriends);

  const friends = [...selectedUsers.map((user) => user.friends).flat()];

  friends.forEach((currentFriend) => {
    let match = 0;
    friends.forEach((friend) => {
      if (friend.id === Number(currentFriend.id)) {
        match += 1;
      }
      currentFriend.match = `mutual-${match}`;
    });
  });

  const sortedFriends = sortBy(uniqBy(friends, 'id'), [
    'first_name',
    'last_name',
  ]);

  return (
    <Fragment>
      <Row className='mb-4'>
        <h2>Friend list</h2>
      </Row>

      {sortedFriends.map(({ first_name, last_name, photo_50, id, match }) => (
        <Row key={id} className={match}>
          <Col md={3}>
            <Link to={`/user/${id}`}>
              <img src={photo_50} alt={first_name} />
            </Link>
          </Col>
          <Col md={8}>
            <Link to={`/user/${id}`}>
              {first_name} {last_name}
            </Link>
          </Col>
        </Row>
      ))}
    </Fragment>
  );
}
