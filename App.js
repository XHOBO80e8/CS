import React from 'react';



function Todo({todo,index,mark_todo,unmark_todo,delete_todo}){

	return (
		<div 
		className="todo"
		style={{ textDecoration: todo.flag ? "line-through" : ""}}
		>
		{todo.text}
		<div>
			<button onClick={() => mark_todo(index)}>MARK</button>
			<button onClick={() => unmark_todo(index)}>UNMARK</button>
			<button onClick={() => delete_todo(index)}>DELETE</button>
		</div>	
		</div>
	);
};


function TodoForm({insert_todo}) {

	const [value,set_value] = React.useState("");

	const init_submit = sub => { 
		
		sub.preventDefault();
		if(!value) return;
		insert_todo(value);
		set_value("");
	};

	return (
		
		<form onSubmit={init_submit}>
			<input 
				type="text"
				className="input"
				value={value}
				onChange={sub => set_value(sub.target.value)}
			/>	
		</form>
	);

};

function App() {

	const [todo_list,set_todo] = React.useState([

	{
		text: "BOBO",
		flag: false
	},
	{
		text: "LOLOL",
		flag: false
	}
	]);

	const insert_todo = text => {
		const new_todo = [...todo_list,{text}];
		set_todo(new_todo);

	};
	const mark_todo = index => {
	
		const new_todo = [...todo_list];
		new_todo[index].flag = true;
		set_todo(new_todo);
	};
	const unmark_todo = index => {
	
		const new_todo = [...todo_list];
		new_todo[index].flag = false;
		set_todo(new_todo);
	};

	const delete_todo = index => {
		const new_todo = [...todo_list];
		new_todo.splice(index,1);
		set_todo(new_todo);
	};
	return (
		<div className="app">
		<div className="todo_container">
		{
			todo_list.map((todo,index) =>(
				<Todo
					key={index}
					index={index}		
					todo={todo}
					mark_todo={mark_todo}
					unmark_todo={unmark_todo}
					delete_todo={delete_todo}
				/>		
				
			))
		}
		<TodoForm insert_todo={insert_todo} />
		</div>
		</div>
	);

}

export default App;
