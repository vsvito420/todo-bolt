'use client';

import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Checkbox } from '@/components/ui/checkbox';
import { Calendar, Tag } from 'lucide-react';

interface Todo {
  id: string;
  title: string;
  completed: boolean;
  priority: 'low' | 'medium' | 'high';
  dueDate?: string;
}

export default function TodoList() {
  const [todos, setTodos] = useState<Todo[]>([
    {
      id: '1',
      title: 'Complete project proposal',
      completed: false,
      priority: 'high',
      dueDate: '2024-04-15',
    },
    {
      id: '2',
      title: 'Review team updates',
      completed: false,
      priority: 'medium',
      dueDate: '2024-04-16',
    },
  ]);

  const [newTodo, setNewTodo] = useState('');

  const addTodo = () => {
    if (!newTodo.trim()) return;
    
    const todo: Todo = {
      id: Date.now().toString(),
      title: newTodo,
      completed: false,
      priority: 'medium',
    };

    setTodos([todo, ...todos]);
    setNewTodo('');
  };

  const toggleTodo = (id: string) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high': return 'text-red-500';
      case 'medium': return 'text-yellow-500';
      case 'low': return 'text-green-500';
      default: return 'text-gray-500';
    }
  };

  return (
    <div className="space-y-4">
      <div className="flex gap-2">
        <Input
          placeholder="Add a new task..."
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && addTodo()}
          className="flex-1"
        />
        <Button onClick={addTodo}>Add Task</Button>
      </div>

      <div className="space-y-2">
        {todos.map((todo) => (
          <Card key={todo.id} className="p-4">
            <div className="flex items-center gap-3">
              <Checkbox
                checked={todo.completed}
                onCheckedChange={() => toggleTodo(todo.id)}
                aria-label={`Mark "${todo.title}" as ${todo.completed ? 'incomplete' : 'complete'}`}
              />
              <div className="flex-1">
                <p className={`${todo.completed ? 'line-through text-muted-foreground' : ''}`}>
                  {todo.title}
                </p>
                <div className="flex gap-4 mt-2 text-sm text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <Tag className={`h-4 w-4 ${getPriorityColor(todo.priority)}`} aria-hidden="true" />
                    {todo.priority}
                  </span>
                  {todo.dueDate && (
                    <span className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" aria-hidden="true" />
                      {todo.dueDate}
                    </span>
                  )}
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}