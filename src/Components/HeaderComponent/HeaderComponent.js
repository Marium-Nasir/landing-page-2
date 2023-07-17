import React from 'react'
import Header from './Header';
import MainNav from './MainNav';
import MiniNav from './MiniNav';

const HeaderComponent = () => {
  return (
    <>
      <MiniNav/>
      <MainNav />
      <Header />
    </>
  )
}

export default HeaderComponent
