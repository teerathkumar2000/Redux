import React from 'react';
import './App.css';
import Basic from './Config/Router/Router'
import { Provider } from 'react-redux'
import store from './Componets'


class App extends React.Component {
  render() {
    return (
      <div>
        <Provider store={store}>

          <h1>Redux</h1>
          <Basic />

        </Provider>
      </div>
    )
  }
}
export default App;
