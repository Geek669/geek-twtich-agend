import {useState} from 'react' //importamos el Hook
import Header from './Components/Header'
import Items from './Components/Items'
import AddItem from './Components/AddItem'
import './App.css'

function App() {
  const [items, setItems]= useState([
    {
      id: 1,
      title: 'Desarrollando proyecto en React desde Cero',
      category: 'Desarrollo y Programación',
      day:'Lun',
      time: '18:00'
  },
  {
      id: 2,
      title: 'Aprendiendo Hacking Ético',
      category: 'Ethical Hacking',
      day:'Martes',
      time: '03/05/2021'
  },
  {
      id: 3,
      title: 'Intr. a Data Science con Python',
      category: 'Desarrollo y Programación',
      day:'Miercoles',
      time: '04/05/2021'
  },
  {
      id: 4,
      title: 'Aprendiendo Desarrollo Web desde Cero',
      category: 'Desarrollo y Programación',
      day:'Jueves',
      time: '05/05/2021'
      
  },
  {
    id: 5,
      title: 'Aprendiendo Ethical Hacking',
      category: 'Hacking Ético',
      day:'Viernes',
      time: '05/05/2021'
  }
  ]);
  const addItem = (item)=> {
     const id = Math.floor( Math.random() * 1000 )+1 ;
     const  newItem = {id, ...item}
     setItems([...items, newItem])
  }
  const deleteItem = (id) => {
    setItems( items.filter( (item)=> item.id !== id))
  }
  
  
 return (
    <div className="container">
    <div className="row justify-content-center">
       <Header />
       <AddItem addItem={addItem}/>
       <Items items={items}deleteItem={deleteItem} />
    </div>
    </div>
  )
}
export default App;
