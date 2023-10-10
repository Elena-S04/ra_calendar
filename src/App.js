import CalendarFunc from './components/CalendarFunc';
import './main.css';

function App() {
  const now = new Date();

  return (
    <CalendarFunc date={now} />
  );
}

export default App;