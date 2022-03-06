import React from "react";
import {TodoContext} from '../TodoContext';
import './TodoForm.css'

function TodoForm(){
  const [newTodoValue, setNewTodoValue] = React.useState('');
  const {addTodo, setOpenModal} = React.useContext(TodoContext);
  const onChange = (event) =>{
    setNewTodoValue(event.target.value)
  };
  const onCancel = () =>{
    setOpenModal(false)
  };
  const onSubmit = (event) =>{
    event.preventDefault();
    addTodo(newTodoValue);
    setOpenModal(false);
  };

  return(
    <form onSubmit={onSubmit}>
      <label htmlFor="">Escribe un TODO</label>
      <textarea placeholder="Cortar la cebolla para el almuerzo" onChange={onChange} value={newTodoValue}/>
      <div className="TodoForm-buttonContainer">
        <button className="TodoForm-button TodoForm-button--cancel" type="button" onClick={onCancel}>Cancelar</button>
        <button className="TodoForm-button TodoForm-button--add" type="submit">Agregar</button>
      </div>
    </form>
  )
}

export {TodoForm}