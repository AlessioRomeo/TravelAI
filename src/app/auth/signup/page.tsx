import Image from "next/image";
import styles from "./page.module.scss";
import Link from "next/link";

export default function Home() {
  return (
    <main className={styles.main}>
      <form>
        <h1>Travel AI</h1>
        <input type="text" placeholder={"Username"}/>
        <input type="password" placeholder={"Password"}/>
        <button>Login</button>
        <Link href={"/signup"}>Sign up if you don&apos;t have an account</Link>
      </form>
    </main>
  );
}
