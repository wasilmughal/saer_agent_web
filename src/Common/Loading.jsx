import React from 'react'
import { TailSpin ,Circles} from 'react-loader-spinner'

function Loading() {
  return (
    <div className="flex justify-center items-center h-screen">
    <Circles
  height="80"
  width="80"
  color="#0869FB"
  ariaLabel="circles-loading"
  wrapperStyle={{}}
  wrapperClass=""
  visible={true}
  />
  </div>
  
  )
}

export default Loading