import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Edit3, Heart, Video, Calendar, Settings, TrendingUp, MapPin, Instagram } from 'lucide-react'
import { useUser } from '../data/userStore'
import { getDancerById, STYLES } from '../data/dancers'
import Avatar from '../components/Avatar'
import styles from './MyProfile.module.css'

const LEVELS = ['Beginner', 'Intermediate', 'Advanced', 'Professional']
const TABS = [
  { id: 'about', label: 'ABOUT ME', icon: <span>👤</span> },
  { id: 'fav', label: 'MY FAV', icon: <Heart size={14} /> },
  { id: 'videos', label: 'MY VIDEOS', icon: <Video size={14} /> },
  { id: 'events', label: 'MY EVENTS', icon: <Calendar size={14} /> },
  { id: 'settings', label: 'SETTINGS', icon: <Settings size={14} /> },
]

function timeAgo(ts) {
  const diff = Date.now() - ts
  const h = Math.floor(diff / 3600000)
  const d = Math.floor(diff / 86400000)
  if (h < 1) return 'Just now'
  if (h < 24) return `${h} hour${h > 1 ? 's' : ''} ago`
  return `${d} day${d > 1 ? 's' : ''} ago`
}

export default function MyProfile() {
  const { profile, stats, updateProfile } = useUser()
  const navigate = useNavigate()
  const [tab, setTab] = useState('about')
  const [editing, setEditing] = useState(false)
  const [draft, setDraft] = useState(profile)

  const favDancers = stats.favoriteDancers.map(id => getDancerById(id)).filter(Boolean)

  const save = () => {
    updateProfile(draft)
    setEditing(false)
  }

  const isSetup = profile.name

  return (
    <div className={styles.page}>
      {/* Hero */}
      <div className={styles.hero}>
        <div className={styles.heroBg} />
        <div className={styles.heroContent}>
          <div className={styles.avatarWrap}>
            <div className={styles.avatar}>
              {profile.avatar
                ? <img src={profile.avatar} alt="avatar" />
                : <span>{profile.name ? profile.name[0].toUpperCase() : '?'}</span>}
            </div>
            <button className={styles.avatarEdit} onClick={() => setEditing(true)}>✏</button>
          </div>

          <div className={styles.heroInfo}>
            <div className={styles.heroLabel}>MY PROFILE</div>
            <h1 className={styles.heroName}>{profile.name ? profile.name.toUpperCase() : 'YOUR NAME'}</h1>
            <div className={styles.heroMeta}>
              {profile.country && <span>🌍 {profile.country}</span>}
              {profile.city && <><MapPin size={12} /><span>{profile.city}</span></>}
            </div>
            {profile.bio && <p className={styles.heroBio}>{profile.bio}</p>}
          </div>
        </div>
        <button className={styles.editBtn} onClick={() => { setDraft(profile); setEditing(true) }}>
          <Edit3 size={14} />
          EDIT PROFILE
        </button>
      </div>

      {/* Stats bar */}
      <div className={styles.statsBar}>
        {profile.experience && (
          <div className={styles.statBox}>
            <span className={styles.statIcon}>⭐</span>
            <div>
              <div className={styles.statLabel}>DANCE EXPERIENCE</div>
              <div className={styles.statVal}>{profile.experience}+ <span>YEARS</span></div>
            </div>
          </div>
        )}
        {profile.styles?.length > 0 && (
          <div className={styles.statBox}>
            <span className={styles.statIcon}>🎯</span>
            <div>
              <div className={styles.statLabel}>SPECIALTIES</div>
              <div className={styles.statVal} style={{ fontSize: 14 }}>{profile.styles.join(', ') || '—'}</div>
            </div>
          </div>
        )}
        <div className={styles.statBox}>
          <span className={styles.statIcon}>🏆</span>
          <div>
            <div className={styles.statLabel}>BATTLES JOINED</div>
            <div className={styles.statVal}>{stats.eventsAttended || 0}+</div>
          </div>
        </div>
        {profile.country && (
          <div className={styles.statBox}>
            <span className={styles.statIcon}>🌏</span>
            <div>
              <div className={styles.statLabel}>COUNTRY</div>
              <div className={styles.statVal} style={{ fontSize: 14 }}>{profile.country}</div>
            </div>
          </div>
        )}
        {profile.city && (
          <div className={styles.statBox}>
            <span className={styles.statIcon}>📍</span>
            <div>
              <div className={styles.statLabel}>CITY</div>
              <div className={styles.statVal} style={{ fontSize: 14 }}>{profile.city}</div>
            </div>
          </div>
        )}
      </div>

      {/* Tab bar */}
      <div className={styles.tabBar}>
        {TABS.map(t => (
          <button
            key={t.id}
            className={`${styles.tabBtn} ${tab === t.id ? styles.tabActive : ''}`}
            onClick={() => setTab(t.id)}
          >
            {t.icon} {t.label}
          </button>
        ))}
      </div>

      <div className={styles.body}>
        <div className={styles.mainCol}>
          {/* ABOUT ME */}
          {tab === 'about' && (
            <div className={styles.aboutCard}>
              <h3 className={styles.cardTitle}>ABOUT ME</h3>
              {profile.bio ? <p className={styles.bioText}>{profile.bio}</p>
                : <p className={styles.emptyHint}>Add a bio in Edit Profile.</p>}
              <div className={styles.aboutGrid}>
                {profile.age && <AboutRow icon="👤" label="AGE" val={profile.age} />}
                {profile.styles?.length > 0 && <AboutRow icon="💃" label="STYLE" val={profile.styles.join(', ')} />}
                {profile.level && <AboutRow icon="⭐" label="LEVEL" val={profile.level} />}
                {profile.instagram && <AboutRow icon={<Instagram size={14} />} label="INSTAGRAM" val={`@${profile.instagram}`} />}
                {profile.joinedDate && <AboutRow icon="📅" label="JOINED" val={profile.joinedDate} />}
              </div>
              {!isSetup && (
                <button className={styles.setupBtn} onClick={() => { setDraft(profile); setEditing(true) }}>
                  Set up your profile →
                </button>
              )}
            </div>
          )}

          {/* MY FAV */}
          {tab === 'fav' && (
            <div>
              <div className={styles.sectionHeader}>
                <h3 className={styles.cardTitle}>MY FAV DANCERS <span className={styles.count}>{favDancers.length}</span></h3>
                <button className={styles.viewAll} onClick={() => navigate('/discover')}>View all</button>
              </div>
              {favDancers.length === 0 ? (
                <p className={styles.emptyHint}>You haven't favorited any dancers yet. <span className={styles.link} onClick={() => navigate('/discover')}>Explore dancers →</span></p>
              ) : (
                <div className={styles.favGrid}>
                  {favDancers.map(d => (
                    <div key={d.id} className={styles.favCard} onClick={() => navigate(`/dancer/${d.id}`)}>
                      <div className={styles.favImgWrap}>
                        <Avatar dancer={d} className={styles.favImg} />
                        <div className={styles.favOverlay} />
                        <Heart size={16} className={styles.favHeart} fill="currentColor" />
                      </div>
                      <div className={styles.favInfo}>
                        <div className={styles.favName}>{d.name}</div>
                        <div className={styles.favMeta}>{d.flag} {d.country}</div>
                        <div className={styles.favStyles}>{d.styles.join(', ')}</div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* VIDEOS / EVENTS / SETTINGS placeholders */}
          {tab === 'videos' && <ComingSoon label="My Videos" />}
          {tab === 'events' && <ComingSoon label="My Events" />}
          {tab === 'settings' && <ComingSoon label="Settings" />}
        </div>

        {/* Right sidebar */}
        <div className={styles.sideCol}>
          <div className={styles.sideCard}>
            <div className={styles.sideCardHeader}>
              <h3 className={styles.cardTitle}>PROFILE STATS</h3>
              <TrendingUp size={16} className={styles.statsIcon} />
            </div>
            <div className={styles.statsList}>
              <StatItem label="FAVORITE DANCERS" val={stats.favoriteDancers.length} />
              <StatItem label="ARTICLES READ" val={stats.articlesRead} />
              <StatItem label="VIDEOS WATCHED" val={stats.videosWatched} />
              <StatItem label="EVENTS ATTENDED" val={stats.eventsAttended} />
            </div>
          </div>

          {stats.activity?.length > 0 && (
            <div className={styles.sideCard}>
              <div className={styles.sideCardHeader}>
                <h3 className={styles.cardTitle}>RECENT ACTIVITY</h3>
                <button className={styles.viewAll}>View all</button>
              </div>
              <div className={styles.activityList}>
                {stats.activity.slice(0, 5).map((a, i) => (
                  <div key={i} className={styles.activityItem}>
                    <span className={styles.activityDot}>❤</span>
                    <div>
                      <div className={styles.activityLabel}>{a.label}</div>
                      <div className={styles.activityTime}>{timeAgo(a.ts)}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Edit modal */}
      {editing && (
        <div className={styles.modalOverlay} onClick={() => setEditing(false)}>
          <div className={styles.modal} onClick={e => e.stopPropagation()}>
            <h2 className={styles.modalTitle}>EDIT PROFILE</h2>
            <div className={styles.formGrid}>
              <Field label="Name" value={draft.name} onChange={v => setDraft(d => ({ ...d, name: v }))} />
              <Field label="Age" value={draft.age} onChange={v => setDraft(d => ({ ...d, age: v }))} type="number" />
              <Field label="Country" value={draft.country} onChange={v => setDraft(d => ({ ...d, country: v }))} />
              <Field label="City" value={draft.city} onChange={v => setDraft(d => ({ ...d, city: v }))} />
              <Field label="Instagram (no @)" value={draft.instagram} onChange={v => setDraft(d => ({ ...d, instagram: v }))} />
              <Field label="Years of Experience" value={draft.experience} onChange={v => setDraft(d => ({ ...d, experience: v }))} type="number" />
              <div className={styles.fieldFull}>
                <label className={styles.fieldLabel}>BIO</label>
                <textarea
                  className={styles.textarea}
                  value={draft.bio}
                  onChange={e => setDraft(d => ({ ...d, bio: e.target.value }))}
                  rows={3}
                  placeholder="Tell the community about yourself…"
                />
              </div>
              <div className={styles.fieldFull}>
                <label className={styles.fieldLabel}>LEVEL</label>
                <div className={styles.levelRow}>
                  {LEVELS.map(l => (
                    <button
                      key={l}
                      className={`${styles.levelBtn} ${draft.level === l ? styles.levelBtnActive : ''}`}
                      onClick={() => setDraft(d => ({ ...d, level: l }))}
                    >{l}</button>
                  ))}
                </div>
              </div>
              <div className={styles.fieldFull}>
                <label className={styles.fieldLabel}>STYLES</label>
                <div className={styles.styleCheckRow}>
                  {STYLES.map(s => (
                    <button
                      key={s}
                      className={`${styles.styleCheck} ${draft.styles?.includes(s) ? styles.styleCheckActive : ''}`}
                      onClick={() => setDraft(d => ({
                        ...d,
                        styles: d.styles?.includes(s)
                          ? d.styles.filter(x => x !== s)
                          : [...(d.styles || []), s]
                      }))}
                    >{s}</button>
                  ))}
                </div>
              </div>
            </div>
            <div className={styles.modalActions}>
              <button className={styles.cancelBtn} onClick={() => setEditing(false)}>Cancel</button>
              <button className={styles.saveBtn} onClick={save}>Save Profile</button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

function AboutRow({ icon, label, val }) {
  return (
    <div className={styles.aboutRow}>
      <span className={styles.aboutIcon}>{icon}</span>
      <div>
        <div className={styles.aboutLabel}>{label}</div>
        <div className={styles.aboutVal}>{val}</div>
      </div>
    </div>
  )
}

function StatItem({ label, val }) {
  return (
    <div className={styles.statItem}>
      <span className={styles.statItemLabel}>{label}</span>
      <span className={styles.statItemVal}>{val}</span>
    </div>
  )
}

function Field({ label, value, onChange, type = 'text' }) {
  return (
    <div className={styles.field}>
      <label className={styles.fieldLabel}>{label}</label>
      <input
        type={type}
        className={styles.fieldInput}
        value={value || ''}
        onChange={e => onChange(e.target.value)}
      />
    </div>
  )
}

function ComingSoon({ label }) {
  return (
    <div className={styles.comingSoon}>
      <span className={styles.comingSoonIcon}>🚧</span>
      <p>{label} — coming soon</p>
    </div>
  )
}
