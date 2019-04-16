import React from 'react';
import { observer } from 'mobx-react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';

import styles from '@src/components/Content/Graphics/LeadsStat/LeadsStat.scss';

const colors = {
  'Won Leads': '#DA120B',
  'Lost Leads': '#25BF03',
};

@observer
class LeadsStat extends React.Component {
  data = [
    { name: '03.02', 'Won Leads': 35, 'Lost Leads': 14 },
    { name: '05.02', 'Won Leads': 40, 'Lost Leads': 33 },
    { name: '10.02', 'Won Leads': 50, 'Lost Leads': 39 },
    { name: '15.02', 'Won Leads': 27, 'Lost Leads': 11 },
    { name: '20.02', 'Won Leads': 68, 'Lost Leads': 44 },
    { name: '25.02', 'Won Leads': 23, 'Lost Leads': 12 },
  ];
  render() {
    return (
      <div className={styles.container}>
        <div className={styles.headers}>
          <div className={styles.textColor}>Leads Stat</div>
          <div>
            <img src={require('./Capture.JPG')} width={25} height={15} />
          </div>
        </div>
        <div className={styles.separator} />
        <div className={styles.wrapperRow}>
          <div className={styles.textRow}>
            <div className={styles.dot} style={{ backgroundColor: colors['Won Leads'] }} />
            <div className={styles.textColor}> {`${'Won Leads'}`}</div>
          </div>
          <div className={styles.textRow}>
            <div className={styles.dot} style={{ backgroundColor: colors['Lost Leads'] }} />
            <div className={styles.textColor}> {`${'Lost Leads'}`}</div>
          </div>
        </div>
        <div className={styles.count}>
          <AreaChart width={700} height={300} data={this.data} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
            <defs>
              <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#DA120B" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#DA120B" stopOpacity={0} />
              </linearGradient>
              <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#25BF03" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#25BF03" stopOpacity={0} />
              </linearGradient>
            </defs>
            <XAxis dataKey="name" />
            <YAxis />
            <CartesianGrid horizontal={true} vertical={false} />
            <Tooltip />
            <Area type="monotone" dataKey="Won Leads" stroke="#DA120B" fillOpacity={1} fill="url(#colorUv)" />
            <Area type="monotone" dataKey="Lost Leads" stroke="#25BF03" fillOpacity={1} fill="url(#colorPv)" />
          </AreaChart>
        </div>
      </div>
    );
  }
}

export default LeadsStat;
