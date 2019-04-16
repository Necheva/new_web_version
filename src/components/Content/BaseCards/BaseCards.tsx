import React from 'react';

import styles from '@src/components/Content/BaseCards/BaseCards.scss';

export type CardProps = {
  title: string;
  image: string;
  percent: string;
  count: number;
  color: string;
} & React.InputHTMLAttributes<HTMLDivElement>;

class Cals extends React.Component<CardProps> {
  render() {
    const { title, image, percent, count, color } = this.props;
    return (
      <div className={styles.container}>
        <div className={styles.headers}>
          <div>
            <img src={image} width={17} height={17} />
          </div>
          <div style={{ color }}>{percent}%</div>
        </div>
        <div className={styles.count}>{count}</div>
        <div className={styles.title}>{title}</div>
      </div>
    );
  }
}

export default Cals;
