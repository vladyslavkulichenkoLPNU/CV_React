export function Skills() {
    return (
        <section id="skills" className={styles.section}>
            <h2 className={styles.header}>Skills</h2>
            <div className={styles.skillContainer}>
                <div className={styles.skillCard + styles.hardSkillsCard}>
                    <h3 className={styles.skillCardHeader + styles.hardSkillsHeader}>Hard</h3>
                    <ul className={styles.list}>
                        <li className={styles.listItem}>Low-Level & Hardware Programming</li>
                        <li className={styles.listItem}>Optimization and Refactoring</li>
                        <li className={styles.listItem}>Full-Stack Web Development</li>
                        <li className={styles.listItem}>Database Management</li>
                        <li className={styles.listItem}>Version Control</li>
                    </ul>
                </div>
                <div className={styles.skillCard + styles.softSkillsCard}>
                    <h3 className={styles.skillCardHeader + styles.softSkillsHeader}>Soft</h3>
                    <ul className={styles.list}>
                        <li className={styles.listItem}>Critical Thinking</li>
                        <li className={styles.listItem}>Adaptability</li>
                        <li className={styles.listItem}>Problem-Solving</li>
                    </ul>
                </div>
            </div>
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
  skillContainer: " \
    flex gap-6.25 \
    mt-3.75 \
    max-[600px]:flex-col \
  ",
  skillCard: " \
    flex-1 \
    pb-5 \
    overflow-hidden \
    border-none rounded-lg \
    bg-secondary-bg-d light:bg-secondary-bg-l \
    hover:-translate-y-1.25 \
    !transition-all !duration-300 !ease \
  ",
  skillCardHeader: " \
    mt-0 px-5 py-1.5 \
    text-xl text-center font-bold \
    text-p-d light:text-p-l \
  ",
  hardSkillsCard: " \
    shadow-[0px_0px_16px_8px_hsla(110,65%,40%,0.5)] \
    hover:shadow-[0px_0px_16px_12px_hsla(110,65%,50%,0.5)] \
  ",
  softSkillsCard: " \
    shadow-[0px_0px_16px_8px_hsla(270,65%,45%,0.5)] \
    hover:shadow-[0px_0px_16px_12px_hsla(270,65%,55%,0.5)] \
  ",
  hardSkillsHeader: "bg-[hsl(110,65%,45%)]",
  softSkillsHeader: "bg-[hsl(270,65%,50%)]",
  subHeader: " \
    mt-2.5 mb-1.25 \
    font-bold text-[1.1rem] \
    text-h3-d \
  ",
  list: " \
    px-5 py-0 \
    mt-3.75 ml-5 \
    list-disc \
  ",
  listItem: "mb-2",
  text: "mb-2.5",
};