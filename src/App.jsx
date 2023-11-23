import './App.css';
import { useMediaQuery } from 'react-responsive';
import Mobile from './Components/Mobile/Mobile.jsx';
import Desktop from './Components/Desktop/Desktop.jsx';

function App() {
  const isDesktop = useMediaQuery({
    query: '(min-width: 1439px)',
  });

  return <>{isDesktop ? <Desktop /> : <Mobile />}</>;
}

export default App;
