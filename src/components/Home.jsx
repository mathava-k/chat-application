import React from 'react'
import Chat from './Chat'

const Home = () => {

    const goChat =() => {
        <Chat />
    }

  return (
   <>
        <div className="row">
            <div className="col-12">
                
            <h1>Welcome To My ChattApp</h1>

            <button className='btn ' onClick={goChat}> Start Chat </button>

            </div>
           
        </div>
   </>
  )
}

export default Home