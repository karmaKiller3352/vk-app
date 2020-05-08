import React, { Fragment } from 'react';
import { Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
function MutualFriends({ friends }) {
  return (
    <Fragment>
      {friends.map(({ first_name, last_name, photo_100, id }) => (
        <Row key={id}>
          <Col md={3}>
            <Link to={`/user/${id}`}>
              <img src={photo_100} alt={first_name} />
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

export default MutualFriends;
