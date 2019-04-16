import React from 'react';

import styles from '@src/components/Menu/Menu.scss';
import HederMenu from '@src/components/Menu/HederMenu/HederMenu';
import DashBoard from '@src/components/Menu/DashBoard/DashBoard';
import LastLeads from '@src/components/Menu/LastLeads/LastLeads';
import LastClient from '@src/components/Menu/LastClient/LastClient';

class Menu extends React.Component {
  render() {
    return (
      <div className={styles.menuContainer}>
        <HederMenu />
        <DashBoard />
        <LastLeads />
        <LastClient />
      </div>
    );
  }
}

export default Menu;
