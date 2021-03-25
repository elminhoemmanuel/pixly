import './App.css';
import React, {useState, useEffect} from 'react'
import ImageCard from './components/ImageCard';
import ImageSearch from './components/ImageSearch';


function App() {
  const PIXLY_PIXABAY_API_KEY='20792926-0f11147f052ddd28fe23a49f4'

  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [term, setTerm] = useState('');

  useEffect(() =>{
    fetch(`https://pixabay.com/api/?key=${PIXLY_PIXABAY_API_KEY}&q=${term}&image_type=photo&pretty=true`)
    .then(res => res.json())
    .then(data => {
      setImages(data.hits);
      setIsLoading(false);
    })
    .catch(err => console.log(err))
  },[term])

  return (
    <div className="container-mx-auto px-4">

      <h2 className="text-center text-4xl text-purple-500 my-6">Pixly <i class="fas fa-camera-retro"></i></h2>
      <p className='text-center text-sm text-purple-500 my-3'>Search and view several pictures <small>powered by pixabay api</small></p>

      <ImageSearch searchText = {(text) => setTerm(text)}/>

      {!isLoading && images.length===0 && <h2 className="text-5xl text-center mx-auto mt-32">No images found</h2>}

      {isLoading && <h2 className="text-6xl text-center mx-auto mt-32">Loading....</h2>}
      {images && <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {images.map(image =>{
          return <ImageCard key={image.id} image={image}/>
        })}
      </div>}
    </div>
  );
}

export default App;
