import Link from "next/link";

// import "./about.css";
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
const StudentList = ({ params }) => {
  return (
    <div>
      <h1>Student List</h1>
      <ul>
        {studentData.map((item) => {
          return (
            <li key={item.id}>
              <Link href={`/studentlist/${item.id}`}>{item.name}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default StudentList;
