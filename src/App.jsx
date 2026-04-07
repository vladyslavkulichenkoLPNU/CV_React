import { FeedbackWindow } from './components/ContactForm';
import { Header } from './components/Header';
import { Summary } from './components/Summary';
import { Education } from './components/Education';
import { Skills } from './components/Skills';
import { Footer } from './components/Footer';
import { Reviews } from './components/Reviews';
import { ThemeToggle } from './components/ThemeToggle';

export default function App() {
    return (
        <>
        <FeedbackWindow />
        <main className={styles.main}>
            <ThemeToggle />
            <Header />
            <hr className={styles.hr} />
            <Summary />
            <Education />
            <Skills />
            <Reviews />
        </main>
        <Footer />
        </>
    );
}

const styles = {
    main: " \
        my-[40px] mx-auto \
        py-5 px-10 \
        max-w-200 \
        border-solid rounded-2xl \
        bg-base-bg-d light:bg-base-bg-l \
        shadow-[0px_0px_32px_16px] \
        shadow-main-hl-d light:shadow-main-hl-l \
    ",
    hr: " \
        h-0.75 \
        mt-2.5 mb-5 \
        border-none \
        bg-base-acc-d light:bg-base-acc-l \
    "
}