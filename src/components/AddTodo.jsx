import React from "react";

export default function AddTodo({ setTodos }) {
	const inputRef = React.useRef();

	function handleAddTodo(event){
		event.preventDefault();

		const text = event.target.elements.todoText.value;

		if(text!=""){
			
			setTodos(prevTodos => {
				return prevTodos.concat({id: prevTodos.length+1, text: text, done: false })
			});
			inputRef.current.value = "";
		}
	}

	return (
			<form onSubmit={handleAddTodo}>
				<div>
		      		<input name="todoText" placeholder="Add to do item: do the dish-washing, change towels..." ref={inputRef} />
		      		<button type="submit"><i className="fa fa-plus-circle"></i> Add To Do</button>
	      		</div>
	    	</form>
	)
}