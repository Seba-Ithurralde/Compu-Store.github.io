import { useEffect, useState } from 'react';
import ReactLoading from 'react-loading';
import ItemDetailContainer from './ItemDetailContainer';

export default function Loading({text}) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      
        <ReactLoading
          type="cylon"
          color="red"
          height="50px"
          width="50px"
        />
        <h4>{text}</h4>
    </>
  );
}