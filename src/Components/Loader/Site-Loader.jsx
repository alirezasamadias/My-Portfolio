import { useState } from 'react';
// Css
import './Loader.css';

function SiteLoader() {
  const [load, setLoad] = useState();

  document.onreadystatechange = ()=>{
    if (document.readyState === "complete") {
      setLoad(true);
    }
  };

  return (
    <div className={`Loader ${(load ? 'hide' : '')}`}>
      <div className="loader">
        <span>loading...</span>
      </div>
    </div>
  );
}

export default SiteLoader;