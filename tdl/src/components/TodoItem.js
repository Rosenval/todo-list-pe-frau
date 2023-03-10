// import { getByDisplayValue } from '@testing-library/react';
import React from 'react';
import { useDispatch } from 'react-redux';
import { toggleCompleteAsync, deleteTodoAsync } from '../redux/todoSlice';

const TodoItem = ({ _id, title, completed }) => {
	const dispatch = useDispatch();

	const handleCompleteClick = () => {
		dispatch(toggleCompleteAsync({
			_id: _id,
			completed: !completed
		}))
	};

	const handleDeleteClick = () => {
		dispatch(deleteTodoAsync({
			_id
		}))
	};

	return (
		<li className={`list-group-item ${completed && 'list-group-item-success'}`}>
			<div className='d-flex justify-content-between'>
				<span className='d-flex align-items-center'>
					<input
						type='checkbox'
						className='mr-3'
						checked={completed}
						onChange={handleCompleteClick}
					></input>
					{title}
				</span>
				<button onClick={handleDeleteClick} className='btn btn-danger'>Delete</button>
			</div>
		</li>
	);
};

export default TodoItem;
