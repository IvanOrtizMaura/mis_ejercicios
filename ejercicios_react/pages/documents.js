import Document, {Head, Main, NextScript } from 'next/document';

 

export default class MyDocument extends Document{
  render(){
    return(
      <html lang="es">
        <Head>
          <meta name="description" content="A site for my programming portfolio"></meta>
          <meta charSet="utf-8" ></meta>
          <meta name="robots" content="noindex, nofollow"></meta>
          <meta name="viewport" content="width=device-width"></meta>
          <title>Usoib</title>
         <link rel="icon" href="/Images/usoib.ico"/>
         <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/nprogress/0.2.0/nprogress.min.css"/>
         <link href="https://fonts.googleapis.com/css2?family=Ballet&display=swap" rel="stylesheet"/>
         <link rel="preconnect" href="https://fonts.gstatic.com"/>
        </Head>
        <body>
          <Main/>
                    
          <NextScript/>

        </body>

        <style global jsx>{`
          body{
            font-family: 'Ballet', cursive;
          }
        `}</style>
      </html>
    )
  }
}