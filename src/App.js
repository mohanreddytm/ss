import React, { useState, useEffect } from 'react';
//import axios from 'axios';

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {

    const fetchingData = async () => {
      const url = '/backend/users';
      const response = await fetch(url);
      const jsonOne = await response.json();
      console.log("non");
      console.log(jsonOne);
      setUsers(jsonOne);
    };


    fetchingData();
 
  }, []);

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>User List</h1>
      {users.length > 0 ? (
        <ul style={{ listStyle: 'none', padding: 0 }}>
          {users.map(user => (
            <li key={user.id} style={{ margin: '10px 0' }}>
              <strong>{user.name}</strong> - {user.age} years old
            </li>
          ))}
        </ul>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default App;
