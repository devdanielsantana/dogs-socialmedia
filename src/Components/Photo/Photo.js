import React from 'react';
import { useParams } from 'react-router-dom';
import useFetch from '../../Hooks/useFetch';
import { INDIVIDUAL_PHOTO_GET } from '../../api';
import Error from '../Helper/Error';
import Loading from '../Helper/Loading';
import PhotoContent from './PhotoContent.js';
import Head from '../Helper/Head';

const Photo = () => {
  const { id } = useParams();
  const { loading, data, error, request } = useFetch();

  React.useEffect(() => {
    const { url, options } = INDIVIDUAL_PHOTO_GET(id);
    request(url, options);

    if (error) return <Error error={error} />;
    if (loading) return <Loading />;
    if (data)
      return (
        <section className="container mainContainer">
          <PhotoContent single={true} data={data} />
        </section>
      );
    else return null;
  }, [data, error, loading, id, request]);

  return (
    <section className="container mainContainer">
      <Head title={data.photo.title} />

      <PhotoContent single={true} data={data} />
    </section>
  );
};

export default Photo;
