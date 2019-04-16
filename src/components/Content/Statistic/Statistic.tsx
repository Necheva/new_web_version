import React from 'react';
import { observer } from 'mobx-react';

import styles from '@src/components/Content/Statistic/Statistic.scss';

@observer
class Statistic extends React.Component {
  render() {
    return (
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <div className={styles.image}>
            <img src={require('./chart-line-solid.svg')} width={17} height={17} />
          </div>
          <div className={styles.text}>Statistic of Leads and Users</div>
        </div>
        <div className={styles.wrapper}>
          <div className={styles.leftBox}>Today</div>
          <div className={styles.middleBox}>Week</div>
          <div className={styles.middleBox}>Month</div>
          <div className={styles.middleBox}>Quater</div>
          <div className={styles.rightBox}>Year</div>

          <div className={styles.boxData}>
            <div className={styles.insideWrapper}>
              <div className={styles.image}>
                <img src={require('./calendar-day-solid.svg')} width={17} height={17} />
              </div>
              <div className={styles.boxText}>24 Mar - 23 April 2019</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Statistic;
