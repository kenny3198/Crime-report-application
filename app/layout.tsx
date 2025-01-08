import { Metadata } from "next"
import {Inter} from "next/font/google"
import "./globals.css";
import NavBar from "@/components/NavBar";

const inter = Inter({subsets:['latin']})


export const metadata: Metadata = {
  title: "Safe Report Application",
  description: "Securely And Anonymous report to law enforcement"
}
export default function ({children}: {children: React.ReactNode}) {
  return (
    <html lang="en">
    <body className={inter.className}>
       <div className="relative min-h-screen bg-black selection:bg-sky-500/20">
             {/* Gradient Backgrouund */}
             <div className="fixed inset-0 min-h-screen">
              <div className="absolute inset-0 h-full bg-[radial-gradient(circle_at_center,rgba(56,189,248,0.03), transparent_50%)]"/>
              <div className="absolute inset-0 h-full bg-[radial-gradient(circle_at_center,rgba(14,165,233,0.04), transparent_70%)]"/>

              </div>
              {/* Navbaar */}
              <NavBar />
              <main className="pt-17">
                      {children}
              </main>
          
       </div>
    </body>
  </html>
  )
}