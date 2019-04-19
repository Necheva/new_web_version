import React from 'react';
import { observer } from 'mobx-react';

import styles from '@src/components/Content/Graphics/BestManagers/BestManagers.scss';

@observer
class BestManagers extends React.Component {
  render() {
    return (
      <>
        <div className={styles.mainTitle}>Best Managers</div>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Leads</th>
              <th>Won</th>
              <th>To Do</th>
              <th>Sale</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <div className={styles.wrapper}>
                  <img
                    src={require('./c065b7814160245ecabda72d0d8dce96.jpg')}
                    width={30}
                    height={30}
                    className={styles.roundImage}
                  />
                  <div className={styles.title}>Vova</div>
                </div>
              </td>
              <td>33</td>
              <td>5</td>
              <td>24</td>
              <td>$984</td>
            </tr>
            <tr>
              <td>
                <div className={styles.wrapper}>
                  <img
                    src={require('./c065b7814160245ecabda72d0d8dce96.jpg')}
                    width={30}
                    height={30}
                    className={styles.roundImage}
                  />
                  <div className={styles.title}>Simon</div>
                </div>
              </td>
              <td>33</td>
              <td>5</td>
              <td>24</td>
              <td>$984</td>
            </tr>
            <tr>
              <td>
                <div className={styles.wrapper}>
                  <img
                    src={require('./c065b7814160245ecabda72d0d8dce96.jpg')}
                    width={30}
                    height={30}
                    className={styles.roundImage}
                  />
                  <div className={styles.title}>Kirill</div>
                </div>
              </td>
              <td>33</td>
              <td>5</td>
              <td>24</td>
              <td>$984</td>
            </tr>
            <tr>
              <td>
                <div className={styles.wrapper}>
                  <img
                    src={require('./c065b7814160245ecabda72d0d8dce96.jpg')}
                    width={30}
                    height={30}
                    className={styles.roundImage}
                  />
                  <div className={styles.title}>Sasha</div>
                </div>
              </td>
              <td>33</td>
              <td>5</td>
              <td>24</td>
              <td>$984</td>
            </tr>
            <tr>
              <td>
                <div className={styles.wrapper}>
                  <img
                    src={require('./c065b7814160245ecabda72d0d8dce96.jpg')}
                    width={30}
                    height={30}
                    className={styles.roundImage}
                  />
                  <div className={styles.title}>Artem</div>
                </div>
              </td>
              <td>33</td>
              <td>5</td>
              <td>24</td>
              <td>$984</td>
            </tr>
            <tr>
              <td>
                <div className={styles.wrapper}>
                  <img
                    src={require('./c065b7814160245ecabda72d0d8dce96.jpg')}
                    width={30}
                    height={30}
                    className={styles.roundImage}
                  />
                  <div className={styles.title}>Lesha</div>
                </div>
              </td>
              <td>33</td>
              <td>5</td>
              <td>24</td>
              <td>$984</td>
            </tr>
          </tbody>
        </table>
      </>
    );
  }
}

export default BestManagers;
