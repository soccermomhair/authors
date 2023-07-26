import React, { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import './App.css'
import AuthorList from './components/AuthorList'
import AuthorSubmit from './components/AuthorSubmit'
import AuthorEdit from './components/AuthorEdit'

function App() {

  return (
    <BrowserRouter>
      <div className='App'>
        <h1>Favorite Authors</h1>
        <Routes>
          <Route path="/authors" element={<AuthorList />} />
          <Route path="/authors/new" element={<AuthorSubmit />} />
          <Route path="/authors/:id/edit" element={<AuthorEdit />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
