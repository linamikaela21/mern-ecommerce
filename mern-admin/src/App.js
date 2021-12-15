import { NavBar } from './components/NavBar/NavBar'
import { SideBar } from './components/SideBar/SideBar';
import { RouterWeb } from './RoutesWeb/';

function App() {
  return (
    <div className="App">
      <NavBar />
      <SideBar />
      <RouterWeb />
    </div>
  )
}

export default App;
