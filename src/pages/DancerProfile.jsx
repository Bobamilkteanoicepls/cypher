import { useState, useMemo } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowLeft, Play, Trophy, Medal, Award, Star, Crown } from 'lucide-react'
import { getDancerById } from '../data/dancers'
import Avatar from '../components/Avatar'
import styles from './DancerProfile.module.css'

const STYLE_COLORS = {
  'Hip Hop': '#7C4DFF', 'Waacking': '#a855f7', 'Locking': '#f59e0b',
  'Popping': '#10b981', 'House': '#06b6d4', 'Breaking': '#ef4444',
  'Krump': '#f97316', 'Voguing': '#ec4899', 'Freestyle': '#8b5cf6', 'Heels': '#e879f9',
}

const HONOR_ICONS = [Crown, Trophy, Medal, Award, Star]

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.35 } },
}
const item = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] } },
}

function Particles({ count = 22 }) {
  const bits = useMemo(() => Array.from({ length: count }, (_, i) => ({
    id: i,
    left: Math.random() * 100,
    size: 1 + Math.random() * 3,
    delay: -Math.random() * 14,
    duration: 9 + Math.random() * 12,
    drift: (Math.random() - 0.5) * 60,
    opacity: 0.15 + Math.random() * 0.5,
  })), [count])
  return (
    <div className={styles.particles} aria-hidden>
      {bits.map(b => (
        <span
          key={b.id}
          className={styles.particle}
          style={{
            left: `${b.left}%`,
            width: b.size,
            height: b.size,
            '--drift': `${b.drift}px`,
            '--dur': `${b.duration}s`,
            '--op': b.opacity,
            animationDelay: `${b.delay}s`,
          }}
        />
      ))}
    </div>
  )
}

export default function DancerProfile() {
  const { id } = useParams()
  const navigate = useNavigate()
  const dancer = getDancerById(id)
  const [cutoutFailed, setCutoutFailed] = useState(false)

  if (!dancer) return (
    <div className={styles.notFound}>
      <p>Dancer not found.</p>
      <button onClick={() => navigate('/discover')}>← Back</button>
    </div>
  )

  const realName = dancer.realName.replace(/\s*\(.*\)\s*/, '')
  const kanji = (dancer.realName.match(/\(([^)]+)\)/) || [])[1]
  const useCutout = dancer.cutout && !cutoutFailed
  const displayName = (dancer.realName.match(/\(/) ? realName : dancer.name).toUpperCase()

  return (
    <div className={styles.page}>
      {/* Camera is locked. Layer 1 — Battle arena (static), Layer 2 — Audience crowd (idle shimmer) */}
      <div className={styles.bg}>
        <div
          className={styles.bgImg}
          style={{ backgroundImage: 'url(/stage/arena.jpg)' }}
        />
        <div
          className={styles.crowd}
          style={{ backgroundImage: 'url(/stage/arena.jpg)' }}
        />
        <div className={styles.bgHaze} />
        {/* Layer 3 — Stage smoke */}
        <div className={styles.fog}>
          <div className={`${styles.fogBank} ${styles.fogA}`} />
          <div className={`${styles.fogBank} ${styles.fogB}`} />
        </div>
        {/* Moving spotlight */}
        <div className={styles.spotlight} />
        <div className={styles.bgVignette} />
      </div>

      {/* Layer 4 — Dancer cutout (locked position, idle breathing only — no zoom/pan) */}
      <motion.div
        className={`${styles.figure} ${useCutout ? styles.figureCutout : ''}`}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        <div className={styles.figureTilt}>
          <div className={styles.figureBreath}>
            {useCutout
              ? <img src={dancer.cutout} alt={dancer.name} className={styles.figureImg} onError={() => setCutoutFailed(true)} />
              : <Avatar dancer={dancer} className={styles.figureImg} objectPosition="center top" />}
            <div className={styles.figureGlow} />
          </div>
        </div>
      </motion.div>

      {/* Layer 5 — Particles */}
      <Particles />

      {/* Layer 6 — HUD UI */}
      <div className={styles.hud} aria-hidden>
        <span className={`${styles.bracket} ${styles.brTL}`} />
        <span className={`${styles.bracket} ${styles.brTR}`} />
        <span className={`${styles.bracket} ${styles.brBL}`} />
        <span className={`${styles.bracket} ${styles.brBR}`} />
        <div className={styles.scanlines} />
      </div>

      <button className={styles.backBtn} onClick={() => navigate(-1)}>
        <ArrowLeft size={16} /> BACK TO ROSTER
      </button>

      {/* Left info column */}
      <motion.div className={styles.panel} variants={container} initial="hidden" animate="show">
        <motion.div className={styles.nameBlock} variants={item}>
          <div className={styles.eyebrow}>CYPHER · DANCER DOSSIER</div>
          <h1 className={styles.name} data-text={displayName}>{displayName}</h1>
          {kanji && <div className={styles.kanji}>{kanji}</div>}
          <div className={styles.flagBadge}>
            <span className={styles.flag}>{dancer.flag}</span>
            <span>{dancer.country.toUpperCase()}</span>
          </div>
        </motion.div>

        <motion.div className={styles.statGrid} variants={item}>
          <div className={styles.statCard}>
            <span className={styles.statLabel}>DANCE EXPERIENCE</span>
            <span className={styles.statValue}>{dancer.experience}+<span className={styles.statUnit}>YRS</span></span>
          </div>
          {dancer.age && (
            <div className={styles.statCard}>
              <span className={styles.statLabel}>AGE</span>
              <span className={styles.statValue}>{dancer.age}</span>
            </div>
          )}
        </motion.div>

        <motion.section className={styles.section} variants={item}>
          <h3 className={styles.sectionTitle}>DANCE STYLES</h3>
          <div className={styles.tagRow}>
            {dancer.styles.map(s => {
              const primary = s === dancer.primaryStyle
              return (
                <span
                  key={s}
                  className={`${styles.tag} ${primary ? styles.tagActive : ''}`}
                  style={primary ? { '--glow': STYLE_COLORS[s] || '#7C4DFF' } : {}}
                >{s.toUpperCase()}</span>
              )
            })}
          </div>
        </motion.section>

        <motion.section className={styles.section} variants={item}>
          <h3 className={styles.sectionTitle}>HONORS &amp; ACHIEVEMENTS</h3>
          <div className={styles.timeline}>
            {dancer.achievements.map((a, i) => {
              const Icon = HONOR_ICONS[i % HONOR_ICONS.length]
              return (
                <div key={i} className={styles.honor}>
                  <span className={styles.honorNode}><Icon size={14} /></span>
                  <span className={styles.honorTitle}>{a.title}</span>
                  <span className={styles.honorYear}>{a.year}</span>
                </div>
              )
            })}
          </div>
        </motion.section>

        {(dancer.mentor || dancer.crew) && (
          <motion.section className={styles.section} variants={item}>
            <h3 className={styles.sectionTitle}>{dancer.mentor ? 'MENTOR' : 'CREW'}</h3>
            <div className={styles.mentorCard}>
              <div className={styles.mentorGlyph}>{(dancer.mentor || dancer.crew).charAt(0)}</div>
              <div>
                <div className={styles.mentorName}>{dancer.mentor || dancer.crew}</div>
                {dancer.mentor && dancer.crew && <div className={styles.mentorSub}>{dancer.crew.toUpperCase()}</div>}
                {!dancer.mentor && <div className={styles.mentorSub}>{dancer.country.toUpperCase()} · {dancer.primaryStyle.toUpperCase()}</div>}
              </div>
            </div>
          </motion.section>
        )}
      </motion.div>

      {/* Classic videos carousel */}
      {dancer.videos?.length > 0 && (
        <motion.div
          className={styles.videos}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.7 }}
        >
          <h3 className={styles.sectionTitle}>CLASSIC VIDEOS</h3>
          <div className={styles.videoTrack}>
            {dancer.videos.map((v, i) => (
              <a key={i} href={v.url} target="_blank" rel="noreferrer" className={styles.videoCard}>
                <div className={styles.videoThumb}>
                  <div className={styles.videoPlay}><Play size={18} fill="currentColor" /></div>
                  {v.year && <span className={styles.videoYear}>{v.year}</span>}
                </div>
                <div className={styles.videoTitle}>{v.title}</div>
                <div className={styles.videoLink}>Watch on YouTube →</div>
              </a>
            ))}
          </div>
        </motion.div>
      )}
    </div>
  )
}
