
import {Routes,Route} from 'react-router-dom'
import Layout from './pages/Layout';
import PrimarySix from './pages/PrimarySix';
import PrimarySeven from './pages/PrimarySeven';
import PrimaryEight from './pages/PrimaryEight';
import PrimaryNine from './pages/PrimaryNine';
import "./style.css";

function App() {
  return (
  <Routes>
    <Route path="/" element={<Layout />}>
      <Route path="primarysix" element={<PrimarySix />} />
      <Route path="primaryseven" element={<PrimarySeven />} />
      <Route path="primaryeight" element={<PrimaryEight />} />
      <Route path="primarynine" element={<PrimaryNine />} />
    </Route>
  </Routes>
  )
}

export default App;
