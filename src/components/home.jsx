import { Link } from "react-router"

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 flex items-center justify-center px-4">
      <div className="bg-white rounded-3xl shadow-2xl max-w-md w-full text-center p-10">
        <h1 className="text-4xl font-extrabold text-gray-800 mb-4">Welcome to To-Do App</h1>
        <p className="text-gray-600 mb-8">Organize your tasks, stay productive and keep track of your goals.</p>

        <Link to="/login/">
          <button className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-6 py-3 rounded-xl transition duration-300 shadow-md">
            Login
          </button>
        </Link>
      </div>
    </div>
  );
}