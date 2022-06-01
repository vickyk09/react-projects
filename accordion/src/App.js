import React, {useState} from "react";
import data from "./data";
import Questions from "./Questions";

function App() {
  const [questions, setQuestions] = useState(data)
  return (
    <main>
      <h1>Questions And Answers About Login</h1>
      <div className="cont">
        {questions.map((question)=>{
          return <Questions key={question.id} {...question}/>
        })
        }
      </div>
    </main>
  )
}

export default App;
