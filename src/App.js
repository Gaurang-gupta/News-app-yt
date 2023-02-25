import './App.css';
import Sidebar from './Components/Sidebar/Sidebar';
function App() {
  return (
    <div className="app">
      <div className="container">
        <Sidebar />
        <main className='main__container'>
          <h1>Hello</h1>
        </main>
      </div>
    </div>
  );
}

export default App;
