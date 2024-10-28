import { useState } from "react";

const User = () => {
  const [count] = useState(0);
  const [count2] = useState(1);
  return (
    <div className="user-card">
      <p>Count: {count}</p>
      <p>Count: {count2}</p>
      <h3>Name: Akash Function</h3>
      <p>Location: chinnasalem</p>
      <p>twitter: @akash24</p>
    </div>
  );
};

export default User;
