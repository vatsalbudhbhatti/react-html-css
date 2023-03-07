import Card from './components/card';
import times from 'lodash/times';
import './styles.css';

function App() {
  return (
    <div className="container">
      <div>
        {times(6).map((_, idx) => (
          <Card key={idx} />
        ))}
      </div>
    </div>
  );
}

export default App;
