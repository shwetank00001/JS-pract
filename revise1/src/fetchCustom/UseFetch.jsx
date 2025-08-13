import React from "react";

export default function useFetch(url) {
  const [userData, setUserData] = useState([]);

  React.useEffect(() => {
    async function fetchUsers() {
      try {
        const data = await fetch(url);
        const response = await data.json();
        setUserData(response.users);
      } catch (error) {
        console.log(error);
      }
    }
    fetchUsers();
  }, []);

  console.log(userData);
  return (
    <div>
      <h1></h1>
    </div>
  );
}
