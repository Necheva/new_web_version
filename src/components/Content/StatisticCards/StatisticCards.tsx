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
        <BaseCards
          className={styles.leads}
          title={'leads'}
          percent={'-5'}
          count={64}
          image={require('./phone-volume-solid.svg')}
          color={'#ff0000'}
        />

        <BaseCards
          className={styles.newClient}
          title={'New Clients'}
          percent={'+12'}
          count={32}
          image={require('./user-alt-solid.svg')}
          color={'#54b948'}
        />

        <BaseCards
          className={styles.newCompanies}
          title={'New Companies'}
          percent={'+5'}
          count={22}
          image={require('./building-regular.svg')}
          color={'#54b948'}
        />

        <BaseCards
          className={styles.task}
          title={'Task'}
          percent={'+17'}
          count={78}
          image={require('./history-solid.svg')}
          color={'#54b948'}
        />

        <Card className={styles.trafficSources}>
          <TrafficSources />
        </Card>

        <BaseCards
          className={styles.completedToDo}
          title={'Completed To-Do'}
          percent={'-25'}
          count={21}
          image={require('./history-solid.svg')}
          color={'#ff0000'}
        />

        <BaseCards
          className={styles.leadsNoToDo}
          title={'Leads No To-Do'}
          percent={'+12'}
          count={11}
          image={require('./history-solid.svg')}
          color={'#54b948'}
        />

        <BaseCards
          className={styles.email}
          title={'Email'}
          percent={'+11'}
          count={87}
          image={require('./envelope-regular.svg')}
          color={'#54b948'}
        />

        <BaseCards
          className={styles.cals}
          title={'Cals'}
          percent={'+15'}
          count={64}
          image={require('./phone-volume-solid.svg')}
          color={'#54b948'}
        />

        <Card className={styles.sequentialSchedule}>
          <SequentialSchedule />
        </Card>
      </div>
    );
  }
}

export default StatisticCards;
