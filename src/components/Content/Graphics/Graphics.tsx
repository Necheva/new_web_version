import React from 'react';
import { observer } from 'mobx-react';

import Card from '@src/components/common/Card/Card';
import styles from '@src/components/Content/Graphics/Graphics.scss';
import LeadsStat from '@src/components/Content/Graphics/LeadsStat/LeadsStat';
import BestManagers from '@src/components/Content/Graphics/BestManagers/BestManagers';

@observer
class Graphics extends React.Component {
  render() {
    return (
      <div className={styles.container}>
        <div className={styles.frame}>
          <Card className={styles.leadsStat}>
            <LeadsStat />
          </Card>
          <Card className={styles.bestManagers}>
            <BestManagers />
          </Card>
        </div>
      </div>
    );
  }
}

export default Graphics;
