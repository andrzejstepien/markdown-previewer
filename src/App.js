import './App.css';
import { useState } from 'react';

function App() {

  const [currentContent, setCurrentContent] = useState("")
  const [processedText, setProcessedText] = useState("")

  function handleChange(){
    setCurrentContent()
    console.log(currentContent)
    setProcessedText(proccessText(currentContent))
  }

  function proccessText(text){
    return text+"BOOBIES"
  }

  return (
    <div className="App" > 
      <textarea id="editor"
      rows="20" cols="50"
      value={currentContent}
      onChange={handleChange}>
    
      </textarea>
      <p id="preview">{processedText}</p>
    </div>
  );
}

export default App;
