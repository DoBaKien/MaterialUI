import axios from "axios";
import { useEffect, useState } from "react";

function ListImage() {
  const [users, setUsers] = useState("");
  useEffect(() => {
    axios
      .get("http://localhost:3001/image")
      .then((res) => {
        console.log(res);
        setUsers(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div>
      {users &&
        users.map((user) => (
          <div key={user.id}>
            <ul>{user.id}<img alt="" src={user.image} width="25%" height="300px"></img></ul>

          </div>
        ))}
    </div>
  );
}

export default ListImage;
