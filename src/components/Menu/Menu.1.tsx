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
        title: 'Dashboard',
        img: require('./columns-solid.svg'),
      },
      {
        title: 'Deals',
        img: require('./user-circle-solid.svg'),
      },
      {
        title: 'Dashboard',
        img: require('./columns-solid.svg'),
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
        {/* <DashBoard />
        <LastLeads />
        <LastClient /> */}
      </div>
    );
  }
}

export default Menu;
