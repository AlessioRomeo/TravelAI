import styles from "../page.module.scss";
import Link from "next/link";

export default function Home() {
  return (
    <main className={styles.main}>
      <form>
        <h1>Travel AI</h1>
        <input type="text" placeholder={"Enter name..."}/>
        <input type="text" placeholder={"Enter username..."}/>
        <input type="password" placeholder={"Enter password..."}/>
        <button>Login</button>
        <Link href={"/auth/login"}>Sign up if you don&apos;t have an account</Link>
      </form>
    </main>
  );
}
