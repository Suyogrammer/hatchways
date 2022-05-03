import "./App.css";
import { useEffect, useState } from "react";
import axios from "axios";
import List from "./components/List";

const url = "https://api.hatchways.io/assessment/students";

function App() {
  const [students, setStudents] = useState([]);
  const [searchByName, setSearchByName] = useState("");

  useEffect(() => {
    axios
      .get(url)
      .then((response) => setStudents(response.data.students))
      .catch((error) => console.log(error));
  }, []);

  console.log(students, "students");

  return (
    <div className="App">
      <h1>HatchWays</h1>
      <input
        type="text"
        placeholder="Search By Name"
        onChange={(event) => setSearchByName(event.target.value)}
      />
      <br />
      <input type="text" placeholder="Search By TagName" />
      {searchByName !== "" ? (
        <List
          students={students.filter((i) =>
            (i.firstName + " " + i.lastName)
              .toLowerCase()
              .includes(searchByName.toLowerCase())
          )}
        />
      ) : (
        <List students={students} />
      )}
    </div>
  );
}

export default App;
