import React from 'react'
import Link from 'next/link'

const layout = ({children, title}) => (
 <div>
     <header>
        <Link href="/index_ej"><a>Home</a></Link>
        <Link href="/about"><a>About</a></Link>
        <Link href="/hireme"><a>Hire Me</a></Link>
     </header>


    {children}
    <h1>{title}</h1>

     <footer>
        footer
     </footer>
 </div>
);
export default layout;