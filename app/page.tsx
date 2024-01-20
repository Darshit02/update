import Content from '@/components/Content'
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import Services from '@/components/Services'
import ScrollToTopButton from '@/components/ui/ScrollTop'
import React from 'react'

const Page = () => {
  return (
    <>
      <Navbar/>
      <Content/>
      <Services/>
      <Footer />
      <ScrollToTopButton />
    </>

    )
}

export default Page