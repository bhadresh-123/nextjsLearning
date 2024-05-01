import Link from "next/link";
import "./about.css";
// import { usePathname } from "next/navigation";
export default function Layout({ children }) {
  //   const pathName = usePathname();
  return (
    <div>
      {/* {pathName !== "/login/loginteacher" && ( */}
      <ul className="about-menu">
        <li>
          <h4>Login Navbar</h4>
        </li>
        <li>
          <Link href={"/about"}> About Main</Link>
        </li>
        <li>
          <Link href={"/about/aboutcolleage"}> About Student </Link>
        </li>
        <li>
          <Link href={"/about/aboutstudent"}> About Teacher</Link>
        </li>
      </ul>
      {/* // )} */}
      {children}
    </div>
  );
}
