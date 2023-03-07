import './App.css';
import Categories from './Components/Categories/Categories';
import Headlines from './Components/Headlines/Headlines';
import Navbar from './Components/Navbar/Navbar';
import Sidebar from './Components/Sidebar/Sidebar';
import data from "./data.json"
function App() {
  return (
    <div className="app">
      <div className="container">
        <Sidebar />
        <main className='main__container'>
          <Navbar />
          <Categories />
          <Headlines data={data} />
        </main>
      </div>
    </div>
  );
}

export default App;
