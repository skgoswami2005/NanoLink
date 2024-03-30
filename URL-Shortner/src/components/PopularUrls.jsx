import { useEffect, useState } from 'react'
import '../App.css'
import axios from 'axios'
import { useTimeout } from '@chakra-ui/react'
import CurrentUrl from './CurrentUrls'
import { baseUrl } from '../Urls'

function PopularUrls() {

  const [popularUrl, setPopularUrl] = useState([])

  useEffect(() => {
    const getPopularUrl = async () => {
      const response = await axios.get(`${baseUrl}/api/getPopular`)
      if (response.data) {
        setPopularUrl(response.data)
      }
    }
    getPopularUrl()
  }, useTimeout(5000))

  return (
    <>
      <div className='p-5'>
      {
        popularUrl.map((item, index) => {
          return <CurrentUrl key={index} url={item.shortUrl} isPop={true} longUrl={item.longUrl} />
        })
      }
      </div>
    </>
  )
}

export default PopularUrls