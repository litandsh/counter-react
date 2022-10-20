import { useState } from 'react';
import './App.css';
import Button from './components/Button';
import Counter from './components/Counter';

const texts = ['click 1', 'click 2', 'click 3', 'click 4'];

function App() {
  const [count, setCount] = useState(0);

  const incrementCount = () => {
    setCount(count + 1);
  };

  return (
    <div className="App">
      
      <Counter count={count} />

      {texts.map((text, index) => {
        return <Button onClick={incrementCount} text={text} key={index} />;
      })}

    </div>
  );
}

export default App;
