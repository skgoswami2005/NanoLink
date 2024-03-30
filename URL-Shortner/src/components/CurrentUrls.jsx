import '../App.css'

function CurrentUrls({ url, isPop, longUrl }) {

  const handleCopyUrl = () => {
    navigator.clipboard.writeText(url)
      .then(() => {
        alert('URL copied to clipboard!');
      })
      .catch((error) => {
        console.error('Error copying URL:', error);
        alert('Failed to copy URL to clipboard. Please try again.');
      });
  };



  return (
    <>
      <div className='p-4 bg-white shadow-md w-full flex justify-between my-2'>
        <div>
          <a className='text-lg' target='_blank' href={url}>{url}</a>
          {
            isPop ? <p className='text-gray-500'>Long Url: {longUrl}</p> : <p></p>
          }
        </div>
        <div>
          <button className='bg-blue-500 text-white text-sm rounded-3xl py-1 px-2' onClick={handleCopyUrl}>
            Copy
          </button>
        </div>
      </div>
    </>
  )
}

export default CurrentUrls;