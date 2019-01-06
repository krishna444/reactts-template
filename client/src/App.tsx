import { Add } from './components/Add';
import * as React from 'react';
import './App.css';
import './static/styles/bootstrap/bootstrap.min.css'
import './static/styles/my-style.css'


class App extends React.Component {
  public render(): React.ReactNode {
    return (
      <div className="container-fluid">
        <header className="jumbotron header">
          <h1>Welcome to My Tes1t Page</h1>
        </header>
        <body id="center">I am the body
      <Add />
        </body>
        <footer id="footer">I am at footer</footer>
      </div>
    );
  }
}

export default App;
