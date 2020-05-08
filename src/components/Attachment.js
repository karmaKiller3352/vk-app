import React, { Fragment } from 'react';
import { Carousel } from 'react-bootstrap';

function Attachment({ data }) {
  const photos = data.filter(({ type }) => type === 'photo');
  const video = data.filter(({ type }) => type === 'video');
  const audio = data.filter(({ type }) => type === 'audio');

  return (
    <Fragment>
      {photos.length > 0 ? (
        <Carousel>
          {photos.map(({ photo: { sizes, text, id } }) => (
            <Carousel.Item key={id}>
              <img
                className='d-block w-100'
                src={sizes[4].url}
                alt='First slide'
              />
              <Carousel.Caption>
                <p>{text}</p>
              </Carousel.Caption>
            </Carousel.Item>
          ))}
        </Carousel>
      ) : null}
      {video.length > 0 || audio.length > 0 ? (
        <i>Post contains audio or video. Use official VK APP</i>
      ) : null}
    </Fragment>
  );
}

export default Attachment;
