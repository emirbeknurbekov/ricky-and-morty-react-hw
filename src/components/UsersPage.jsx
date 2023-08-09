import React, { useEffect, useState } from "react";

const UsersPage = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/character")
      .then((res) => res.json())
      .then((data) => setUsers(data.results));
  }, []);
  return (
    <div>
      <h3 className="charac__title">Characters:</h3>
      <div className="content">
        {users.map((user) => (
          <div className="name">
            <h5 key={user.id}>{user.name}</h5>
            <img src={user.image} alt="" width="90px" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default UsersPage;
