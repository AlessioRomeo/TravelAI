import styles from "../page.module.scss";
import Link from "next/link";

export default function Home() {
  return (
    <main className={styles.main}>
      <form>
        <h1>Registration</h1>
        <input type="text" placeholder={"Enter name..."}/>
        <input type="text" placeholder={"Enter username..."}/>
        <input type="password" placeholder={"Enter password..."}/>
        <button>Sign up</button>
        <Link href={"/auth/login"}>Login if you have an account</Link>
      </form>
    </main>
  );
}
