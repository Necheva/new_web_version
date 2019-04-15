import React from 'react';
import { Route, Redirect, Switch } from 'react-router';
import { Link } from 'react-router-dom';

import Card from '@src/components/common/Card/Card';
import Button from '@src/components/common/Button/Button';

const page1 = () => (
  <div>page1</div>
)
const page2 = () => (
  <Card title="Page 2">
    <Button text="Button" />
  </Card>
)

class App extends React.Component {
  public render() {
    return (
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/page1/">Page 1</Link>
            </li>
            <li>
              <Link to="/page2/">Page 2</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route path="/page1/" component={page1} />
          <Route path="/page2/" component={page2} />
          <Route path="/">
            <Redirect to="/page1/" />
          </Route>
        </Switch>
      </div>
    )
  }
}

export default App;
