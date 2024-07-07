import React, { useState } from 'react'
import Nav from './Nav'
import logo from '/logo.svg'

const Header = () => {
    const [hideLeft, setHideLeft] = useState("-left-[1000px]")
    const menuItems = ["recipes", "minimart", "about", "contact"]

    const onOpen =  () => {
        setHideLeft("left-0")
    }
    const onClose =  () => {
        setHideLeft("-left-[1000px]")
    }
  return (
    <>
    <div className='max-[900px]:hidden'>
        <Nav menuItems={menuItems} Logo={logo}/>
    </div>
    <div className='min-[900px]:hidden'>Mobile view</div>
    </>
    
  )
}

export default Header