import React, { useState } from 'react'
import Home from './components/Home'
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import NavBar from './components/NavBar';
import Favorite from './components/Favorite';
import Detail from './components/Detail';

const App = () => {
  const [data, setData] = useState([])
  const [search, setSearch] = useState('')

  return (
    <>
      <Router>
        <NavBar setData={setData} search={search} setSearch={setSearch} />
        <Routes>
          <Route path="/" element={<Home data={data} search={search} />} />
          <Route path="/favorite" element={<Favorite />} />
          <Route path="/details/:id" element={<Detail />} />
        </Routes>
      </Router>
    </>
  )
}

export default App