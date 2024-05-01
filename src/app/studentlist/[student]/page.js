"use client";

import { useEffect, useState } from "react";

const studentData = [
  {
    name: "Bhadresh Lathiya",
    id: 1,
    age: 28,
    dateOfBirth: "1996-07-29",
  },
  {
    name: "Nikunj Lathiya",
    id: 2,
    age: 26,
    dateOfBirth: "1996-04-29",
  },
  {
    name: "Raj Lathiya",
    id: 3,
    age: 24,
    dateOfBirth: "1996-06-29",
  },
  {
    name: "Shailesh Mavani",
    id: 4,
    age: 22,
    dateOfBirth: "1996-08-29",
  },
  {
    name: "Rahul Lathiya",
    id: 5,
    age: 30,
    dateOfBirth: "1996-05-29",
  },
];
const Student = ({ params }) => {
  const studentDetails = studentData.find(
    (item) => item.id === +params.student
  );
  return (
    <div>
      <h1>Student Detail</h1>
      <ul>
        <li>Name : {studentDetails.name}</li>
        <li>Age : {studentDetails.age}</li>
        <li>Date Of Birth : {studentDetails.dateOfBirth}</li>
      </ul>
    </div>
  );
};

export default Student;
