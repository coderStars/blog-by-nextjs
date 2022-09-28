import Image from 'next/image';
import Layout from '../components/layout';
import styles from '../styles/home.module.css'
import { getSortedPostsData } from '../lib/post';

export default function Home({ allPostsData }) {
  return (
    <Layout>
      <div className={styles.container}>
        <header className={styles.headerWrap}>
          <Image
            className={styles.logoImg}
            src="/images/profile.jpeg" // Route of the image file
            height={72} // Desired size with correct aspect ratio
            width={72} // Desired size with correct aspect ratio
            alt="coderStar"
          />
          <div className={styles.logoRightWrap}>
            <h1 className={styles.logoRightTopMark}>CoderStar</h1>
            <h4 className={styles.logoRightBottomMark}>Front-End Developer / Worker / Beijing</h4>
          </div>
        </header>
        <section className={styles.contentWrap}>
          <p>
            Hi, I'm coderStar, a ordinary front-end worker in Beijing, I like ride a bike and foot it.
            I'm learning react、vue3、ts.
          </p>
          <p>
            I've been working for four years, but, I haven't learned much in that time。So What do I think should be done,
            Start with blogs, I hope to make a breakthrough by the end of this year.
          </p>
          <p>
            I once heard such a saying, it is just do it! ok let's do it!
          </p>
        </section>
      </div >
    </Layout >
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