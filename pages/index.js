import Link from 'next/link'
import styles from '../styles/Home.module.css'
import { getSortedPostsData } from '../lib/post';

export default function Home({ allPostsData }) {
  return (
    <div className={styles.container}>
      <h1>Hello Next World!</h1>
      <Link href="/">点击</Link>
      <section>
        <h2>Blog</h2>
        <ul>
          {allPostsData.map(({ id, date, title }) => (
            <li key={id}>
              {title}
              <br />
              {id}
              <br />
              {date}
            </li>
          ))}
        </ul>
      </section>
    </div>
  )
}


export async function getStaticProps(context) {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}