import axios from "axios";
import { useState } from "react";

const App = () => {
  const [note, setNote] = useState([]);

  axios.get("http://localhost:3000/api/note").then((res) => {
    console.log(res.data.allNotes)
    setNote(res.data.allNotes);
  });

  return (
    <div className="app">
      {note.map((item,idx) => (
        <div key={idx} className="note">
          <h1>{item.titel}</h1>
          <p>{item.diss}</p>
        </div>
      ))}
    </div>
  );
};

export default App;
