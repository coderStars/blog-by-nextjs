import { useState } from 'react';
import Header from './header';
import Head from 'next/head';
import styles from '../styles/layout.module.css';

export default function Layout({ children }) {
    const [globalColor, setGlobalColor] = useState('light');

    function changeGlobalColor() {
        if (globalColor === 'light') {
            document.documentElement.className = 'dark';
        }
        else {
            document.documentElement.className = '';
        }
        setGlobalColor(globalColor === 'light' ? 'dark' : 'light')
    }

    return (<div className="layout" color-mode={globalColor}>
        <Head>
            <title>Create Next App</title>
        </Head>
        <Header setGlobalColor={changeGlobalColor}></Header>
        <div className={styles.content}>
            {children}
        </div>
    </div>);
}