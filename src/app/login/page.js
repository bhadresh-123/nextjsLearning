"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";

const Login = () => {
  const router = useRouter();
  const navigate = (name) => {
    router.push(`/login/${name}`);
  };
  return (
    <div>
      <h1 className="heading">Login Page</h1>
      <Link href={"/"}>Go to Home Page</Link>
      <br />
      <br />
      <button onClick={() => navigate("loginstudent")}>
        Log in for Student{" "}
      </button>
      <br />
      <br />
      <button onClick={() => navigate("loginteacher")}>
        Log in for Teacher
      </button>
    </div>
  );
};

export default Login;
