import React from 'react';
import { observer } from 'mobx-react';
import { PieChart, Pie, Cell, Tooltip } from 'recharts';

import styles from '@src/components/Content/StatisticCards/TrafficSources/TrafficSources.scss';

const colors = {
  Mail: '#00cc00',
  Phone: '#330099',
  Site: '#ff0000',
  API: '#ff6600',
};

@observer
class TrafficSources extends React.Component {
  data = [
    {
      name: 'Mail',
      value: 85.7,
    },
    {
      name: 'Phone',
      value: 9,
    },
    {
      name: 'Site',
      value: 14.9,
    },
    {
      name: 'API',
      value: 11.9,
    },
  ];
  COLORS = [colors.Mail, colors.Phone, colors.Site, colors.API];

  RADIAN = Math.PI / 180;
  render() {
    return (
      <div className={styles.container}>
        <div className={styles.headers}>
          <div className={styles.textColor}>Traffic Sources</div>
          <div>
            <img src={require('./Capture.JPG')} width={25} height={15} />
          </div>
        </div>
        <div className={styles.count}>
          <PieChart width={460} height={300}>
            <Pie data={this.data} cx={230} cy={150} innerRadius={75} outerRadius={90} fill="#8884d8" paddingAngle={0}>
              {this.data.map((entry, index) => (
                <Cell key={'raceGroupsChart' + index} fill={this.COLORS[index % this.COLORS.length]} />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        </div>
        <div className={styles.wrapperColumn}>
          <div className={styles.wrapperRow}>
            <div className={styles.textRow}>
              <div className={styles.dot} style={{ backgroundColor: colors.Mail }} />
              <div className={styles.textColor}> {`${'Mail'}`}</div>
              <div className={styles.textColor}> {`${'85.7%'}`}</div>
            </div>
            <div className={styles.textRow}>
              <div className={styles.dot} style={{ backgroundColor: colors.Site }} />
              <div className={styles.textColor}> {`${'Site'}`}</div>
              <div className={styles.textColor}> {`${'14.9%'}`}</div>
            </div>
          </div>
          <div className={styles.wrapperRow}>
            <div className={styles.textRow}>
              <div className={styles.dot} style={{ backgroundColor: colors.Phone }} />
              <div className={styles.textColor}>{`${'Phone'}`}</div>
              <div className={styles.textColor}>{`${'9%'}`}</div>
            </div>
            <div className={styles.textRow}>
              <div className={styles.dot} style={{ backgroundColor: colors.API }} />
              <div className={styles.textColor}>{`${'API'}`}</div>
              <div className={styles.textColor}>{`${'11.9%'}`}</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default TrafficSources;
