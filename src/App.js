import './App.css';
import Categories from './Components/Categories/Categories';
import Navbar from './Components/Navbar/Navbar';
import Sidebar from './Components/Sidebar/Sidebar';
function App() {
  return (
    <div className="app">
      <div className="container">
        <Sidebar />
        <main className='main__container'>
          <Navbar />
          <Categories />
        </main>
      </div>
    </div>
  );
}

export default App;
