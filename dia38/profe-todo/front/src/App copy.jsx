import { useState } from 'react'
import './App.css'

function App() {
  const [jsonResponse, setJsonResponse] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault()
    const formData = new FormData(e.target)
    fetch('http://localhost:3000/upload', {
      method: 'POST',
      body: formData
    }).then(response => response.json())
      .then(data => {
        setJsonResponse(data);
      })
  };

  return (
    <>
        <form onSubmit={ handleSubmit} style={{"display":"flex", "flexDirection": "column", "marginBottom":"10px"}}>
          <input type="text" name="nick" placeholder="NickName" />
          <input type="file" name="profile" />
          <input type="submit" value="enviar" />
        </form>

        {jsonResponse.url && 
            <>
              <strong>Respuesta del Backend</strong>
              <div style={{"display":"flex"}}>
                <img src={jsonResponse.url} alt="imagen" style={{"maxWidth":"200px"}}/>
                <pre>{JSON.stringify(jsonResponse, null, 2)}</pre>
              </div>
            </>
        }
    </>
  )
}

export default App
