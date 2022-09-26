import styles from '../styles/header.module.css';

export default function header() {
    return (
        <div className={styles.headerWrap}>
            <div className={styles.headerLeft}>
                <a className={styles.netName}>coderStar</a>
            </div>
            <ul className={styles.headerRight}>
                <li className={styles.rigthitem}>Me</li>
                <li className={styles.rigthitem}>Blog</li>
                <li className={styles.rigthitem}>Projects</li>
                <a href='https://github.com/coderStars' className={styles.iconLink + ' iconfont'}>&#xe885;</a>
                <a href='https://github.com/coderStars' className={styles.iconLink + ' iconfont'}>&#xe69e;</a>
                <a href='https://github.com/coderStars' className='iconfont'>&#xe632;</a>
            </ul>
        </div>
    )
}