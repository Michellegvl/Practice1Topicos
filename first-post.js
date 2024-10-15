import Link from "next/link";
import Image from "next/image";
import Head from 'next/head';
import Container from '../../components/container'

export default function FirstPost() {
    return (
        <>
        <Container>
        <Head>
         <title>My First Post</title>
      </Head>
        <h1>
            FirstPost
        </h1>

        <h2>
            <Link href="/">Back to home</Link>
        </h2>
        </Container>
        

        <Image src="/helado.JPG" alt="Delicious ice cream" width={250} height={150} />

        </>
    )
}
