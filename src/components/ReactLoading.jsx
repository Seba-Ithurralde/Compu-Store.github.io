import { useEffect, useState } from 'react';
import ReactLoading from 'react-loading';
import './ReactLoading.css';
import ItemDetailContainer from './ItemDetailContainer';

export default function Loading({title}) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
    <div className='loading'>
      {loading ? (
        <ReactLoading
          type="cylon"
          color="red"
          height="50px"
          width="50px"
        />
      ) : (
        <ItemDetailContainer />
      )}
      <h4>{title}</h4>
    </div>
    </>
  );
}