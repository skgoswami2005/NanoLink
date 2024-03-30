import '../App.css'


function Hero() {
  return (
    <>
      <div className='flex justify-evenly py-16'>
        <div className='align-middle flex'>
          <form>
            <div className=' flex flex-col justify-center h-full'>

              <div>
                <input type="text" placeholder='Enter Url' className='border border-blue-400 rounded-md p-2 w-80 my-4'/>
              </div>
              <div>
                <input type="submit" value='Short URL' className='p-2 bg-blue-500 text-white rounded-md w-full'/>
              </div>
            </div>
          </form>
        </div>

        <div className='w-2/5'>
          <img className='' src="../src/assets/homeimage.jpg" alt="" />
        </div>
      </div>
    </>
  )
}

export default Hero;