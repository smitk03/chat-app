import React from 'react'
import Conversations from './sidebar/Conversations'
import LogoutButton from './sidebar/LogoutButton'
import SearchInput from './sidebar/SearchInput'

const Sidebar = () => {
  return (
    <div className='border-r border-slate-500 p-4 flex flex-col'>
        
        <SearchInput/>
        <div className='divider px-3'></div>
        <Conversations/>
        <LogoutButton/>
        {/*<Conversations />
        <LogoutButton/>*/}
    </div>
  )
}

export default Sidebar