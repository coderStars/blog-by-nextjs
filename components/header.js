import Link from 'next/link';
import { useRouter } from 'next/router';
import styles from '../styles/header.module.css';

export default function Header({ setGlobalColor }) {
    const router = useRouter();
    const changeRouter = (href) => {
        router.push(href)
    }
    return (
        <div className={styles.headerWrap}>
            <div className={styles.headerLeft}>
                <a className={styles.netName} onClick={e => changeRouter('/')}>coderStar</a>
            </div>
            <ul className={styles.headerRight}>
                <i onClick={e => changeRouter('/blog')} className={styles.mobile + ' iconfont'}>&#xe6c9;</i>
                <i onClick={e => changeRouter('/project')} className={styles.mobile + ' iconfont'}>&#xe618;</i>
                <Link href="/"><a className={styles.lapTop}>Me</a></Link>
                <Link href="/blog" class={styles.lapTop}><a className={styles.lapTop}>Blog</a></Link>
                <Link href="/project" class={styles.lapTop}><a className={styles.lapTop}>Projects</a></Link>
                <a href='https://github.com/coderStars' className={styles.iconLink + ' iconfont'}>&#xe885;</a>
                <a href='https://github.com/coderStars' className={styles.iconLink + ' iconfont'}>&#xe69e;</a>
                <i className='iconfont' onClick={e => setGlobalColor()}>&#xe632;</i>
            </ul>
        </div>
    )
}