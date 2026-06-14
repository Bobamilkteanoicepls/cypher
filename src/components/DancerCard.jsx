import { useNavigate } from 'react-router-dom'
import { Heart } from 'lucide-react'
import { useUser } from '../data/userStore'
import Avatar from './Avatar'
import styles from './DancerCard.module.css'

export default function DancerCard({ dancer }) {
  const navigate = useNavigate()
  const { isFavorite, toggleFavorite } = useUser()
  const fav = isFavorite(dancer.id)

  const handleFav = (e) => {
    e.stopPropagation()
    toggleFavorite(dancer.id, dancer.name)
  }

  return (
    <div className={styles.card} onClick={() => navigate(`/dancer/${dancer.id}`)}>
      <div className={styles.imgWrap}>
        <Avatar dancer={dancer} className={styles.img} />
        <div className={styles.overlay} />
        <button
          className={`${styles.heart} ${fav ? styles.heartActive : ''}`}
          onClick={handleFav}
          aria-label="Favorite"
        >
          <Heart size={16} fill={fav ? 'currentColor' : 'none'} />
        </button>
        <div className={styles.info}>
          <div className={styles.name}>{dancer.name}</div>
          <div className={styles.meta}>
            <span>{dancer.flag}</span>
            <span>{dancer.country}</span>
          </div>
        </div>
      </div>
    </div>
  )
}
