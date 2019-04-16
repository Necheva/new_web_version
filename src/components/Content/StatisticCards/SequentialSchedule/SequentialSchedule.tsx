import React from 'react';
import { observer } from 'mobx-react';

import styles from '@src/components/Content/StatisticCards/SequentialSchedule/SequentialSchedule.scss';

@observer
class SequentialSchedule extends React.Component {
  render() {
    return (
      <div className={styles.wrapper}>
        <div className={styles.container}>
          <div className={styles.count}>24</div>
          <div className={styles.title}>Incoming</div>
          <div className={styles.title}>Leads</div>
        </div>
        <div className={styles.arrow}>
          <img src={require('./arrow-right-solid.svg')} width={17} height={17} />
        </div>
        <div className={styles.container}>
          <div className={styles.headers}>Initial Contact</div>
          <div className={styles.separatorInitial} />
          <div className={styles.text}>23 Leads $1250</div>
          <div className={styles.text}>97%</div>
        </div>
        <div className={styles.arrow}>
          <img src={require('./arrow-right-solid.svg')} width={17} height={17} />
        </div>
        <div className={styles.container}>
          <div className={styles.headers}>Offer Made</div>
          <div className={styles.separatorOffer} />
          <div className={styles.text}>22 Leads $1250</div>
          <div className={styles.text}>68%</div>
        </div>
        <div className={styles.arrow}>
          <img src={require('./arrow-right-solid.svg')} width={17} height={17} />
        </div>
        <div className={styles.container}>
          <div className={styles.headers}>Negotiation</div>
          <div className={styles.separatorNegotiation} />
          <div className={styles.text}>21 Leads $1250</div>
          <div className={styles.text}>57%</div>
        </div>
        <div className={styles.arrow}>
          <img src={require('./arrow-right-solid.svg')} width={17} height={17} />
        </div>
        <div className={styles.container}>
          <div className={styles.headers}>Contract</div>
          <div className={styles.separatorContract} />
          <div className={styles.text}>15 Leads $1250</div>
          <div className={styles.text}>48%</div>
        </div>
        <div className={styles.arrow}>
          <img src={require('./arrow-right-solid.svg')} width={17} height={17} />
        </div>
        <div className={styles.container}>
          <div className={styles.headers}>Won Leads</div>
          <div className={styles.separatorWon} />
          <div className={styles.text}>12 Leads $1250</div>
          <div className={styles.text}>36%</div>
        </div>
      </div>
    );
  }
}

export default SequentialSchedule;
