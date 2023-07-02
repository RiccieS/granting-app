import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import GradingPageComponent from './Pages/GradingPageComponent';

/**
 * Hlavní komponenta aplikace.
 * @returns {JSX.Element} - Hlavní komponenta aplikace obsahující GradingPageComponent.
 */
export default function App() {
  return (
    <div>
      <GradingPageComponent />
    </div>
  );
}
