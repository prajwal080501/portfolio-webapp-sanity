import '../styles/globals.css'
import { motion, AnimatePresence } from "framer-motion"
function MyApp({ Component, pageProps }) {
  return (
    <AnimatePresence>
    <Component {...pageProps} />
    </AnimatePresence>
  )
}

export default MyApp
