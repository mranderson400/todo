import './App.css';
import { useState, useEffect } from 'react'; 
import "bootstrap/dist/css/bootstrap.min.css"


function App() {
  
  const [list, setlist] = useState([]);
  
  useEffect(() => {
    const list = JSON.parse(localStorage.getItem('list'));
    if(list){
      setlist(list);
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e.target.tarea.value);

    const newlist = [
      ...list,
      {
        id : Date.now().toString(),
        tarea : e.target.tarea.value,
        state : false
      }
    ]

    setlist(newlist);
    console.log(`El estado de list: ${list}`);
    e.target.tarea.value = "";
    localStorage.setItem('list', JSON.stringify(newlist));
    console.log(`list: ${list}`);
  }

  const handleCheck = (tarea) => {
    const newlist = list.map((tareaItem) => {
      if(tareaItem.id === tarea.id){
        return {...tareaItem, state: !tareaItem.state}
      }
      return tareaItem;
    } );
    setlist(newlist);
    console.log(`list: ${list}`);
  }

  const handleDelete = (tarea) => {
    const newlist = list.filter((tareaItem) => {
      return tareaItem.id !== tarea.id;
    });
    setlist(newlist);
    localStorage.setItem('list', JSON.stringify(newlist));
   }

  return (
    <div className="container">
      <form className='text-center'  onSubmit={handleSubmit}>
        <input type="text" name='tarea' placeholder="Enter a new task" />
        <button type="input" >Add</button>
      </form>
      <ul>
        {
          list.map((tarea, index) => {
            return <li key={tarea.id} style={{
              textDecoration: tarea.state ? "line-through" : "",
            }}>
              {tarea.tarea} <input type="checkbox" onChange={()=>handleCheck(tarea)} id={index} value={tarea} ></input>
              <button type="input" onClick={()=> handleDelete(tarea)} >Delete</button>
            </li>
          }
          )
        } 
      </ul>
    </div>
  );
}

export default App;