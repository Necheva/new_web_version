import React from 'react';
import { observer } from 'mobx-react';

import Card from '@src/components/common/Card/Card';
import styles from '@src/components/Content/StatisticCards/StatisticCards.scss';
import TrafficSources from '@src/components/Content/StatisticCards/TrafficSources/TrafficSources';
import SequentialSchedule from '@src/components/Content/StatisticCards/SequentialSchedule/SequentialSchedule';
import BaseCards from '@src/components/Content/BaseCards/BaseCards';

@observer
class StatisticCards extends React.Component {
  render() {
    return (
      <div className={styles.container}>
        <div className={styles.leads}>
          <BaseCards
            title={'leads'}
            percent={'-5'}
            count={64}
            image={require('./phone-volume-solid.svg')}
            color={'#ff0000'}
          />
        </div>
        <div className={styles.newClient}>
          <BaseCards
            title={'New Clients'}
            percent={'+12'}
            count={32}
            image={require('./user-alt-solid.svg')}
            color={'#54b948'}
          />
        </div>
        <div className={styles.newCompanies}>
          <BaseCards
            title={'New Companies'}
            percent={'+5'}
            count={22}
            image={require('./building-regular.svg')}
            color={'#54b948'}
          />
        </div>
        <div className={styles.task}>
          <BaseCards
            title={'Task'}
            percent={'+17'}
            count={78}
            image={require('./history-solid.svg')}
            color={'#54b948'}
          />
        </div>
        <Card className={styles.trafficSources}>
          <TrafficSources />
        </Card>
        <div className={styles.completedToDo}>
          <BaseCards
            title={'Completed To-Do'}
            percent={'-25'}
            count={21}
            image={require('./history-solid.svg')}
            color={'#ff0000'}
          />
        </div>
        <div className={styles.leadsNoToDo}>
          <BaseCards
            title={'Leads No To-Do'}
            percent={'+12'}
            count={11}
            image={require('./history-solid.svg')}
            color={'#54b948'}
          />
        </div>
        <div className={styles.email}>
          <BaseCards
            title={'Email'}
            percent={'+11'}
            count={87}
            image={require('./envelope-regular.svg')}
            color={'#54b948'}
          />
        </div>
        <div className={styles.cals}>
          <BaseCards
            title={'Cals'}
            percent={'+15'}
            count={64}
            image={require('./phone-volume-solid.svg')}
            color={'#54b948'}
          />
        </div>
        <Card className={styles.sequentialSchedule}>
          <SequentialSchedule />
        </Card>
      </div>
    );
  }
}

export default StatisticCards;
