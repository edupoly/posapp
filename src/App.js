import logo from './logo.svg';
import './App.css';
import Header from './Components/Header';
import { Outlet } from 'react-router-dom';
import { store } from './app/store'
import { Provider } from 'react-redux'
function App() {
  return (
    <Provider store={store}>
      <div>
        <Header></Header>
        <Outlet></Outlet>
      </div>
    </Provider>
  );
}

export default App;
