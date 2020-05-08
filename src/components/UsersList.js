import React, { Fragment, useContext } from 'react';
import { Row, Button, Col, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Context from '../context/users/ContextUsers';

const gender = ['HIDDEN', 'FEMALE', 'MALE'];

export default function UsersList() {
  const { state, dispatch } = useContext(Context);

  if (state.length === 0) return false;

  return (
    <Fragment>
      <Row className='mb-4'>
        <Col>
          <h2>Added Users</h2>
        </Col>
      </Row>

      {state.map((user) => (
        <Row
          className={user.showFriends ? 'choosed user' : 'user'}
          key={user.id}
        >
          <Col md={2}>
            <img src={user.photo_100} alt={user.first_name} />
          </Col>
          <Col md={2}>
            <h3>
              {user.first_name} {user.last_name}
            </h3>
          </Col>
          <Col md={3}>
            <p>
              <b>Date of Birth</b>: {user.bdate}
            </p>
            <p>
              <b>Gender</b>: {gender[user.sex]}
            </p>
            <p>
              <b>Friends count</b>: {user.friendsCount || 'Information closed'}
            </p>
            <p>
              <b>Profile</b>: {user.is_closed ? 'Closed' : 'Opened'}
            </p>
          </Col>
          <Col md={2}>
            <Form.Group>
              <Link className='btn btn-primary' to={`/user/${user.id}`}>
                Перейти
              </Link>
            </Form.Group>
            <Form.Group>
              <Button
                type='button'
                onClick={() => {
                  dispatch({
                    type: 'REMOVE_USER',
                    payload: user.id,
                  });
                }}
              >
                Удалить
              </Button>
            </Form.Group>
          </Col>
          <Col md={3}>
            <Form.Group>
              <Button
                className='btn btn-primary'
                onClick={() => {
                  dispatch({
                    type: 'CHECK_USER',
                    payload: user.id,
                  });
                }}
              >
                Показать друзей
              </Button>
            </Form.Group>
          </Col>
        </Row>
      ))}
    </Fragment>
  );
}
