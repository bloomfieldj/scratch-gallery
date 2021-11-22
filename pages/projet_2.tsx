import Link from 'next/link'
import Navbar from '../components/Navbar'
import styles from '../styles/Home.module.css'

export default function Projet_1() {
    return (
    <>
     <Navbar/>
    <main className={styles.main}>
      <h1 className={styles.title}>
      Projet 1: Animer mon nom!
      </h1>
      <div className= "gallery">
        <iframe src="https://scratch.mit.edu/projects/396054091/embed" width="485" height="402" frameBorder="0" allowFullScreen ></iframe>
        <iframe src="https://scratch.mit.edu/projects/396054091/embed" width="485" height="402" frameBorder="0" allowFullScreen ></iframe>
        <iframe src="https://scratch.mit.edu/projects/396054091/embed" width="485" height="402" frameBorder="0" allowFullScreen ></iframe>
        <iframe src="https://scratch.mit.edu/projects/396054091/embed" width="485" height="402" frameBorder="0" allowFullScreen ></iframe>
        <iframe src="https://scratch.mit.edu/projects/396054091/embed" width="485" height="402" frameBorder="0" allowFullScreen ></iframe>
        <iframe src="https://scratch.mit.edu/projects/396054091/embed" width="485" height="402" frameBorder="0" allowFullScreen ></iframe>
        <iframe src="https://scratch.mit.edu/projects/396054091/embed" width="485" height="402" frameBorder="0" allowFullScreen ></iframe>
        <iframe src="https://scratch.mit.edu/projects/396054091/embed" width="485" height="402" frameBorder="0" allowFullScreen ></iframe>
        <iframe src="https://scratch.mit.edu/projects/396054091/embed" width="485" height="402" frameBorder="0" allowFullScreen ></iframe>
        <iframe src="https://scratch.mit.edu/projects/396054091/embed" width="485" height="402" frameBorder="0" allowFullScreen ></iframe>
      </div>
    </main>

    <footer className={styles.footer}>
      Créé par le Vénérable M. Bloomfield
      </footer>
  </>
    )
  }