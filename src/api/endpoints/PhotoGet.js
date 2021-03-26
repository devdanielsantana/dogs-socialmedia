import React from 'react';
import URL from './URL';

const PhotoGet = () => {
  const [id, setId] = React.useState('');

  async function handleSubmit(event) {
    event.preventDefault();

    const response = await fetch(`${URL}/api/photo/${id}`);
    const responseJson = await response.json();

    console.log(responseJson);
    return responseJson;
  }

  React.useEffect(() => {
    console.log(id);
  }, [id]);

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={id}
        onChange={({ target }) => {
          setId(target.value);
        }}
      />
      <button>Enviar</button>
    </form>
  );
};

export default PhotoGet;
