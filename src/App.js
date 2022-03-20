import logo from './logo.svg';
import './App.css';
import Device from './components/Device/Device';
import DeviceDetail from './components/DeviceDetail/DeviceDetail';

function App() {
  return (
    <div className="App">
      <Device name="uphone" price="14000"></Device>
    </div>
  );
}

export default App;
