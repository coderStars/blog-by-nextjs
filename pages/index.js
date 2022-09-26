import Link from 'next/link'
import Image from 'next/image';
import Layout from '../components/layout';
import styles from '../styles/Home.module.css'
import { getSortedPostsData } from '../lib/post';

export default function Home({ allPostsData }) {
  return (
    <Layout>
      <div className={styles.container}>
        <Image
          className={styles.logoImg}
          src="/images/profile.jpeg" // Route of the image file
          height={72} // Desired size with correct aspect ratio
          width={72} // Desired size with correct aspect ratio
          alt="Your Name"
        />
        <h1>Hello Next World!</h1>
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
    </Layout>
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