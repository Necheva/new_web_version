import React from 'react';

import styles from '@src/components/App/App.scss';
import Menu from '@src/components/Menu/Menu';
import Content from '@src/components/Content/Content';

class App extends React.Component {
  public render() {
    return (
      <div className={styles.scrollDown}>
        <div className={styles.wrapper}>
          <Menu />
          <Content />
        </div>
      </div>
    );
  }
}

export default App;
