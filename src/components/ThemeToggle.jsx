import React, { useState, useEffect } from 'react';

export function ThemeToggle() {
  const storedTheme = localStorage.getItem('user_theme');
  const [theme, setTheme] = useState(() => {
    if (storedTheme != undefined) { return storedTheme; }
    const currentHour = new Date().getHours();
    return (currentHour >= 7 && currentHour < 21) ? 'light' : 'dark';
  }, []);

  useEffect(() => {
    const htmlElement = document.documentElement;
    if (theme === 'light') {
      htmlElement.classList.add('light');
    } else {
      htmlElement.classList.remove('light');
    }
    localStorage.setItem('user_theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme === 'dark' ? 'light' : 'dark');
  };

  return (
    <div className={styles.container}>
      <button className={styles.switch} onClick={toggleTheme} >
        {theme === 'dark' ? '☀️ Light theme' : '🌑  Dark theme'}
      </button>
    </div>
  );
}

const styles = {
  container: " \
    flex gap-2.5 \
    mx-auto \
    w-fit \
  ",
  switch: " \
    px-3 py-1 \
    font-semibold \
    border-3 rounded-full \
    text-secondary-d light:text-secondary-l \
    border-main-d light:border-main-l \
    bg-base-d light:bg-base-l \
    hover:text-secondary-l light:hover:text-secondary-d \
    hover:border-main-l light:hover:border-main-d \
    hover:bg-base-l light:hover:bg-base-d \
    cursor-pointer \
  ",
}