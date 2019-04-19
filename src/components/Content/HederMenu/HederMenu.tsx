import React from 'react';

import styles from '@src/components/Content/HederMenu/HederMenu.scss';

class HederMenu extends React.Component {
  render() {
    return (
      <div className={styles.hedercontentContainer}>
        <div className={styles.wrapper}>
          <div className={styles.image}>
            <img src={require('./search-solid.svg')} width={17} height={17} />
          </div>
          <input placeholder="Type in to Search..." />
        </div>
        <img src={require('./circle-regular.svg')} width={40} height={40} />
        <div className={styles.wrapper}>
          <div className={styles.image}>
            <img src={require('./bell-solid.svg')} width={17} height={17} />
          </div>
          <div className={styles.roundImage}>
            <img
              src={require('./c065b7814160245ecabda72d0d8dce96.jpg')}
              width={40}
              height={40}
              className={styles.roundImage}
            />
          </div>
          <div className={styles.title}>Micheal Hogan</div>
        </div>
      </div>
    );
  }
}

export default HederMenu;
