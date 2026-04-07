import React, { useState, useEffect } from 'react';

export function Reviews() {
  const [reviews, setComments] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchComments = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts/7/comments');
        if (!response.ok) {
          throw new Error('Could not download data!');
        }
        const data = await response.json();
        setComments(data);
      } catch (error) {
        console.error('Error:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchComments();
  }, []);

  if (loading) {
    return <p>Loading reviews...</p>;
  }

  return (
    <section className={styles.section}>
      <h2 className={styles.header}>Employers' reviews</h2>
      <div className={styles.cardContainer}>
        {reviews.map((review) => (
          <div key={review.id} className={styles.card}>
            <h4><b>{review.name}</b> (<u>{review.email}</u>)</h4>
            <p>{review.body}</p>
          </div>
        ))}
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
  cardContainer: "py-1.5 max-h-64 overflow-y-scroll [scrollbar-width:thin]",
  card: "my-1.5 px-2 rounded-lg bg-secondary-bg-d light:bg-secondary-bg-l",
};