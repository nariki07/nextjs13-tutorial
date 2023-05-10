"use client"
import './globals.css'
import { Inter } from 'next/font/google'
import {useState} from "react";

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [count,setCount] = useState(0);
  return (
    <html lang="en">
    <h2>Header</h2>
    <button onClick={() => setCount(count + 1)}>+</button>
    <div>{count}</div>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
