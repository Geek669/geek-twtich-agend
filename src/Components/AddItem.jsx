import {useState}from 'react'
const AddItem = ({addItem}) => {
    const [title,setTitle] = useState('')
    const [category,setCategory] = useState('')
    const [day,setDay] = useState('')
    const [time,setTime] = useState('')

    const  onSubmitItem = (e)=> {
        //cancelar datos

        e.preventDefault()

        //Validar datos
        if (!title){
            alert('Ingresa, titulo...')
            return
        }
        if (!category){
            alert('Ingresa,categoria...')
            return
        }
        if (!day){
            alert('ingresa, Dia...')
            return
        }
        if (!time){
            alert('ingresa, tiempo...')
            return
        }

        //ejecutar funcion Prop addItem..
        addItem({title,category,day,time})

        //limpiar formulario
        setTitle('')
        setCategory('')
        setDay('')
        setTime('')
    }

    return (
        <div className="col-sm-10">
    <div className="card bg-form-dark">
        <div className="card-header">
            <h2 className="text-muted">Agendar Stream</h2>
        </div>
        <div className="card-body">
            <form onSubmit={ onSubmitItem }>
                <div className='form-group'>
                    <label>Título</label>
                    <input
                        type='text'
                        placeholder='Título del stream'
                        className="form-control"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        
                    />
                </div>
                <div className="form-group">
                    <select
                        name="category"
                        className="form-control"
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                        
                    >
                        <option value="">-- Elegir categoría --</option>
                            <option value="Ciencia y Tecnología">Ciencia y Tecnología</option>
                            <option value="Gameplays">Gameplays</option>
                            <option value="Música">Música</option>
                            <option value="Desarrollo Web">Desarrollo web</option>
                            <option value="Ethical Hacking">Ethical Hacking</option>
                    </select>
                </div>
                <div className="form-group">
                    <select
                        name="day"
                        className="form-control"
                        value={day}
                        onChange={(e) => setDay(e.target.value)}
                    >
                        <option value="">-- Elegir Día --</option>
                        <option value="Lunes">Lunes</option>
                        <option value="Martes">Martes</option>
                        <option value="Miércoles">Miércoles</option>
                        <option value="Jueves">Jueves</option>
                        <option value="Viernes">Viernes</option>
                        <option value="Sábado">Sábado</option>
                        <option value="Domingo">Domingo</option>
                    </select>
                </div>
                <div className='form-group'>
                    <label>Hora</label>
                    <input
                        type='time'
                        className="form-control"
                        value={time}
                        onChange={ (e) => setTime(e.target.value)}
                        
                    />
                </div>
                <div className="form-group">
                    <input
                        type="submit"
                        className="btn btn-primary btn-add-item"
                        value="Añadir stream"
                    />
                </div>
            </form>
        </div>
    </div>
</div>
    )
}


export default AddItem

