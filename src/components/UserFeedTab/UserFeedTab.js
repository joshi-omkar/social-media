import React, { useState } from 'react'
import './UserFeedTab.css'

const UserFeedTab = () => {

  const [active, setActive] = useState(false)

  return (
    <div className='userfeed-tab' >
      <button className='userfeed-tab-new'>New</button>
      <button className='userfeed-tab-trending'>Trending</button>
    </div>
  )
}

export default UserFeedTab