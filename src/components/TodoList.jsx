export default function TodoList({ todos, setTodos }) {
	function handleToggleTodo(todo) {
      
    	const updatedTodos = todos.map((t) =>
      		t.id === todo.id
        		? {
            		...t,
            		done: !t.done
          		}
        		: t
    	);
    	setTodos(updatedTodos);
  	}

	return (
		<div className="todoBox">
			<ul>
				{todos.map(todo => (
					<li 
					className={todo.done ? "done" : ""}
					key={todo.id}
					onClick={()=>{ handleToggleTodo(todo) }}>
						{todo.text}
					</li>
				))}
				
			</ul>
		</div>
	)
}