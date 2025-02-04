import { useEffect, useState } from "react";

const User = ({ name, location }) => {
  const [count] = useState(1);

  useEffect(() => {
    const timer = setInterval(() => {
      console.log("Timing");
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);
  return (
    <div className="user-card">
      <h1>Count : {count}</h1>
      <h1>Name:{name}</h1>
      <h1>Location: {location}</h1>
    </div>
  );
};

export default User;
