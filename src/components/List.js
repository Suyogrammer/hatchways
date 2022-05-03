import React, { useEffect } from "react";
import { useState } from "react";

function List({ students }) {
  const [selected, setSelected] = useState(null);

  function average(grades) {
    let sum = 0;
    let average = 0;
    for (let i = 0; i < grades.length; i++) {
      sum += parseInt(grades[i]);
    }
    average = sum / grades.length;
    return average;
  }

  const handleToggle = (id) => {
    if (selected == id) {
      return setSelected(null);
    }
    setSelected(id);
  };

  return (
    <div>
      {students.map((i) => (
        <div key={i.id} className="box">
          <img src={i.pic} className="image" alt={i.firstName} />
          <div className="data">
            <div className="title">
              <h2>
                {i.firstName} {i.lastName}
              </h2>
              <span className="sign" onClick={() => handleToggle(i.id)}>
                {selected === i.id ? "-" : "+"}
              </span>
            </div>
            <p>Email: {i.email}</p>
            <p>Company: {i.company}</p>
            <p>Skill: {i.skill}</p>
            <p>Average: {average(i.grades)}%</p>
            {selected === i.id && (
              <div className="testscores">
                {i.grades.map((item, idx) => (
                  <p key={idx}>
                    Test {idx + 1}: {item} %
                  </p>
                ))}
              </div>
            )}
            <div>
              <input type="text" placeholder="Add tag" />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default List;
