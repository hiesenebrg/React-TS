import React from 'react';
import { useDispatch } from 'react-redux';
import { toggleTodo, deleteTodo } from '../store/todoSlice';
import { Todo } from '../types/todo';
import { Trash2, CheckCircle, Circle } from 'lucide-react';

interface TodoItemProps {
  todo: Todo;
}

export const TodoItem: React.FC<TodoItemProps> = ({ todo }) => {
  const dispatch = useDispatch();

  return (
    <div className="flex items-center justify-between p-4 bg-white rounded-lg shadow mb-2">
      <div className="flex items-center gap-3">
        <button
          onClick={() => dispatch(toggleTodo(todo.id))}
          className="text-gray-500 hover:text-green-500"
        >
          {todo.completed ? (
            <CheckCircle className="w-5 h-5 text-green-500" />
          ) : (
            <Circle className="w-5 h-5" />
          )}
        </button>
        <span className={`${todo.completed ? 'line-through text-gray-400' : ''}`}>
          {todo.text}
        </span>
      </div>
      <button
        onClick={() => dispatch(deleteTodo(todo.id))}
        className="text-red-500 hover:text-red-700"
      >
        <Trash2 className="w-5 h-5" />
      </button>
    </div>
  );
};