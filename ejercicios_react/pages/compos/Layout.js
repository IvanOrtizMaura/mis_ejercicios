import React from 'react'
import Link from 'next/link'
import Head from 'next/head'

const layout = ({children, title}) => (
 <div>
     <Head>
         <title>Usoib</title>
         <link rel="icon" href="/Images/usoib.ico"></link>
     </Head>
     <header>
        <Link href="/index_ej"><a>Home</a></Link>
        <Link href="/about"><a>About</a></Link>
        <Link href="/hireme"><a>Hire Me</a></Link>
     </header>
     <h1>{title}</h1>

    {children}
    

     <footer>
        footer
     </footer>
 </div>
);
export default layout;