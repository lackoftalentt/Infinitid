import { Route, Routes } from 'react-router';
import { Home } from './pages/Home';
import { SearchPage } from './pages/SearchPage';

function App() {
   return (
      <>
         <Routes>
            <Route path="/" element={<Home />} />
         </Routes>
      </>
   );
}

export default App;
