import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../store/store';
import { AddTodo } from '../components/AddTodo';
import { TodoItem } from '../components/TodoItem';

export const TodoList: React.FC = () => {
  const todos = useSelector((state: RootState) => state.todos.todos);

  return (
    <div className="max-w-2xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Todo List</h1>
      <AddTodo />
      <div className="space-y-2">
        {todos.map(todo => (
          <TodoItem key={todo.id} todo={todo} />
        ))}
      </div>
    </div>
  );
};