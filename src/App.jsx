// src/App.jsx
// import './App.css';
import TaskManager from './components/TaskManager';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ApiDataViewer from './components/Api'; // Import the new component

function App() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <Navbar />

      <main className="flex-grow max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 w-full">
        <TaskManager />
        
        {/* Replace the placeholder with the actual component */}
        <ApiDataViewer />
      </main>

      <Footer />
    </div>
  );
}

export default App;