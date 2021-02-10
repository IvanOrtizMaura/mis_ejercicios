import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Layout from '/compos/Layout'
const hireme = () => (
    <Layout>
        <Head>
        <title>Usoib</title>
        <link rel="icon" href="/Images/usoib.ico"></link>
        </Head>

        <h1>Hire Me</h1>
        <p>
            You can hire me at {""}
            <a href="mailto:ivantiz45@gmail.com"> ivantiz45@gmail.com</a>
        </p>
    </Layout>
);
    

export default hireme;