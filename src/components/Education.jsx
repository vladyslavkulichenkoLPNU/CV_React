export function Education() {
  return (
    <section id="education" className={styles.section}>
      <h2 className={styles.header}>Education</h2>
      <article className={styles.card}>
        <h3 className={styles.subHeader}>
          Bachelor's degree (<em>Cyber Security \ Information Security Management</em>)
        </h3>
        <p className={styles.text}>
          Lviv Polytechnic National University | <em>Expected - 2027</em>
        </p>
      </article>
      <article className={styles.card}>
        <h3 className={styles.subHeader}>Upper secondary</h3>
        <p className={styles.text}>Odessa Lyceum 1 | <em>2023</em></p>
      </article>
      <article className={styles.card}>
        <h3 className={styles.subHeader}>Lower secondary</h3>
        <p className={styles.text}>Odessa Gymnasium 1 | <em>2021</em></p>
      </article>
    </section>
  );
}

const styles = {
  section: "mb-5",
  header: " \
    pb-[4px] mb-[20px] \
    text-2xl font-bold \
    border-b border-main-acc-d light:border-main-acc-l \
    text-h2-d light:text-h2-l \
  ",
  card: " \
    px-2 mx-2 \
    rounded-2xl \
    hover:bg-secondary-bg-d light:hover:bg-secondary-bg-l\
    hover:scale-105 \
    !transition-all !duration-300 !ease \
  ",
  subHeader: " \
    mt-2.5 mb-1.25 \
    font-bold text-[1.1rem] \
    text-h3-d light:text-h3-l \
  ",
  text: "mb-2.5",
};