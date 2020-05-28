import React, { Fragment, useState, useEffect, useContext } from 'react';
import { Row, Button, Col, Form } from 'react-bootstrap';

import UsersList from '../components/UsersList';
import FriendsList from '../components/FriendsList';
import fetchJsonp from 'fetch-jsonp';

import Context from '../context/users/ContextUsers';

export default function Home() {
  const { state, dispatch, requests } = useContext(Context);
  const [userId, setId] = useState('');
  const [requestId, setRequestId] = useState('');
  //id390821853

  const handleChange = ({ target: { value } }) => {
    setId(value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setRequestId(userId);

    setId('');
  };

  useEffect(() => {
    async function getUserData(requestId, state) {
      const { json } = await fetchJsonp(requests.userInfo(requestId));
      const { response } = await json();

      if (!response) {
        console.log('User with this id does not exist');
        return false;
      }
      if (!response[0]) return false;
      const newUser = response[0];
      const existedId = state.every((user) => user.id !== newUser.id);
      if (existedId) {
        const friendsRequest = await fetchJsonp(
          requests.getUserFriends(newUser.id)
        );

        const pr = await friendsRequest.json();
        const friendList = pr.response ? pr.response.items : [];

        const friends =
          friendList.filter(({ deactivated }) => !deactivated) || [];
        const friendsCount = friends.length;
        const userData = {
          ...newUser,
          friendsCount,
          friends,
          showFriends: false,
        };

        dispatch({
          type: 'ADD_USER',
          payload: userData,
        });
      } else {
        console.log('This user is already on the list');
      }
    }
    getUserData(requestId, state);

    return () => setRequestId('');
  }, [state, dispatch, requests, requestId]);
  useEffect(() => {
    document.title = 'React VK App';
  });
  useEffect(() => {
    localStorage.setItem('users', JSON.stringify(state));
  }, [state]);
  return (
    <Fragment>
      <Form onSubmit={handleSubmit}>
        <Row>
          <Col md={9}>
            <Form.Group>
              <Form.Control
                required
                size='lg'
                type='text'
                placeholder='user id'
                onChange={handleChange}
                value={userId}
              />
              <Form.Text className='text-muted'>Enter user id</Form.Text>
            </Form.Group>
          </Col>
          <Col md={3}>
            <Form.Group align='right'>
              <Button
                className='w-100'
                size='lg'
                variant='primary'
                type='submit'
              >
                Submit
              </Button>
            </Form.Group>
          </Col>
        </Row>
      </Form>

      <Row>
        <Col>
          <hr />
        </Col>
      </Row>
      <Row className='userlist'>
        <Col md={9}>
          <UsersList />
        </Col>
        <Col md={3} className='all-friend-list'>
          <FriendsList />
        </Col>
      </Row>
    </Fragment>
  );
}
