import { useParams, useNavigate } from 'react-router-dom'
import { ArrowLeft, Heart, Share2, Play, Trophy, Star } from 'lucide-react'
import { getDancerById } from '../data/dancers'
import { useUser } from '../data/userStore'
import Avatar from '../components/Avatar'
import styles from './DancerProfile.module.css'

const STYLE_COLORS = {
  'Hip Hop': '#6366f1',
  'Waacking': '#a855f7',
  'Locking': '#f59e0b',
  'Popping': '#10b981',
  'House': '#06b6d4',
  'Breaking': '#ef4444',
  'Krump': '#f97316',
  'Voguing': '#ec4899',
  'Freestyle': '#8b5cf6',
  'Heels': '#e879f9',
}

const ACHIEVEMENT_ICONS = ['🏆', '🥈', '🎖', '⭐', '🏅']

export default function DancerProfile() {
  const { id } = useParams()
  const navigate = useNavigate()
  const { isFavorite, toggleFavorite } = useUser()
  const dancer = getDancerById(id)

  if (!dancer) return (
    <div className={styles.notFound}>
      <p>Dancer not found.</p>
      <button onClick={() => navigate('/discover')}>← Back</button>
    </div>
  )

  const fav = isFavorite(dancer.id)

  return (
    <div className={styles.page}>
      {/* Background hero */}
      <div className={styles.heroBg}>
        <Avatar dancer={dancer} className={styles.heroBgImg} objectPosition="center 20%" />
        <div className={styles.heroBgOverlay} />
      </div>

      {/* Back button */}
      <button className={styles.backBtn} onClick={() => navigate(-1)}>
        <ArrowLeft size={14} />
        BACK TO DANCERS
      </button>

      <div className={styles.layout}>
        {/* Left panel */}
        <div className={styles.leftPanel}>
          <div className={styles.nameBlock}>
            <h1 className={styles.name}>{dancer.name.toUpperCase()}</h1>
            {dancer.realName !== dancer.name && (
              <p className={styles.realName}>{dancer.realName}</p>
            )}
          </div>

          <div className={styles.countryBadge}>
            <span>{dancer.flag}</span>
            <span>{dancer.country.toUpperCase()}</span>
          </div>

          <div className={styles.statsRow}>
            <div className={styles.stat}>
              <span className={styles.statLabel}>DANCE EXPERIENCE</span>
              <span className={styles.statValue}>{dancer.experience}+ <span className={styles.statUnit}>YEARS</span></span>
            </div>
            {dancer.age && (
              <div className={styles.stat}>
                <span className={styles.statLabel}>AGE</span>
                <span className={styles.statValue}>{dancer.age} <span className={styles.statUnit}>YEARS OLD</span></span>
              </div>
            )}
            {dancer.born && (
              <div className={styles.stat}>
                <span className={styles.statLabel}>BORN</span>
                <span className={styles.statValue} style={{ fontSize: 15 }}>{dancer.born}</span>
              </div>
            )}
          </div>

          {dancer.bio && (
            <p className={styles.bio}>{dancer.bio}</p>
          )}

          {/* Specialties */}
          <div className={styles.section}>
            <h3 className={styles.sectionTitle}>SPECIALTIES</h3>
            <div className={styles.tagRow}>
              {dancer.styles.map(s => (
                <span
                  key={s}
                  className={styles.tag}
                  style={s === dancer.primaryStyle ? { background: STYLE_COLORS[s] || '#7c3aed', borderColor: 'transparent' } : {}}
                >{s.toUpperCase()}</span>
              ))}
            </div>
          </div>

          {/* Achievements */}
          <div className={styles.section}>
            <h3 className={styles.sectionTitle}>HONORS & ACHIEVEMENTS</h3>
            <div className={styles.achieveList}>
              {dancer.achievements.map((a, i) => (
                <div key={i} className={styles.achieve}>
                  <span className={styles.achieveIcon}>{ACHIEVEMENT_ICONS[i % ACHIEVEMENT_ICONS.length]}</span>
                  <span className={styles.achieveTitle}>{a.title}</span>
                  <span className={styles.achieveYear}>{a.year}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Mentor */}
          {dancer.mentor && (
            <div className={styles.section}>
              <h3 className={styles.sectionTitle}>MENTOR</h3>
              <div className={styles.mentorCard}>
                <div>
                  <div className={styles.mentorName}>{dancer.mentor}</div>
                  {dancer.crew && <div className={styles.mentorCrew}>{dancer.crew.toUpperCase()}</div>}
                </div>
              </div>
            </div>
          )}

          {dancer.crew && !dancer.mentor && (
            <div className={styles.section}>
              <h3 className={styles.sectionTitle}>CREW</h3>
              <div className={styles.mentorCard}>
                <div className={styles.mentorName}>{dancer.crew}</div>
              </div>
            </div>
          )}

          {/* Actions */}
          <div className={styles.actionRow}>
            <button
              className={`${styles.actionBtn} ${fav ? styles.actionBtnActive : ''}`}
              onClick={() => toggleFavorite(dancer.id, dancer.name)}
            >
              <Heart size={16} fill={fav ? 'currentColor' : 'none'} />
              {fav ? 'FAVORITED' : 'FAVORITE'}
            </button>
            <button className={styles.actionBtn}>
              <Share2 size={16} />
              SHARE
            </button>
          </div>
        </div>

        {/* Right panel — classic videos */}
        {dancer.videos?.length > 0 && (
          <div className={styles.videosPanel}>
            <h3 className={styles.videosPanelTitle}>CLASSIC VIDEOS</h3>
            <div className={styles.videosGrid}>
              {dancer.videos.map((v, i) => (
                <a
                  key={i}
                  href={v.url}
                  target="_blank"
                  rel="noreferrer"
                  className={styles.videoCard}
                >
                  <div className={styles.videoThumb}>
                    <div className={styles.videoPlay}><Play size={22} fill="currentColor" /></div>
                    {v.year && <span className={styles.videoYear}>{v.year}</span>}
                  </div>
                  <div className={styles.videoMeta}>
                    <span className={styles.videoTitle}>{v.title}</span>
                    {v.duration && v.duration !== '—' && <span className={styles.videoDur}>{v.duration}</span>}
                  </div>
                  <div className={styles.videoUrl}>Search on YouTube →</div>
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
