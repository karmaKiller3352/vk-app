import React, { Fragment, useEffect, useContext, useState } from 'react';
import { Row, Col } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import fetchJsonp from 'fetch-jsonp';
import Context from '../context/users/ContextUsers';
import UserWall from '../components/UserWall';
import MutualFriends from '../components/MutualFriends';

export default function User() {
  const { state, requests } = useContext(Context);
  const [wall, setWall] = useState(null);
  let { id } = useParams();

  useEffect(() => {
    const getUserWall = async (userId) => {
      if (!userId) return false;
      const { json } = await fetchJsonp(requests.userWall(userId));
      console.log(await json());
      const { response, error } = await json();

      const data = null;
      if (error) {
        console.log(error.error_msg);
        setWall([]);
      } else {
        setWall([...response.items]);
      }
    };
    getUserWall(id);
  }, [id, requests]);

  const mutualFriends = state.filter(({ friends }) =>
    friends.find((friend) => friend.id === Number(id))
  );

  if (!id) return <h2>This user doesnot exist</h2>;

  return (
    <Fragment>
      <Row>
        <Col md={9}>
          <h2>User wall</h2>
          <hr />
        </Col>
        <Col md={3}>
          <h2>Friends with</h2>
          <hr />
        </Col>
      </Row>
      <Row className='userlist'>
        <Col md={9} className='wall'>
          <UserWall data={wall} id={id} />
        </Col>
        <Col md={3} className='friends-list'>
          <MutualFriends friends={mutualFriends} />
        </Col>
      </Row>
    </Fragment>
  );
}
