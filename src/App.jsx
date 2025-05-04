import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import DetailPage from "./components/DetailPage";
import HomePage from "./components/HomePage";

function App() {

  const [formData, setFormData] = useState({
    filter_toggle: 'all',
    movie_title_query: '',
  })

  function updateForm(e) {
    const {name, value} = e.target;
    setFormData(prevData => {
      return {
        ...prevData,
        [name]: value,
      }
    }) 
  } 

  return (
    <div>
      <main>
         <Routes>
          <Route path="/" element={<HomePage formData={formData} updateForm={updateForm} />} />
          <Route path="/details/:id" element={<DetailPage />} />
         </Routes>
      </main>
    
    </div>
  )
}

export default App
