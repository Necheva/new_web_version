import React from 'react';

import styles from '@src/components/Menu/HederMenu/HederMenu.scss';

class HederMenu extends React.Component {
  render() {
    return (
      <div className={styles.menuContainer}>
        <div className={styles.burger}>
          <img src={require('./bars-solid.svg')} width={17} height={17} />
        </div>
        <div className={styles.titleMenu}>Menu</div>
        <div className={styles.cross}>
          <img src={require('./times-solid.svg')} width={17} height={17} />
        </div>
      </div>
    );
  }
}

export default HederMenu;
