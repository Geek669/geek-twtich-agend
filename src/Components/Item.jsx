import Imgcategory from './../geek.jpg'
import {FaTrash} from 'react-icons/fa'
const Item = ({item,deleteItem})=> {
  return (
    <div className="col-sm-10"> 
         <p>{item.day}</p>
          <div className="row item">
                <div className="col-sm-3">
                    <img src={Imgcategory} alt="Categoría" className="img-fluid p-0" />
                    </div>
                    <div className="col-sm-8">
                         <p>{item.title}</p>
                         <p>{item.category}</p>
                         <small>■ {item.time}</small>

                    </div>
                    <div className="col-sm-1 align-self-center p-2 text-center" >
                          <FaTrash style={ {color: '#efeff1',cursor: 'pointer'}}
                          onClick={ ()=> deleteItem(item.id)}
                          />
               </div>
          </div>
      </div>
  )
}

export default Item

