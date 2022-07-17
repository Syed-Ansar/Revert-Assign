import './App.css';
import Home from './components/Home';

function App() {
  return (
    <div className="w-screen">
      <div className="flex justify-center mt-10 font-bold text-xl">
        <h1>To-Do List</h1>
      </div>
      <Home />
    </div>
  );
}

export default App;
