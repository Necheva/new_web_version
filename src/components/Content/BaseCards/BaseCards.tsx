import React from 'react';

import styles from '@src/components/Content/BaseCards/BaseCards.scss';
import classNames from 'classnames';

export type CardProps = {
  title: string;
  image: string;
  percent: string;
  count: number;
  color: string;
} & React.InputHTMLAttributes<HTMLDivElement>;

class BaseCards extends React.Component<CardProps> {
  render() {
    const { title, image, percent, count, color, className } = this.props;
    return (
      <div className={classNames(styles.container, className)}>
        <div className={styles.headers}>
          <img src={image} width={17} height={17} />

          <div style={{ color }}>{percent}%</div>
        </div>
        <div className={styles.count}>{count}</div>
        <div className={styles.title}>{title}</div>
      </div>
    );
  }
}

export default BaseCards;
