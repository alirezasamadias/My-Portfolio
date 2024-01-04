import { useState } from 'react';
// Css
import './Site-Loader.css';

function SiteLoader() {
  const [load, setLoad] = useState();

  setTimeout(() => {
    setLoad(true);
  }, 600);

  return (
    <div className={`site-loader ${(load ? 'hide' : '')}`}>
      <div className="loader">
        <span>loading...</span>
      </div>
    </div>
  );
}

export default SiteLoader;