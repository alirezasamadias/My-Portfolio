import { useState } from 'react';
// Css
import './Loader.css';

function Loader() {
  const [load, setLoad] = useState();

  setTimeout(() => {
    setLoad(true);
  }, 600);

  return (
    <div className={`Loader ${(load ? 'hide' : '')}`}>
      <div className='loader'>
        <span>loading...</span>
      </div>
    </div>
  );
}

export default Loader;