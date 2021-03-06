import React from 'react';

import styles from '@src/components/Menu/Menu.scss';
import HederMenu from '@src/components/Menu/HederMenu/HederMenu';
// import DashBoard from '@src/components/Menu/DashBoard/DashBoard';
// import LastLeads from '@src/components/Menu/LastLeads/LastLeads';
// import LastClient from '@src/components/Menu/LastClient/LastClient';
import SubMenu, { SubMenuProps } from '@src/components/Menu/SubMenu/SubMenu';

const menuConfig: SubMenuProps[] = [
  {
    isShowMore: false,
    items: [
      {
        title: 'Dashboard',
        img: require('./columns-solid.svg'),
      },
      {
        title: 'Deals',
        img: require('./user-circle-solid.svg'),
      },
      {
        title: 'Contacts',
        img: require('./star-solid.svg'),
      },
      {
        title: 'Stats',
        img: require('./chart-line-solid.svg'),
      },
      {
        title: 'Settings',
        img: require('./cog-solid.svg'),
      },
    ],
  },

  {
    title: 'Last Leads',
    isShowMore: true,
    items: [
      {
        title: 'Bryce Canyon a stunnin...',
        img: require('./toolbox-solid.svg'),
      },
      {
        title: 'What makes a hotel boy...',
        img: require('./toolbox-solid.svg'),
      },
    ],
  },
  {
    title: 'Last Client',
    isShowMore: true,
    items: [
      {
        title: 'Leila Estrada',
        img: require('./user-alt-solid.svg'),
      },
      {
        title: 'Melvin Valdez',
        img: require('./user-alt-solid.svg'),
      },
    ],
  },
];

class Menu extends React.Component {
  render() {
    return (
      <div className={styles.menuContainer}>
        <HederMenu />
        <>
          {menuConfig.map(c => (
            <SubMenu {...c} />
          ))}
        </>
      </div>
    );
  }
}

export default Menu;
