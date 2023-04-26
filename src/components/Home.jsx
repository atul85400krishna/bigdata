import React from 'react'
import "./Style.css"

function Home() {
  return (
     <>
     <div className='container_home'>
     <div className='hm1'>
      <h1>Big Data & Analytics</h1>
      <br />
      <h2>Innovative Solutions</h2>
      <p>Real-time data management technologies, global data market </p>
      <p>places, and award-winning service make our solutions.</p>
     </div>
     <div className='hm2'>
      {/* <img src="https://b-data-react-template.netlify.app/static/media/banner.ad5635fa.svg" alt="" /> */}


      <img src="./image/Game analytics-rafiki.svg" alt="" />
     </div>
     
     
     </div>
     </>
  )
}

export default Home