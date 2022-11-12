import Image from 'next/image'
import styles from './page.module.css'
import Link from "next/link";


const subPages:{key:number}[]=[]
for(let i=0; i<20; i++){
  subPages.push({key:i})
}

export default function Home() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>
         Testing scroll restore in nextjs 13
        </h1>
        <p className={styles.instructions}>Scroll down this page and click one of the links. Clicking the back button in your browser should result in the same scroll position restoring.</p>
        {subPages.map(({key})=>(
            <Link className={styles.pageLink} href={`/blog/${key}`} key={key}>Page: {key}</Link>
        ))}
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}
