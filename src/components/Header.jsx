import React from 'react';
import PropTypes from 'prop-types';
import '../App.css';

function Header(props) {
  const { title } = props;
  return (
    <div className="header-wrapper">
      <div className="header">{title}</div>
      <div className="header-underline" />
    </div>
  );
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Header;
