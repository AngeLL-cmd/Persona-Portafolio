import { useCallback, useEffect, useRef, useState } from 'react'
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import P3Menu from './P3Menu'
import Experience from './Experience'
import PersonalProjects from './PersonalProjects'
import Skills from './Skills'
import PageTransition from './PageTransition'
import Socials from './Socials'
import AboutMe from './AboutMe'
import { mediosGlobales, metaSitio, musicaFondo } from './siteContent'
import './App.css'

function MenuScreen() {
  const navigate = useNavigate()
  return (
    <div id="menu-screen">
      <video src={mediosGlobales.videoMenuPrincipal} autoPlay loop muted playsInline disablePictureInPicture />
      <P3Menu onNavigate={(page) => navigate(`/${page}`)} />
    </div>
  )
}

function AnimatedRoutes() {
  const location = useLocation()
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={
          <PageTransition><MenuScreen /></PageTransition>
        } />
        <Route path="/about" element={
          <PageTransition variant="about"><AboutMe /></PageTransition>
        } />
        <Route path="/experience" element={
          <PageTransition><Experience src={mediosGlobales.videoExperienciaFondo} /></PageTransition>
        } />
        <Route path="/projects" element={
          <PageTransition><PersonalProjects /></PageTransition>
        } />
        <Route path="/skills" element={
          <PageTransition><Skills /></PageTransition>
        } />
        <Route path="/socials" element={
          <PageTransition variant="socials"><Socials /></PageTransition>
        } />
      </Routes>
    </AnimatePresence>
  )
}

export default function App() {
  const audioRef = useRef(null)
  const [isMuted, setIsMuted] = useState(false)
  const [isPlaying, setIsPlaying] = useState(false)
  const [hasStarted, setHasStarted] = useState(false)

  useEffect(() => {
    document.title = metaSitio.tituloPagina
  }, [])

  useEffect(() => {
    const audio = audioRef.current
    if (!audio) return

    audio.loop = true
    audio.volume = 0.2
    audio.muted = isMuted
  }, [isMuted])

  useEffect(() => {
    const audio = audioRef.current
    if (!audio) return

    const onPlay = () => setIsPlaying(true)
    const onPause = () => setIsPlaying(false)

    audio.addEventListener('play', onPlay)
    audio.addEventListener('pause', onPause)

    return () => {
      audio.removeEventListener('play', onPlay)
      audio.removeEventListener('pause', onPause)
    }
  }, [])

  /** M mismo efecto que el botón HUD; Mayús+M silencia/restaura (antes M solo muteaba). */
  const togglePlayback = useCallback(async () => {
    const audio = audioRef.current
    if (!audio) return

    if (audio.paused) {
      try {
        await audio.play()
        setHasStarted(true)
      } catch {
        setIsPlaying(false)
      }
      return
    }

    audio.pause()
  }, [])

  useEffect(() => {
    const onKeyDown = (e) => {
      if (e.key !== 'm' && e.key !== 'M') return
      const tag = e.target?.tagName
      if (tag === 'INPUT' || tag === 'TEXTAREA') return

      if (e.shiftKey) {
        e.preventDefault()
        setIsMuted((prev) => !prev)
        return
      }

      e.preventDefault()
      void togglePlayback()
    }

    window.addEventListener('keydown', onKeyDown)

    return () => {
      window.removeEventListener('keydown', onKeyDown)
    }
  }, [togglePlayback])

  const bgmStatus = !hasStarted
    ? musicaFondo.etiquetas.pulsarParaEmpezar
    : isPlaying
      ? (isMuted ? musicaFondo.etiquetas.activaMuteada : musicaFondo.etiquetas.activa)
      : musicaFondo.etiquetas.pausada

  return (
    <>
      <audio ref={audioRef} src={mediosGlobales.audioFondo} preload="auto" />
      <AnimatedRoutes />

      <button
        type="button"
        className="bgm-hud"
        tabIndex={-1}
        aria-live="polite"
        aria-label={isPlaying ? musicaFondo.accesibilidadPausar : musicaFondo.accesibilidadReproducir}
        onMouseDown={(e) => e.preventDefault()}
        onClick={togglePlayback}
      >
        <div className="bgm-row"><span className="bgm-key">M</span><span>{bgmStatus}</span></div>
        <div className="bgm-title-wrap" aria-hidden="true">
          <div className="bgm-title-marquee">{musicaFondo.tituloMostrado}</div>
        </div>
      </button>
    </>
  )
}
