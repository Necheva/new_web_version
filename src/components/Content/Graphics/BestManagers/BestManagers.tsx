import React from 'react';
import { observer } from 'mobx-react';

import styles from '@src/components/Content/Graphics/BestManagers/BestManagers.scss';

@observer
class BestManagers extends React.Component {
  render() {
    return (
      <div className={styles.container}>
        <div className={styles.frame}>
          <div className={styles.userName}>
            <div className={styles.text}>Best Managers</div>
            <div className={styles.separator} />
            <div className={styles.text}>Name</div>
            <div className={styles.separator} />
            <div className={styles.text}>Gary Bryan</div>
            <div className={styles.separator} />
            <div className={styles.text}>Milton Day</div>
            <div className={styles.separator} />
            <div className={styles.text}>Nicholas Stokes</div>
            <div className={styles.separator} />
            <div className={styles.text}>Ada Thompson</div>
          </div>
          <div className={styles.data}>
            <div className={styles.wrapper}>
              <div className={styles.text} />
              <div className={styles.text} />
              <div className={styles.text} />
              <div className={styles.text} />
            </div>
            <div className={styles.wrapper}>
              <div className={styles.text}>Leads</div>
              <div className={styles.text}>Won</div>
              <div className={styles.text}>To Do</div>
              <div className={styles.text}>Sale</div>
            </div>
            <div className={styles.wrapper}>
              <div className={styles.textPadding}>33</div>
              <div className={styles.textPadding}>5</div>
              <div className={styles.textPadding}>24</div>
              <div className={styles.textPadding}>$ 984</div>
            </div>
            <div className={styles.wrapper}>
              <div className={styles.textPadding}>33</div>
              <div className={styles.textPadding}>5</div>
              <div className={styles.textPadding}>24</div>
              <div className={styles.textPadding}>$ 984</div>
            </div>
            <div className={styles.wrapper}>
              <div className={styles.textPadding}>33</div>
              <div className={styles.textPadding}>5</div>
              <div className={styles.textPadding}>24</div>
              <div className={styles.textPadding}>$ 984</div>
            </div>
            <div className={styles.wrapper}>
              <div className={styles.textPadding}>33</div>
              <div className={styles.textPadding}>5</div>
              <div className={styles.textPadding}>24</div>
              <div className={styles.textPadding}>$ 984</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default BestManagers;
