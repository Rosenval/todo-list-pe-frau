import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import AddTodoForm from './components/AddTodoForm';
import TodoList from './components/TodoList';
import TotalCompleteItems from './components/TotalCompleteItems';
import logo from './todo-onlus-logo.png';

const App = () => {
	return (
		<div className='container'>
            <div className='container p-4 mt-5'>
                <img src={logo} alt="todo-onlus" className='logo' />
                <h6 className='cit mt-2 italic'>... Because you never know what you're going to forget until you forget it. ~ Mia, 2023</h6>
                <AddTodoForm />
                <TodoList />
                <TotalCompleteItems />
            </div>
            <p className='sad-frau p-4'>Inspired by Frau who ended up destroying three kernels in one day after he forgot
                the steps he had made to migrate from MacOs to Linux the first time.<br/>
                <span className='italic'>Legends says he's still formatting the computer...</span>
            </p>
		</div>
	);
};

export default App;
