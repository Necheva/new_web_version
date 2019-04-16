import React from 'react';

import styles from '@src/components/Content/Content.scss';
import HederMenu from '@src/components/Content/HederMenu/HederMenu';
import StatisticCards from '@src/components/Content/StatisticCards/StatisticCards';
import Graphics from '@src/components/Content/Graphics/Graphics';
import Statistic from '@src/components/Content/Statistic/Statistic';

class Content extends React.Component {
  render() {
    return (
      <div className={styles.contentContainer}>
        <HederMenu />
        <Statistic />
        <StatisticCards />
        <Graphics />
      </div>
    );
  }
}

export default Content;
