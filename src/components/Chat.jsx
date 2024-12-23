import React, { useState } from 'react'
import Styles from '../assets/css/chat.module'

const Chat = () => {

    const [Chat , setChat] = useState([]);
    const [Message , setMessage] = useState([]);

    const storeMessage =() => {
        setChat([...Chat , ...Message]);
    }

  return (
    <>
        <div className="">
            <div className="row d-flex justify-content-center ">
                <div className="col-lg-4">
                    <div className="row bg-primary">
                        <div className="col-12">
                            <div className="d-flex justify-content-between">

                                <div className="">
                                <h3 className=''>ChatBox</h3>
                                </div>

                                <div className="">
                                <button className='btn '> : </button>
                                </div>

                            </div>
                        </div>
                    </div>

                    <div className="">
                        <input type="text" placeholder='Message' className='form-control' onChange={(e)=> setMessage(e.target.value)} />
                        <button onClick={()=> storeMessage()} >Send</button>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Chat