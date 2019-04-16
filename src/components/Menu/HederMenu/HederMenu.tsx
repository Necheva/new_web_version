import React from 'react';

import styles from '@src/components/Menu/HederMenu/HederMenu.scss';

class HederMenu extends React.Component {
  render() {
    return (
      <div className={styles.hederContainer}>
        <img src={require('./bars-solid.svg')} width={17} height={17} />
        <div className={styles.title}>Menu</div>
        <img src={require('./times-solid.svg')} width={17} height={17} />
      </div>
    );
  }
}

export default HederMenu;
