import './App.css'
import { useEffect, useState } from 'react';
import axios from 'axios';
import Navbar from './components/Navbar';
import CurrentUrls from './components/CurrentUrls';
import PopularUrls from './components/PopularUrls';
import { useTimeout } from '@chakra-ui/react';
import { baseUrl } from './Urls';

function Home() {

  const [longUrl, setLongUrl] = useState('');
  const [shortUrl, setShortUrl] = useState('');
  const [shortUrls, setUrls] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${baseUrl}/api/url/shorten`, { longUrl });
      console.log(response.data);
      setShortUrl(response.data.shortUrl);
      addShortUrl(response.data.shortUrl);
    } catch (error) {
      console.error('Error shortening URL:', error);
    }
    setLongUrl('');
  };

  const addShortUrl = (newUrl) => {
    setUrls(prevState => [...prevState, newUrl]);
  };

  useEffect(() => {
    console.log(shortUrls);
  }, useTimeout(2000))

  return (
    <>
      <Navbar />

      <div className='flex flex-col md:flex-row justify-evenly py-16'>
        <div className='align-middle flex mx-auto md:mx-0'>
          <form onSubmit={handleSubmit}>
            <div className='flex flex-col justify-center h-full'>

              <div>
                <input type="text" placeholder='Enter Url' value={longUrl} onChange={(e) => setLongUrl(e.target.value)} className='border border-blue-400 rounded-md p-2 w-80 my-4' />
              </div>
              <div>
                <input type="submit" value='Short URL' className='p-2 bg-blue-500 text-white rounded-md w-full' />
              </div>
            </div>
          </form>
        </div>

        <div className='w-2/3 mx-auto md:mx-0 md:w-2/5 '>
          <img className='' src="../src/assets/homeimage.jpg" alt="" />
        </div>
      </div>


      {shortUrl && (
        <div className='p-5'>
          <p className='text-xl'>Shortened URL:</p>
          <CurrentUrls url={shortUrl} isPop={false} />
        </div>
      )}

      {shortUrls && shortUrls.length > 0 && (
        <div className='p-5'>
          <p className='text-2xl'>Previously Shortened URLs</p>
          {
            shortUrls.map((url, index) => {
              return <CurrentUrls url={url} key={index} isPop={false} />;
            })
          }
        </div>
      )}

      <h2 className='p-5 text-2xl'>Most Popular URLs</h2>
      
      < PopularUrls />

    </>
  )
}

export default Home