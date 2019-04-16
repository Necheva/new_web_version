import React from 'react';

import styles from '@src/components/Menu/LastLeads/LastLeads.scss';

class LastLeads extends React.Component {
  render() {
    return (
      <div className={styles.lastleadsContainer}>
        <div className={styles.text}>Last Leads</div>
        <div className={styles.lastleadsWrapper}>
          <img src={require('./toolbox-solid.svg')} width={17} height={17} />
          <div className={styles.title}>Bryce Canyon a stunnin...</div>
        </div>

        <div className={styles.lastleadsWrapper}>
          <img src={require('./toolbox-solid.svg')} width={17} height={17} />
          <div className={styles.title}>What makes a hotel boy...</div>
        </div>

        <div className={styles.lastleadsWrapper}>
          <div className={styles.button}>Show More</div>
        </div>
      </div>
    );
  }
}

export default LastLeads;
