import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import Layout from './compos/Layout'


const index = () => ( 
    
    <Layout title="Home Pages">
        <Head>
            <title>Usoib</title>
        </Head>

            <Link href="/about">
            <a>Go to about</a>
            </Link>
            <p>Welcome to the home pages</p>
    </Layout>
    
);

export default index;