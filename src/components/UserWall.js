import React, { useEffect, useContext, useState } from 'react';
import { Row, Col } from 'react-bootstrap';
import Context from '../context/users/ContextUsers';
import Attachment from '../components/Attachment';
import axios from 'axios';

export default function UserWall({ data, id }) {
  const { requests } = useContext(Context);
  const [owner, setOwner] = useState(null);

  useEffect(() => {
    async function getUserData() {
      const {
        data: { response },
      } = await axios({
        method: 'post',
        url: requests.userInfo(id),
      });
      if (!response) {
        console.log('User with this id does not exist');
        return false;
      }
      console.log(response[0]);
      setOwner(response[0]);
    }
    getUserData();
  }, [id, requests]);
  useEffect(() => {
    if (owner) document.title = `${owner.first_name} ${owner.last_name}'s Wall`;
  });
  if (!data) return false;
  if (data.length === 0)
    return <h2>This user hid his wall from accessing from outside</h2>;

  return data.map((post) => (
    <div className='wall-post' key={post.id}>
      <Row className='post-header'>
        <Col md={2}>
          <img src={owner.photo_100} alt='' className='profile-picture' />
        </Col>
        <Col md={6}>
          <h5>
            {owner.first_name} {owner.last_name}
          </h5>
          <h6 className='date'>
            {new Date(post.date * 1000).toLocaleString()}
          </h6>
        </Col>
      </Row>
      <Row className='post-body'>
        <Col md={12}>
          {post.copy_history ? (
            <>
              {post.copy_history[0].attachments ? (
                <Attachment data={post.copy_history[0].attachments} />
              ) : null}

              <p>
                {post.copy_history[0].text ? post.copy_history[0].text : null}
              </p>
            </>
          ) : null}
        </Col>
        <Col md={12}>
          {post.attachments ? <Attachment data={post.attachments} /> : null}
          <p>{post.text}</p>
        </Col>
      </Row>
    </div>
  ));
}
