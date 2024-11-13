import React from 'react';
import coverimage from '../assets/27 (981).png';

const Header = () => {
  return (
      <a href="https://www.unchartedmag.com">
        <img
          alt="Uncharted Mag"
          src={coverimage}
          width="982"
          height="220"
          className="w-full"
        />
      </a>
  );
};

export default Header;
