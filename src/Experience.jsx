import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import defaultBackground from "./assets/main2-web.mp4";
import { experienciaUi, experiencias } from "./siteContent";

const MISSIONS = experiencias;

function flattenTech(tecnologias) {
  return tecnologias.flatMap((s) =>
    s.split(",").map((t) => t.trim()).filter(Boolean)
  );
}

function statusClass(status) {
  if (status === "COMPLETE") return "done";
  if (status === "INCOMING") return "incoming";
  return "default";
}

export default function Experience({ src }) {
  const navigate = useNavigate();
  const [active, setActive] = useState(0);
  const [mounted, setMounted] = useState(false);
  const resolvedBackground = src || defaultBackground;

  const current = MISSIONS[active];
  const t = experienciaUi;
  const etiquetaEstado = t.textoPorEstado[current.estado] ?? current.estado;

  useEffect(() => {
    const timer = setTimeout(() => setMounted(true), 80);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "ArrowUp") {
        e.preventDefault();
        setActive((i) => (i - 1 + MISSIONS.length) % MISSIONS.length);
      }
      if (e.key === "ArrowDown") {
        e.preventDefault();
        setActive((i) => (i + 1) % MISSIONS.length);
      }
      if (e.key === "Escape") {
        navigate(-1);
      }
    };

    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [navigate]);

  const movePrev = () => setActive((i) => (i - 1 + MISSIONS.length) % MISSIONS.length);
  const moveNext = () => setActive((i) => (i + 1) % MISSIONS.length);

  const techTokens = flattenTech(current.tecnologias);

  return (
    <div id="menu-screen" className="exp-screen">
      <video src={resolvedBackground} autoPlay loop muted playsInline preload="auto" disablePictureInPicture className="exp-bg-video" />

      <div className="exp-bg-overlay" aria-hidden="true" />
      <div className="exp-noise" aria-hidden="true" />

      <div className={`exp-shell ${mounted ? "mounted" : ""}`}>
        <header className="exp-header">
          <div className="exp-header-kicker">{t.codigoCabecera}</div>
          <h1>{t.titulo}</h1>
          <p>{t.subtitulo}</p>
        </header>

        <div className="exp-layout">
          <aside className="exp-nav" aria-label="Navegación de experiencias">
            <div className="exp-nav-top">
              <span>{t.logTitulo}</span>
              <span>{String(active + 1).padStart(2, "0")}/{String(MISSIONS.length).padStart(2, "0")}</span>
            </div>

            <button type="button" className="exp-nav-action" onClick={movePrev} aria-label="Experiencia anterior">
              {t.archivoPrevio}
            </button>

            <div className="exp-nav-list">
              {MISSIONS.map((mission, index) => {
                const isActive = index === active;
                const estadoTxt = t.textoPorEstado[mission.estado] ?? mission.estado;
                return (
                  <button
                    key={mission.id}
                    type="button"
                    className={`exp-nav-item ${isActive ? "active" : ""}`}
                    onClick={() => setActive(index)}
                  >
                    <span className="exp-nav-code">{mission.codigoMision}</span>
                    <span className="exp-nav-role">{mission.rol}</span>
                    <span className="exp-nav-status">{estadoTxt}</span>
                  </button>
                );
              })}
            </div>

            <button type="button" className="exp-nav-action" onClick={moveNext} aria-label="Siguiente experiencia">
              {t.archivoSiguiente}
            </button>
          </aside>

          <main className="exp-focus-area" aria-live="polite">

            <article key={current.id} className="exp-dossier-card">
              <div className="exp-card-stripe" aria-hidden="true" />

              <div className="exp-card-top">
                <div className="exp-op-tag">{current.operacion}</div>
                <div className={`exp-status ${statusClass(current.estado)}`}>{etiquetaEstado}</div>
              </div>

              <div className="exp-title-wrap">
                <div className="exp-mission-code">{current.codigoMision}</div>
                <h2>{current.rol}</h2>
              </div>

              <div className="exp-meta-grid">
                <div>
                  <span className="exp-meta-label">{t.etiquetasTarjeta.empresa}</span>
                  <span className="exp-meta-value">{current.organizacion}</span>
                </div>
                <div>
                  <span className="exp-meta-label">{t.etiquetasTarjeta.fechas}</span>
                  <span className="exp-meta-value">{current.fechas}</span>
                </div>
              </div>

              <div className="exp-dossier-body">
                <section className="exp-summary">
                  <h3>{t.etiquetasTarjeta.resumen}</h3>
                  <p>{current.resumen}</p>
                </section>

                <section className="exp-section">
                  <h3>{t.etiquetasTarjeta.tech}</h3>
                  <div className="exp-chip-row">
                    {current.tecnologias.map((item) => (
                      <span className="exp-chip" key={item}>
                        {item}
                      </span>
                    ))}
                  </div>
                </section>

                <section className="exp-section">
                  <h3>{t.etiquetasTarjeta.briefing}</h3>
                  <ul className="exp-list">
                    {current.logros.map((item, idx) => (
                      <li key={`${current.id}-logro-${idx}`}>{item}</li>
                    ))}
                  </ul>
                </section>

                <section className="exp-section exp-unlocked">
                  <h3>{t.etiquetasTarjeta.habilidades}</h3>
                  <div className="exp-chip-row">
                    {current.habilidadesDesbloqueadas.map((item, idx) => (
                      <span className="exp-chip unlock" key={`${current.id}-hab-${idx}`}>
                        {item}
                      </span>
                    ))}
                  </div>
                </section>
              </div>
            </article>
          </main>

          <section className="exp-visual" aria-label={t.lateralAria}>
            <div key={current.id} className="exp-visual-frame">
              {current.visual ? (
                <img src={current.visual} alt="" />
              ) : (
                <div className="exp-visual-placeholder">
                  <div className="exp-visual-ph-inner">
                    <p className="exp-visual-ph-code">{current.codigoMision}</p>
                    <p className="exp-visual-ph-op">{current.operacion}</p>
                    <p className="exp-visual-ph-org">{current.organizacion}</p>
                    <p className="exp-visual-ph-tech-title">{t.etiquetasTarjeta.tech}</p>
                    <div className="exp-visual-ph-chips">
                      {techTokens.map((tok, idx) => (
                        <span className="exp-visual-ph-chip" key={`${current.id}-ph-${idx}`}>
                          {tok}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              )}
              <div className="exp-visual-gradient" />
             <div className="exp-visual-scan" />
              <div className="exp-visual-label">
                <span>{t.etiquetasTarjeta.liderMision}</span>
                <strong>{current.referencia}</strong>
              </div>
            </div>
          </section>
        </div>
      </div>

      <div className={`exp-footer${mounted ? " mounted" : ""}`}>
        <div className="exp-footer-row">
          <span className="exp-footer-key">↑↓</span>
          <span>{t.pie.cambiar}</span>
        </div>
        <div className="exp-footer-row">
          <span className="exp-footer-key">ESC</span>
          <span>{t.pie.volver}</span>
        </div>
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Anton&family=Bebas+Neue&display=swap');

        .exp-screen {
          position: relative;
          color: #ffffff;
          overflow: hidden;
        }

        .exp-bg-video {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .exp-bg-overlay {
          position: absolute;
          inset: 0;
          background:
            linear-gradient(110deg, rgba(2, 10, 25, 0.78) 10%, rgba(4, 20, 48, 0.6) 36%, rgba(7, 27, 58, 0.25) 58%, rgba(3, 10, 24, 0.7) 100%),
            radial-gradient(circle at 80% 50%, rgba(67, 198, 255, 0.22), transparent 48%),
            radial-gradient(circle at 22% 26%, rgba(255, 53, 80, 0.12), transparent 44%);
          backdrop-filter: blur(1px);
          z-index: 1;
        }

        .exp-noise {
          position: absolute;
          inset: 0;
          z-index: 2;
          pointer-events: none;
          opacity: 0.2;
          mix-blend-mode: soft-light;
          background-image: repeating-linear-gradient(
            0deg,
            rgba(255, 255, 255, 0.02) 0,
            rgba(255, 255, 255, 0.02) 1px,
            transparent 1px,
            transparent 4px
          );
        }

        .exp-shell {
          position: relative;
          z-index: 3;
          min-height: 100vh;
          padding: 2.2vh 3vw 9vh;
          opacity: 0;
          transform: translateY(10px);
          transition: opacity 0.45s ease, transform 0.45s ease;
        }

        .exp-shell.mounted {
          opacity: 1;
          transform: translateY(0);
        }

        .exp-header {
          margin-bottom: 18px;
          animation: exp-fade-down 0.55s ease;
        }

        .exp-header-kicker {
          font-family: 'Bebas Neue', sans-serif;
          letter-spacing: 2px;
          font-size: clamp(15px, 0.92vw, 19px);
          color: rgba(255, 255, 255, 0.88);
        }

        .exp-header h1 {
          margin: 0;
          font-family: 'Anton', sans-serif;
          font-size: clamp(42px, 5.2vw, 86px);
          letter-spacing: 1.2px;
          line-height: 0.9;
          color: #ffffff;
          text-shadow: 0 0 18px rgba(79, 201, 255, 0.45);
        }

        .exp-header p {
          margin: 8px 0 0;
          font-family: 'Bebas Neue', sans-serif;
          letter-spacing: 1px;
          font-size: clamp(17px, 1.3vw, 25px);
          color: rgba(255, 255, 255, 0.88);
        }

        .exp-layout {
          display: grid;
          grid-template-columns: minmax(220px, 0.8fr) minmax(470px, 1.2fr) minmax(320px, 1fr);
          gap: clamp(16px, 1.7vw, 30px);
          align-items: stretch;
          height: clamp(560px, 66vh, 760px);
        }

        .exp-nav {
          position: relative;
          border: 1px solid rgba(165, 236, 255, 0.34);
          background: linear-gradient(160deg, rgba(4, 17, 39, 0.84), rgba(6, 28, 65, 0.62));
          box-shadow: 0 10px 28px rgba(2, 8, 18, 0.5), inset 0 0 0 1px rgba(255, 255, 255, 0.08);
          clip-path: polygon(0 0, 100% 0, 100% 96%, calc(100% - 20px) 100%, 0 100%);
          padding: 14px;
          display: flex;
          flex-direction: column;
          gap: 10px;
          height: 100%;
        }

        .exp-nav-top {
          display: flex;
          justify-content: space-between;
          align-items: center;
          font-family: 'Bebas Neue', sans-serif;
          font-size: 18px;
          letter-spacing: 1.2px;
          color: #ffffff;
          border-bottom: 1px solid rgba(255, 255, 255, 0.18);
          padding-bottom: 8px;
        }

        .exp-nav-action {
          border: 1px solid rgba(173, 241, 255, 0.3);
          background: rgba(9, 42, 86, 0.55);
          color: #ffffff;
          font-family: 'Bebas Neue', sans-serif;
          font-size: 16px;
          letter-spacing: 1px;
          padding: 8px 10px;
          cursor: pointer;
          transition: transform 0.25s ease, border-color 0.25s ease, background 0.25s ease;
        }

        .exp-nav-action:hover {
          transform: translateX(3px);
          border-color: rgba(215, 245, 255, 0.72);
          background: rgba(10, 61, 128, 0.65);
        }

        .exp-nav-list {
          display: flex;
          flex-direction: column;
          gap: 9px;
          margin: 2px 0;
        }

        .exp-nav-item {
          border: 1px solid rgba(255, 255, 255, 0.14);
          background: rgba(7, 26, 61, 0.5);
          padding: 9px;
          display: grid;
          gap: 2px;
          text-align: left;
          cursor: pointer;
          transform: translateX(0);
          transition: transform 0.25s ease, background 0.25s ease, border-color 0.25s ease, opacity 0.25s ease;
          opacity: 0.55;
        }

        .exp-nav-item.active {
          opacity: 1;
          border-color: rgba(198, 240, 255, 0.8);
          background: linear-gradient(120deg, rgba(14, 78, 146, 0.68), rgba(10, 41, 85, 0.84));
          transform: translateX(7px) skewX(-6deg);
          box-shadow: 0 0 18px rgba(115, 216, 255, 0.35);
        }

        .exp-nav-item:hover {
          opacity: 0.92;
        }

        .exp-nav-code {
          font-family: 'Bebas Neue', sans-serif;
          letter-spacing: 1px;
          font-size: 17px;
          color: #ffffff;
        }

        .exp-nav-role {
          font-family: 'Anton', sans-serif;
          font-size: 14px;
          color: rgba(255, 255, 255, 0.9);
          line-height: 1.12;
        }

        .exp-nav-status {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 14px;
          letter-spacing: 1px;
          color: rgba(255, 255, 255, 0.92);
        }

        .exp-focus-area {
          display: flex;
          justify-content: center;
          align-items: stretch;
          padding-top: 0px;
          min-height: 66vh;
          height: 100%;
        }

        .exp-hint-card {
          position: absolute;
          top: 52%;
          width: 146px;
          height: 122px;
          border: 1px solid rgba(255, 255, 255, 0.2);
          background: linear-gradient(160deg, rgba(9, 27, 55, 0.7), rgba(9, 25, 48, 0.42));
          backdrop-filter: blur(2px);
          display: grid;
          place-content: center;
          text-align: center;
          gap: 4px;
          color: rgba(255, 255, 255, 0.65);
          font-family: 'Bebas Neue', sans-serif;
          letter-spacing: 1px;
          pointer-events: none;
          overflow: hidden;
        }

        .exp-hint-card small {
          font-size: 13px;
          color: rgba(255, 255, 255, 0.56);
        }

        .exp-hint-left {
          left: -36px;
          transform: translateY(-50%) rotate(-8deg);
        }

        .exp-hint-right {
          right: -36px;
          transform: translateY(-50%) rotate(8deg);
        }

        .exp-dossier-card {
          position: relative;
          width: min(100%, 720px);
          border: 1px solid rgba(197, 244, 255, 0.42);
          background:
            linear-gradient(140deg, rgba(6, 21, 48, 0.95) 0%, rgba(9, 40, 89, 0.88) 56%, rgba(10, 35, 77, 0.95) 100%);
          box-shadow: 0 20px 48px rgba(1, 6, 14, 0.62), 0 0 38px rgba(94, 205, 255, 0.2);
          clip-path: polygon(0 0, 100% 0, 100% 94%, calc(100% - 22px) 100%, 0 100%, 0 16px);
          padding: 20px;
          animation: exp-card-in 0.45s cubic-bezier(0.22, 0.92, 0.29, 1) both;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          height: 100%;
          min-height: 0;
        }

        .exp-dossier-card > .exp-card-top,
        .exp-dossier-card > .exp-title-wrap,
        .exp-dossier-card > .exp-meta-grid {
          flex-shrink: 0;
        }

        .exp-card-stripe {
          position: absolute;
          inset: -50% auto auto -24%;
          width: 78%;
          height: 220%;
          transform: rotate(18deg);
          background: linear-gradient(180deg, rgba(74, 201, 255, 0.16), rgba(74, 201, 255, 0));
          pointer-events: none;
        }

        .exp-card-top {
          position: relative;
          z-index: 1;
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 12px;
        }

        .exp-op-tag {
          font-family: 'Bebas Neue', sans-serif;
          letter-spacing: 1.2px;
          font-size: 18px;
          color: #ffffff;
          border: 1px solid rgba(255, 255, 255, 0.3);
          padding: 4px 10px;
          background: rgba(5, 32, 76, 0.66);
        }

        .exp-status {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 18px;
          letter-spacing: 1px;
          padding: 4px 10px;
          color: #ffffff;
          border: 1px solid rgba(255, 255, 255, 0.25);
          background: rgba(83, 169, 213, 0.32);
        }

        .exp-status.done {
          background: rgba(56, 175, 126, 0.38);
          box-shadow: 0 0 16px rgba(56, 175, 126, 0.28);
        }

        .exp-status.incoming {
          background: rgba(175, 68, 84, 0.38);
          box-shadow: 0 0 16px rgba(230, 84, 106, 0.2);
        }

        .exp-title-wrap {
          position: relative;
          z-index: 1;
          margin-top: 12px;
          font-size: clamp(26px, 2vw, 40px);
        }

        .exp-mission-code {
          font-family: 'Bebas Neue', sans-serif;
          font-size: clamp(18px, 1.05vw, 24px);
          letter-spacing: 2px;
          color: rgba(255, 255, 255, 0.86);
        }

        .exp-title-wrap h2 {
          margin: 4px 0 0;
          font-family: 'Anton', sans-serif;
          font-size: clamp(32px, 2.5vw, 48px);
          line-height: 0.95;
          letter-spacing: 0.7px;
          color: #ffffff;
          text-shadow: 0 0 15px rgba(114, 216, 255, 0.32);
        }

        .exp-meta-grid {
          position: relative;
          z-index: 1;
          margin-top: 14px;
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 12px;
        }

        .exp-meta-grid > div {
          display: grid;
          gap: 2px;
          border-left: 2px solid rgba(166, 234, 255, 0.4);
          padding-left: 8px;
        }

        .exp-meta-label {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 14px;
          letter-spacing: 1.2px;
          color: rgba(255, 255, 255, 0.72);
        }

        .exp-meta-value {
          font-family: 'Bebas Neue', sans-serif;
          font-size: clamp(18px, 1.15vw, 24px);
          color: #ffffff;
          letter-spacing: 0.5px;
        }

        .exp-summary {
          position: relative;
          z-index: 1;
          margin-top: 10px;
          border: 1px solid rgba(160, 236, 255, 0.26);
          background: linear-gradient(130deg, rgba(7, 29, 68, 0.76), rgba(7, 26, 59, 0.46));
          padding: 8px;
          clip-path: polygon(0 0, 100% 0, 100% 90%, calc(100% - 14px) 100%, 0 100%);
          animation: exp-fade-up 0.38s ease both;
        }

        .exp-summary h3,
        .exp-section h3 {
          margin: 0;
          font-family: 'Bebas Neue', sans-serif;
          font-size: 18px;
          letter-spacing: 1.5px;
          color: #ffffff;
        }

        .exp-summary p {
          margin: 6px 0 0;
          font-family: 'Bebas Neue', sans-serif;
          font-size: clamp(16px, 1.18vw, 24px);
          line-height: 1.24;
          letter-spacing: 0.35px;
          color: rgba(255, 255, 255, 0.95);
        }

        .exp-section {
          position: relative;
          z-index: 1;
          margin-top: 8px;
          border: 1px solid rgba(160, 236, 255, 0.2);
          background: rgba(5, 20, 42, 0.54);
          padding: 8px;
        }

        .exp-chip-row {
          margin-top: 6px;
          display: flex;
          gap: 8px;
          flex-wrap: wrap;
        }

        .exp-chip {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 16px;
          letter-spacing: 0.8px;
          color: #ffffff;
          padding: 4px 10px;
          border: 1px solid rgba(185, 241, 255, 0.35);
          background: rgba(12, 63, 122, 0.52);
          transform: skewX(-8deg);
          transition: transform 0.2s ease, background 0.2s ease, border-color 0.2s ease;
        }

        .exp-chip:hover {
          transform: skewX(-8deg) translateY(-2px);
          background: rgba(24, 104, 187, 0.58);
          border-color: rgba(230, 249, 255, 0.72);
        }

        .exp-chip.unlock {
          border-color: rgba(255, 116, 133, 0.38);
          background: rgba(101, 21, 41, 0.4);
        }

        .exp-list {
          margin: 8px 0 0;
          padding: 0;
          list-style: none;
          display: grid;
          gap: 6px;
        }

        .exp-list li {
          position: relative;
          padding-left: 14px;
          font-family: 'Bebas Neue', sans-serif;
          font-size: clamp(17px, 1.05vw, 22px);
          line-height: 1.2;
          letter-spacing: 0.25px;
          color: rgba(255, 255, 255, 0.92);
        }

        .exp-list li::before {
          content: "";
          position: absolute;
          left: 0;
          top: 0.5em;
          width: 8px;
          height: 1px;
          background: rgba(255, 255, 255, 0.85);
          box-shadow: 0 0 8px rgba(91, 206, 255, 0.58);
        }

        .exp-dossier-body {
          flex: 1 1 auto;
          min-height: 0;
          overflow-x: hidden;
          overflow-y: auto;
          overscroll-behavior: contain;
          padding-right: 6px;
          margin-right: -4px;
        }

        .exp-dossier-body::-webkit-scrollbar {
          width: 10px;
        }

        .exp-dossier-body::-webkit-scrollbar-thumb {
          background: linear-gradient(180deg, rgba(120,200,255,0.22), rgba(120,200,255,0.12));
          border-radius: 6px;
          border: 2px solid rgba(6,18,36,0.18);
        }

        .exp-visual {
          min-height: 66vh;
          display: flex;
          align-items: stretch;
          height: 100%;
        }

        .exp-visual-frame {
          position: relative;
          width: 100%;
          border: 1px solid rgba(192, 245, 255, 0.4);
          overflow: hidden;
          clip-path: polygon(0 0, 100% 0, 100% 84%, 86% 100%, 0 100%);
          box-shadow: 0 18px 34px rgba(1, 7, 17, 0.54), 0 0 34px rgba(93, 208, 255, 0.24);
          animation: exp-visual-in 0.45s ease both;
          background: rgba(5, 19, 41, 0.66);
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .exp-visual-placeholder {
          position: relative;
          z-index: 1;
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 28px 18px 110px;
          box-sizing: border-box;
          overflow-y: auto;
          overscroll-behavior: contain;
        }

        .exp-visual-ph-inner {
          width: 100%;
          max-width: 300px;
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .exp-visual-ph-code {
          margin: 0;
          font-family: 'Bebas Neue', sans-serif;
          font-size: clamp(22px, 1.8vw, 30px);
          letter-spacing: 2px;
          color: rgba(180, 235, 255, 0.95);
        }

        .exp-visual-ph-op {
          margin: 0;
          font-family: 'Bebas Neue', sans-serif;
          font-size: clamp(14px, 1.1vw, 18px);
          letter-spacing: 1.5px;
          color: rgba(255, 255, 255, 0.82);
        }

        .exp-visual-ph-org {
          margin: 0;
          font-family: 'Anton', sans-serif;
          font-size: clamp(20px, 1.6vw, 28px);
          letter-spacing: 1px;
          color: #ffffff;
          line-height: 1.15;
        }

        .exp-visual-ph-tech-title {
          margin: 10px 0 0;
          font-family: 'Bebas Neue', sans-serif;
          font-size: 13px;
          letter-spacing: 2px;
          color: rgba(190, 240, 255, 0.75);
        }

        .exp-visual-ph-chips {
          display: flex;
          flex-wrap: wrap;
          gap: 6px;
        }

        .exp-visual-ph-chip {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 12px;
          letter-spacing: 0.6px;
          padding: 4px 8px;
          border: 1px solid rgba(120, 210, 255, 0.35);
          background: rgba(6, 22, 48, 0.75);
          color: rgba(255, 255, 255, 0.9);
        }

        .exp-visual-frame img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
          opacity : 1;
          filter: contrast(1.15) saturate(1.1);
          transform: scale(0.98);
          transition: all 0.4s ease;
        }

        .exp-visual-gradient {
          position: absolute;
          inset: 0;
          background:
            radial-gradient(circle at 65% 30%, rgba(78, 204, 255, 0.25), transparent 42%),
            linear-gradient(180deg, rgba(8, 24, 46, 0.15) 0%, rgba(4, 15, 30, 0.72) 86%);
        }

        .exp-visual-scan {
        display : none;
        }

        .exp-visual-label {
          position: absolute;
          left: 12px;
          right: 12px;
          top: auto;
          bottom: 12px;
          max-width: min(100% - 24px, 340px);
          max-height: min(42vh, 320px);
          overflow-x: hidden;
          overflow-y: auto;
          overscroll-behavior: contain;
          display: grid;
          gap: 4px;
          color: #ffffff;
          font-family: 'Bebas Neue', sans-serif;
          letter-spacing: 1.2px;
          text-shadow: 0 1px 6px rgba(0, 0, 0, 0.75);
          background: rgba(6, 18, 36, 0.72);
          border: 1px solid rgba(190, 240, 255, 0.38);
          padding: 8px 10px;
          border-radius: 6px;
          backdrop-filter: blur(5px);
          z-index: 3;
          box-shadow: 0 8px 18px rgba(1, 6, 14, 0.35);
        }

        .exp-visual-label strong {
          font-size: clamp(15px, 1.05vw, 26px);
          font-family: 'Bebas Neue', sans-serif;
          font-weight: 600;
          letter-spacing: 0.5px;
          line-height: 1.25;
          overflow-wrap: anywhere;
          word-break: break-word;
          white-space: pre-wrap;
        }

        .exp-visual-label::-webkit-scrollbar {
          width: 6px;
        }

        .exp-visual-label::-webkit-scrollbar-thumb {
          background: rgba(120, 200, 255, 0.35);
          border-radius: 4px;
        }

        .exp-footer {
  position: fixed;
  bottom: 20px;
  right: 28px;

  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 5px;

  padding: 8px 10px;

  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.28);

  background: rgba(0, 0, 0, 0.58);

  box-shadow:
    0 8px 22px rgba(0, 0, 0, 0.55);

  backdrop-filter: blur(2px);

  z-index: 50;

  opacity: 0;
  transition: opacity 0.4s ease 0.6s;

  pointer-events: none;
}

.exp-footer.mounted {
  opacity: 1;
}

.exp-footer-row {
  display: flex;
  align-items: center;
  gap: 8px;

  font-family: 'Bebas Neue', sans-serif;
  font-size: 17px;
  letter-spacing: 2.2px;

  color: rgba(255,255,255,0.9);

  text-shadow:
    0 1px 2px rgba(0, 0, 0, 0.9);
}

.exp-footer-key {
  border: 1px solid rgba(255,255,255,0.55);

  border-radius: 5px;

  background: rgba(0, 0, 0, 0.72);

  color: #fff;

  padding: 2px 8px;

  font-size: 14px;

  line-height: 1;
}

        @keyframes exp-card-in {
          from {
            opacity: 0;
            transform: translateX(20px) scale(0.98);
            filter: blur(2px);
          }
          to {
            opacity: 1;
            transform: translateX(0) scale(1);
            filter: blur(0);
          }
        }

        @keyframes exp-visual-in {
          from {
            opacity: 0;
            transform: translateX(22px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes exp-scan {
          from {
            transform: translateY(0);
            opacity: 0;
          }
          15% {
            opacity: 0.65;
          }
          85% {
            opacity: 0.12;
          }
          to {
            transform: translateY(340%);
            opacity: 0;
          }
        }

        @keyframes exp-fade-down {
          from {
            opacity: 0;
            transform: translateY(-8px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes exp-fade-up {
          from {
            opacity: 0;
            transform: translateY(8px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @media (max-width: 1240px) {
          .exp-layout {
            grid-template-columns: minmax(190px, 0.75fr) minmax(420px, 1fr) minmax(280px, 0.82fr);
          }

          .exp-hint-card {
            display: none;
          }
        }

        @media (max-width: 980px) {
          .exp-shell {
            padding: 3.5vh 3.2vw 8.5vh;
          }

          .exp-layout {
            height: auto;
          }

          .exp-layout {
            grid-template-columns: 1fr;
            gap: 12px;
          }

          .exp-nav {
            order: 1;
          }

          .exp-focus-area {
            order: 2;
            min-height: auto;
          }

          .exp-visual {
            order: 3;
            min-height: 36vh;
          }

          .exp-dossier-card {
            width: 100%;
          }

          .exp-footer {
            display: none;
          }
        }
      `}</style>
    </div>
  );
}
