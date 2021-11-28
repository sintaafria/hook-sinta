import './App.css';
import Redux from './components';
import { Provider } from 'react-redux';
import store from './app/store';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Redux/>
      </Provider>
    </div>
  );
}

export default App;
