import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import Layout from './compos/Layout'
const about = () => (
    <Layout>
        <Head>
        <title>Usoib</title>
        <link rel="icon" href="Images/usoib.ico"/>
        </Head>
        <h1>About</h1>
        <Link href="/index_ej">
        <a>Go to Home Pages</a>
        </Link>
        <p>A JavaScript programer</p>
        <img src="Images/JavaScript-logo.png" alt="JavaScript" width="25%"/>
    </Layout>
);
export default about 