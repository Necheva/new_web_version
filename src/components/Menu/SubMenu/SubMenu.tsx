import React from 'react';

import styles from '@src/components/Menu/SubMenu/SubMenu.scss';

type MenuItem = {
  title: string;
  img: string;
};

export type SubMenuProps = {
  title?: string;
  isShowMore?: boolean;
  items: MenuItem[];
} & React.InputHTMLAttributes<HTMLDivElement>;

class SubMenu extends React.Component<SubMenuProps> {
  render() {
    const { items } = this.props;

    return (
      <div className={styles.dashboardContainer}>
        <div className={styles.text}>{this.props.title}</div>
        {items.map(i => this.renderProgress(i))}
        {this.props.isShowMore && (
          <div className={styles.lastclientWrapper}>
            <div className={styles.button}>Show More</div>
          </div>
        )}
      </div>
    );
  }

  renderProgress = (p: MenuItem) => {
    return (
      <div className={styles.dashWrapper}>
        <img src={p.img} width={17} height={17} />
        <div className={styles.title}>{p.title}</div>
      </div>
    );
  };
}

export default SubMenu;
