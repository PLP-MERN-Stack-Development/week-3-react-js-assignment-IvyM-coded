// src/components/ApiDataViewer.jsx
import React, { useState, useEffect } from 'react';

const Api = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        setLoading(true);
        const response = await fetch('https://jsonplaceholder.typicode.com/users?_limit=8');
        if (!response.ok) {
          throw new Error('Something went wrong!');
        }
        const data = await response.json();
        setUsers(data);
        setError(null);
      } catch (err) {
        setError(err.message);
        setUsers([]);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []); // Empty array means this runs once on component mount

  return (
    <div className="mt-8 bg-white dark:bg-gray-800 overflow-hidden shadow rounded-lg p-6">
      <h2 className="text-2xl font-bold mb-4">Sample Users from API</h2>
      
      {loading && <p className="text-center text-gray-500">Loading users...</p>}
      {error && <p className="text-center text-red-500">Error: {error}</p>}
      
      {!loading && !error && (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          {users.map(user => (
            <div key={user.id} className="p-4 border rounded-lg dark:border-gray-700">
              <h3 className="font-bold">{user.name}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">@{user.username}</p>
              <a href={`mailto:${user.email}`} className="text-sm text-blue-500 hover:underline">
                {user.email}
              </a>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Api;