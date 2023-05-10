import Image from 'next/image'
import styles from './page.module.css'
import Link from "next/link";

export default function Home() {
  return (
      <>
        <h1>Hello Nextjs13</h1>
        <Link href={"/page1"}>page1へ</Link>
      </>

  )
}
