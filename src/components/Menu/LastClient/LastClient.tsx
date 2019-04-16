import React from 'react';

import styles from '@src/components/Menu/LastClient/LastClient.scss';

class LastClient extends React.Component {
  render() {
    return (
      <div className={styles.lastclientContainer}>
        <div className={styles.text}>Last Client</div>
        <div className={styles.lastclientWrapper}>
          <img src={require('./user-alt-solid.svg')} width={17} height={17} />
          <div className={styles.title}>Leila Estrada</div>
        </div>

        <div className={styles.lastclientWrapper}>
          <img src={require('./user-alt-solid.svg')} width={17} height={17} />
          <div className={styles.title}>Melvin Valdez</div>
        </div>

        <div className={styles.lastclientWrapper}>
          <div className={styles.button}>Show More</div>
        </div>
      </div>
    );
  }
}

export default LastClient;
