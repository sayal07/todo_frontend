import { useState } from 'react';
import { FaEdit, FaTrash, FaCheck } from 'react-icons/fa';
import { useNavigate } from 'react-router';

export default function Dashboard() {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState('');
  const [editId, setEditId] = useState(null);

  const navigate = useNavigate();

  const handleLogout = () => {
    // Add logic to clear fake auth state if needed
    navigate('/'); // Redirect to home page
  };

  const handleAddTask = () => {
    if (!input.trim()) return;

    if (editId !== null) {
      setTasks(tasks.map(task =>
        task.id === editId ? { ...task, text: input } : task
      ));
      setEditId(null);
    } else {
      const newTask = {
        id: Date.now(),
        text: input,
        completed: false,
      };
      setTasks([newTask, ...tasks]);
    }

    setInput('');
  };

  const handleDelete = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  const handleEdit = (id) => {
    const taskToEdit = tasks.find(task => task.id === id);
    setInput(taskToEdit.text);
    setEditId(id);
  };

  const toggleComplete = (id) => {
    setTasks(tasks.map(task =>
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };

  return (
    <div className="max-w-xl mx-auto bg-white p-6 rounded-2xl shadow-lg">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-indigo-700">To-Do Dashboard</h1>
        <button
          onClick={handleLogout}
          className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg text-sm"
        >
          Logout
        </button>
      </div>

      <div className="flex gap-2 mb-4">
        <input
          type="text"
          className="flex-grow border px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
          placeholder="Enter a task..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button
          onClick={handleAddTask}
          className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg transition"
        >
          {editId !== null ? 'Update' : 'Add'}
        </button>
      </div>

      {tasks.length === 0 ? (
        <p className="text-gray-500 text-center">No tasks yet. Add one!</p>
      ) : (
        <ul className="space-y-3">
          {tasks.map(task => (
            <li
              key={task.id}
              className="flex items-center justify-between bg-gray-50 px-4 py-3 rounded-lg shadow-sm hover:bg-gray-100"
            >
              <div
                className={`flex-grow cursor-pointer ${
                  task.completed ? 'line-through text-gray-500' : ''
                }`}
                onClick={() => toggleComplete(task.id)}
              >
                {task.text}
              </div>
              <div className="flex gap-2">
                <button
                  onClick={() => handleEdit(task.id)}
                  className="text-blue-500 hover:text-blue-700"
                >
                  <FaEdit />
                </button>
                <button
                  onClick={() => handleDelete(task.id)}
                  className="text-red-500 hover:text-red-700"
                >
                  <FaTrash />
                </button>
                {task.completed && (
                  <span className="text-green-500">
                    <FaCheck />
                  </span>
                )}
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

