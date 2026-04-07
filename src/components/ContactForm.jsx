import React, { useState, useEffect } from 'react';

export function FeedbackWindow() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 60000);
    return () => clearTimeout(timer);
  }, []);

  if (!isOpen) return null;

  return (
    <div className={styles.window}>
      <div className={styles.container}>
        <button className={styles.closeBtn} onClick={() => setIsOpen(false)}>&times;</button>
        <h2 className={styles.header}>Contact Form</h2>
        <hr className={styles.hr}/>
        <form 
          className={styles.form} 
          onSubmit={async (e) => {
            e.preventDefault();
            const formData = new FormData(e.target);
            const formValues = Object.fromEntries(formData.entries());

            try {
              const response = await fetch('https://formspree.io/f/xzdjlqpk', {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify(formValues),
              });

              if (!response.ok) {
                throw new Error(`Server error: ${response.status}`);
              }

              alert('Thank you for the review!');
              setIsOpen(false);
            } catch (error) {
              console.error('Error:', error);
            }
          }}
        >
          <input className={styles.input} 
            name="name" type="text" placeholder="Name ..." required
          />
          <input className={styles.input} 
            name="email" type="email" placeholder="Email ..." required
          />
          <input className={styles.input} 
            name="phone" type="tel" placeholder="Phone number ..." required
          />
          <textarea 
            className={styles.input + styles.textArea} name="message" 
            maxLength="256" rows="3" placeholder="Message ..." required
          ></textarea>
          <button className={styles.submitBtn} type="submit">Send</button>
        </form>
      </div>
    </div>
  );
}

const styles = {
  window: " \
    flex fixed \
    top-0 left-0 \
    w-full h-full \
    z-[1000] \
    justify-center \
    items-center \
    bg-black/50 \
  ",
  container: " \
    relative \
    p-[30px] \
    w-[90%] max-w-[400px] \
    rounded-lg \
    bg-main-bg-d \
    light:bg-main-bg-l \
  ",
  header: " \
    text-center text-2xl \
    font-bold \
    text-h1-d light:text-h1-l\
  ",
  hr: " \
    mt-2.5 mb-5 \
    h-0.75 \
    border-none \
    bg-base-acc-d light:bg-base-acc-l \
  ",
  closeBtn: " \
    absolute \
    top-[10px] right-[15px] \
    text-2xl text-gray-500 \
    border-none \
    cursor-pointer \
    bg-transparent \
    hover:text-p-d \
    light:hover:text-p-l \
  ",
  form: " \
    flex flex-col gap-2.5 \
  ",
  input: " \
    p-2.5 \
    w-full \
    border border-gray-500 rounded \
    text-p-d bg-secondary-bg-d \
    light:text-p-l light:bg-secondary-bg-l \
  ",
  textArea: " \
    min-h-[64px] \
  ",
  submitBtn: " \
    p-2 text-[1.2rem] font-bold \
    border-none rounded \
    cursor-pointer \
    text-p-d bg-base-d hover:bg-main-d \
    light:text-p-l light:bg-base-l light:hover:bg-main-l \
  "
};