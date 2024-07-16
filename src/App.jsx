import clsx from 'clsx';
import './App.css';
import { useDelay } from './hooks';

function App() {
  const [isAnimationActive, startAnimation] = useDelay();

  return (
    <div
      className={clsx('box3_wrapper', { animation_active: isAnimationActive })}
      onMouseEnter={() => startAnimation()}
    >
      <p className="box3_title">Article Time</p>
    </div>
  );
}

export default App;
