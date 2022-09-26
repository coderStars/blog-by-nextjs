import Header from './header';
import Head from 'next/head';
import styles from '../styles/layout.module.css';


export default function Layout({ children }) {
    return (<div className={styles.container}>
        <Head>
            <title>Create Next App</title>
            <link rel="stylesheet" href="/fonts/iconfont/iconfont.css"></link>
        </Head>
        <Header></Header>
        <div className={styles.content}>
            {children}
        </div>
    </div>);
}