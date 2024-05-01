"use client";
import Link from "next/link";
import styles from "./page.module.css";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  const navigate = (name) => {
    router.push(name);
  };
  return (
    <main>
      <h1 className="heading">Home Page </h1>
      <Link href={"/login"}>Go to Login Page</Link>
      <br />
      <br />
      <Link href={"/about"}>Go to About Page</Link>
      <br />
      <br />
      <button onClick={() => navigate("/login")}>Go to Login Page</button>
      <br />
      <br />
      <button onClick={() => navigate("/about")}>Go to About Page</button>
      <br />
      <br />
      <button onClick={() => navigate("/studentlist")}>
        Go to Student List
      </button>
      <br />
      <br />
      <button onClick={() => navigate("/productlist")}>
        Go to Product List
      </button>
    </main>
  );
}

// const User = (props) => {
//   return (
//     <div>
//       <h2>My Name is {props.name}.</h2>
//     </div>
//   );
// };
