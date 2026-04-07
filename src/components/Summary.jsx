export function Summary(){
    return (
        <section id="summary" className={styles.section}>
            <h2 className={styles.header}>Summary</h2>
            <p className={styles.text}>
                A versatile software developer with a strong foundation in both <b>full-stack</b> web technologies 
                and <b>low-level</b> systems programming.
            </p>
            <p className={styles.text}> 
                Passionate about building <b>interactive</b> applications and <b>optimizing</b> code base, 
                with experience spanning from <b>responsive</b> UI to <b>hardware-level</b> instruction sets.
            </p>
        </section>
    )
}

const styles = {
    section: "mb-5",
    header: " \
        pb-[4px] mb-[20px] \
        text-2xl font-bold \
        border-b border-main-acc-d light:border-main-acc-l \
        text-h2-d light:text-h2-l \
    ",
    text: "mb-2.5",
};