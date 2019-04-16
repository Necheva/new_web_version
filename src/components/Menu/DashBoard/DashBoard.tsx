import React from 'react';

import styles from '@src/components/Menu/DashBoard/DashBoard.scss';

class DashBoard extends React.Component {
  render() {
    return (
      <div className={styles.dashboardContainer}>
        <div className={styles.dashWrapper}>
          <img src={require('./columns-solid.svg')} width={17} height={17} />
          <div className={styles.title}>Dashboard</div>
        </div>

        <div className={styles.dashWrapper}>
          <img src={require('./user-circle-solid.svg')} width={17} height={17} />
          <div className={styles.title}>Deals</div>
        </div>

        <div className={styles.dashWrapper}>
          <img src={require('./star-solid.svg')} width={17} height={17} />
          <div className={styles.title}>Contact</div>
        </div>

        <div className={styles.dashWrapper}>
          <img src={require('./chart-line-solid.svg')} width={17} height={17} />
          <div className={styles.title}>Stats</div>
        </div>

        <div className={styles.dashWrapper}>
          <img src={require('./cog-solid.svg')} width={17} height={17} />
          <div className={styles.title}>Settings</div>
        </div>
      </div>
    );
  }
}

export default DashBoard;
