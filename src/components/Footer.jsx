import React, { useState, useEffect } from 'react';

export function Footer() {
  const [systemInfo, setSystemInfo] = useState({ browser: '', platform: '', language: '' });

  useEffect(() => {
    const currentSystemInfo = {
      browser: navigator.userAgent,
      platform: navigator.platform,
      language: navigator.language,
    };
    localStorage.setItem('system_info', JSON.stringify(currentSystemInfo));

    const savedSystemInfo = localStorage.getItem('system_info');
    if (savedSystemInfo) {
      const parsedData = JSON.parse(savedSystemInfo);
      setSystemInfo(parsedData);
    }
  }, []);

  return (
    <footer className={styles.container}>
      <p><strong>Platform:</strong> {systemInfo.platform}</p>
      <p><strong>Browser:</strong> {systemInfo.browser}</p>
      <p><strong>Language:</strong> {systemInfo.language}</p>
    </footer>
  );
}

const styles = {
  container: " \
    flex gap-[15px] max-[600px]:flex-col \
    place-center \
    py-[20px] px-[10px] \
    mt-[10px] \
    text-p-d light:text-p-l \
    bg-secondary-bg-d light:bg-secondary-bg-l \
  ",
};