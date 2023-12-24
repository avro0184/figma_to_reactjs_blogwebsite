import React from 'react'
import Header from './components/Header'
import BlogList from './components/BlogList'
import HeroSection from './components/HeroSection'
import Pagination from './components/Pagination'

export default function App() {
  return (
    <>
    <Header/>
    <HeroSection/>
    <BlogList/>
    <Pagination/>
    </>
  )
}
