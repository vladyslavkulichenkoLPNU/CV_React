export function Header() {
    return (
        <header className={styles.container}>
            <h1 className={styles.header}>Vladyslav Kulichenko</h1>
            <address className={styles.textSpace}>
                Email: <a className={styles.link} href="mailto:Kulichenko.Vladyslav.V@gmail.com">
                    Kulichenko.Vladyslav.V@gmail.com
                </a> |
                Phone: (067) 652-0449 |
                GitHub: <a className={styles.link} href="https://github.com/VladyslavKulichenko"> 
                    Vladyslav Kulichenko
                </a>
            </address>
        </header>
    );
}

const styles = {
    container: " \
        text-center \
    ",
    header: " \
        text-[2.5rem] font-bold \
        text-h1-d light:text-h1-l \
    ",
    textSpace: " \
        text-[0.9rem] \
        text-p-faint-d light:text-p-faint-l \
    ",
    link: " \
        no-underline \
        transition-colors duration-200 ease-in-out \
        hover:underline \
        text-link-d light:text-link-l \
        hover:text-link-hover-d light:hover:text-link-hover-l\
    ",
};