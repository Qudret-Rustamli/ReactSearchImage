import ImageList from './ImageList';
import SearchBar from './SearchBar';
import React from 'react';
import axios from 'axios';

const Searcing = () => {
  const [img, setImg] = React.useState([]);
 
  async function onSubmit(term) {
    const res = await axios.get(`https://api.unsplash.com/search/photos`, {
      headers: {
        Authorization: `Client-ID A2pgWDxLKJGovr-ocG87RN72_x5d7yOCie-c4w1Ba-M`,
      },
      params: {
        query: term,
      },
    });
    setImg(res.data.results);
  }
  return (
    <div className="ui container" style={{ marginTop: '20px' }}>
      <SearchBar onSubmit={onSubmit} />
      <ImageList img={img} />
    </div>
  );
};

export default Searcing;
