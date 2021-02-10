import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
const about = () => (
    <div>
        <Head>
        <title>Usoib</title>
        <link rel="icon" href="Images/usoib.ico"/>
        </Head>
        <h1>About</h1>
        <Link href="/index_ej">
        <a>Go to Home Pages</a>
        </Link>
        <p>A JavaScript programer</p>
        <img src="Images/JavaScript-logo.png" alt="JavaScript" width="5%"/>
    </div>
);
export default about 