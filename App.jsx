import './theme.css'
import Viewer from './Viewer.jsx'
import { SKOLA } from './config.js'

export default function App() {
  return <Viewer config={SKOLA} />
}
