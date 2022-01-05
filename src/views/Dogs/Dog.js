import { useState, useEffect } from 'react';
import { getDogById } from '../../services/dogs';
import DogDetail from '../../components/Dog/DogDetail';
import './Dogs.css';

export default function Dog(props) {
  const [dog, setDog] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getDogById(props.match.params.id);
      setDog(data[0]);
      setLoading(false);
    };
    fetchData();
  }, [props.match.params.id]);
  if (loading) return <h1>loading</h1>;

  return <DogDetail {...dog} />;
}
