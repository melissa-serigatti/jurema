import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <div className={styles.ctas}>
          <h1>Esse é o site da mel e da jurema</h1>
        </div>
      </main>
    </div>
  );
}
