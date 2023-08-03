import React, {useEffect} from 'react';

function Instagram() {
  useEffect(() => {
    window.location.href = 'https://www.instagram.com/eduhackfest/';
  }, []);
  return <div></div>;
}

export default Instagram;
