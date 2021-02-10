import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
const index = () => ( 
    <div>
        <Head>
        <title>Usoib</title>
        <link rel="icon" href="Images/usoib.ico"/>
        </Head>
        <div>
            <h1>Home pages</h1>
            <Link href="/about">
            <a>Go to about</a>
            </Link>
            <p>Welcome to the home pages</p>
        </div>
    </div>
    
   
);

export default index;