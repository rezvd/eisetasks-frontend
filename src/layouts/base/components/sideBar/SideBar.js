import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom'
import { I18n } from "react-redux-i18n"

import './style.css';

export default class SideBar extends React.Component {
  render() {
    const { className } = this.props;

    return (
      <aside className={`side-bar${className ? ` ${className}` : ''}`}>
          <ul className='side-bar__menu'>
              <li className='menu__item'>
                  <NavLink
                      exact to={'/'}
                      className={"menu__link Inbox-item"}
                      activeClassName={'menu__link Inbox-item_active'}>
                      {I18n.t('sidebar.todo')}
                  </NavLink>
              </li>
              <li className='menu__item'>
                  <NavLink
                      to={'/done'}
                      className={"menu__link done-item"}
                      activeClassName={'menu__link done-item_active'}>
                      Done
                  </NavLink>
              </li>
          </ul>
      </aside>
    );
  }
}

SideBar.propTypes = {
  className: PropTypes.string
};

SideBar.defaultProps = {
  className: ''
};
