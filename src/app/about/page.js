"use client";
import { useRouter } from "next/navigation";
import Link from "next/link";

const About = () => {
  const router = useRouter();
  return (
    <div>
      <h1 className="heading">About Page</h1>
      <button onClick={() => router.push("/")}>Go to Home Page</button>
      <br />
      <br />
      <Link href={"/about/aboutstudent"}>Go to About Student Page</Link>
      <br />
      <br />
      <Link href={"/about/aboutcolleage"}>Go to About Colleage Page</Link>
    </div>
  );
};

export default About;
