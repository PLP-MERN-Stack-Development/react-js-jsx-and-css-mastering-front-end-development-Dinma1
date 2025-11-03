import { useState } from 'react';
import Button from './Button';
import Card from './Card';

export default function TaskList({ tasks, onDelete, onToggle }) {
  return (
    <div className="space-y-4">
      {tasks.map(task => (
        <Card key={task.id} className="animate-fade-in">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <input
                type="checkbox"
                checked={task.completed}
                onChange={() => onToggle(task.id)}
                className="h-4 w-4 text-blue-600 rounded border-gray-300 focus:ring-blue-500"
              />
              <span className={task.completed ? 'line-through text-gray-500' : ''}>
                {task.title}
              </span>
            </div>
            <Button
              variant="danger"
              onClick={() => onDelete(task.id)}
              className="text-sm"
            >
              Delete
            </Button>
          </div>
        </Card>
      ))}
    </div>
  );
}