import Link from 'next/link';
import styles from '../styles/header.module.css';

export default function header({ setGlobalColor }) {
    return (
        <div className={styles.headerWrap}>
            <div className={styles.headerLeft}>
                <a className={styles.netName}>coderStar</a>
            </div>
            <ul className={styles.headerRight}>
                <Link href="/">Me</Link>
                <Link href="/blog">Blog</Link>
                <Link href="/project">Projects</Link>
                <a href='https://github.com/coderStars' className={styles.iconLink + ' iconfont'}>&#xe885;</a>
                <a href='https://github.com/coderStars' className={styles.iconLink + ' iconfont'}>&#xe69e;</a>
                <i className='iconfont' onClick={e => setGlobalColor()}>&#xe632;</i>
            </ul>
        </div>
    )
}