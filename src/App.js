import './App.css';
import Markdown from 'marked-react';
import { useState } from 'react';

function App() {
  const defaultText = 
`# Hello and welcome to my markdown parser
## I love markdown
[This is quite a useful resource.](https://markdown-it.github.io/) It has everything you need to know to get started with ${"`markdown`"}.
  
This is the handleChange function that I use to make this work:

    const handleChange = event => {
        setCurrentContent(event.target.value)
     }
Cool, no?

You can also make lists, like this:
  
- Paul  
- John
- George
- Ringo

or this:

1. Kurt
2. Krist
3. Dave

Blockquotes are **easy** too!

> It's okay to eat fish because they don't have any feelings.
> 
> Kurt Cobain

![Billy Bass](https://guideposts.org/wp-content/uploads/2020/07/dontworrybehappy_marquee1-1024x576.jpg.optimal.jpg)
  `
  const [currentContent, setCurrentContent] = useState(defaultText)

  const handleChange = event => {
    setCurrentContent(event.target.value)
  }



  return (
    <div className="App" > 
      <textarea id="editor"
      rows="20" cols="50"
      value={currentContent}
      onChange={handleChange}>
    
      </textarea>
      <div id="preview">
        <Markdown>
        {currentContent}
        </Markdown>        
      </div>
    </div>
  );
}

export default App;
