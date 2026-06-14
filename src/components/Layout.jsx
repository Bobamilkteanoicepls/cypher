import { Outlet, NavLink, useNavigate } from 'react-router-dom'
import { Compass, Newspaper, User, Calendar } from 'lucide-react'
import { useUser } from '../data/userStore'
import styles from './Layout.module.css'

export default function Layout() {
  const { profile } = useUser()
  const navigate = useNavigate()

  return (
    <div className={styles.shell}>
      <nav className={styles.sidebar}>
        <div className={styles.logo} onClick={() => navigate('/discover')}>
          <span className={styles.logoText}>CYPHER</span>
        </div>

        <div className={styles.navLinks}>
          <NavLink to="/discover" className={({ isActive }) => `${styles.navItem} ${isActive ? styles.active : ''}`}>
            <Compass size={18} />
            <span>DISCOVER</span>
          </NavLink>
          <NavLink to="/news" className={({ isActive }) => `${styles.navItem} ${isActive ? styles.active : ''}`}>
            <Newspaper size={18} />
            <span>NEWS</span>
          </NavLink>
          <NavLink to="/profile" className={({ isActive }) => `${styles.navItem} ${isActive ? styles.active : ''}`}>
            <User size={18} />
            <span>MY PROFILE</span>
          </NavLink>
          <div className={`${styles.navItem} ${styles.soon}`}>
            <Calendar size={18} />
            <span>EVENTS</span>
            <span className={styles.badge}>SOON</span>
          </div>
        </div>

        <div className={styles.userCard} onClick={() => navigate('/profile')}>
          <div className={styles.userAvatar}>
            {profile.avatar
              ? <img src={profile.avatar} alt="avatar" />
              : <span>{profile.name ? profile.name[0].toUpperCase() : '?'}</span>
            }
          </div>
          <div className={styles.userInfo}>
            <span className={styles.userName}>{profile.name || 'Set up profile'}</span>
            <span className={styles.userSub}>View profile</span>
          </div>
          <div className={styles.settingsIcon}>⚙</div>
        </div>
      </nav>

      <main className={styles.main}>
        <Outlet />
      </main>
    </div>
  )
}
