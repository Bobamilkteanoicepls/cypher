import styles from './Avatar.module.css'

const STYLE_GRADIENTS = {
  'Hip Hop': ['#6366f1', '#312e81'],
  'Waacking': ['#a855f7', '#581c87'],
  'Locking': ['#f59e0b', '#7c2d12'],
  'Popping': ['#10b981', '#064e3b'],
  'House': ['#06b6d4', '#0e3a4a'],
  'Breaking': ['#ef4444', '#7f1d1d'],
  'Krump': ['#f97316', '#7c2d12'],
  'Voguing': ['#ec4899', '#831843'],
}

function initials(name) {
  return name.split(' ').filter(Boolean).slice(0, 2).map(w => w[0]).join('').toUpperCase()
}

// Renders the real photo when available, otherwise a styled gradient
// placeholder with the dancer's initials (no fake stock photos).
export default function Avatar({ dancer, className, objectPosition = 'center 20%' }) {
  if (dancer.photo) {
    return (
      <img
        src={dancer.photo}
        alt={dancer.name}
        className={className}
        style={{ objectPosition }}
        loading="lazy"
      />
    )
  }
  const [c1, c2] = STYLE_GRADIENTS[dancer.primaryStyle] || ['#7c3aed', '#1e1b4b']
  return (
    <div
      className={`${className} ${styles.placeholder}`}
      style={{ background: `linear-gradient(145deg, ${c1} 0%, ${c2} 100%)` }}
    >
      <span className={styles.initials}>{initials(dancer.name)}</span>
      <span className={styles.styleTag}>{dancer.primaryStyle}</span>
    </div>
  )
}
