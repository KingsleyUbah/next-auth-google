import Head from 'next/head'
import Header from '../components/Header'
import styles from '../styles/Home.module.css'
import { useSession } from 'next-auth/react'

export default function Home() {
  const { data: session, status } = useSession()
  const loading = status === "loading"
  
  return (
    <div className={styles.container}>
      <Head>
        <title>Nextjs | Next-Auth</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className={styles.main}>        
        <div className={styles.user}>
           {loading && <div className={styles.title}>Loading...</div>}
           {
            session &&
              <>
                <p className={styles.title}>Welcome, {session.user.name ?? session.user.email}!</p>
               <p style={{ marginBottom: '10px' }}> </p> <br />
               <img src="profile-pic.jpg" alt="" className={styles.avatar} />
              </>
            }
           {
            !session &&
              <>
               <p className={styles.title}>Please log in to continue</p>
               <img src="no-user.jpg" alt="" className={styles.avatar} />               
              </>
           }
         </div>
      </main>
    </div>
  )
}