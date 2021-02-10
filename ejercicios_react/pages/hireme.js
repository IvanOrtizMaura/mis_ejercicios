import React from 'react';
import Leyout from './compos/Layout'
import Link from 'next/link';
import Layout from './compos/Layout';
const hireme = () => (
    <Layout title="Hire Me">
        <p>
            You can hire me at {""}
            <a href="mailto:ivantiz45@gmail.com"> ivantiz45@gmail.com</a>
        </p>
    </Layout>
);
    

export default hireme;