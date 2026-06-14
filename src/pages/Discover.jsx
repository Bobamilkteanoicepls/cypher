import { useState, useMemo } from 'react'
import { Search, SlidersHorizontal, ChevronRight } from 'lucide-react'
import { dancers, STYLES, getDancersByStyle } from '../data/dancers'
import DancerCard from '../components/DancerCard'
import styles from './Discover.module.css'

const HERO_DANCER = dancers.find(d => d.id === 'phil-wizard') || dancers[0]

export default function Discover() {
  const [query, setQuery] = useState('')
  const [activeStyle, setActiveStyle] = useState(null)

  const searchResults = useMemo(() => {
    if (!query.trim()) return []
    const q = query.toLowerCase()
    return dancers.filter(d =>
      d.name.toLowerCase().includes(q) ||
      d.country.toLowerCase().includes(q) ||
      d.styles.some(s => s.toLowerCase().includes(q))
    )
  }, [query])

  const isSearching = query.trim().length > 0

  return (
    <div className={styles.page}>
      {/* Hero */}
      <div className={styles.hero}>
        <img src={HERO_DANCER.photo} alt="" className={styles.heroImg} />
        <div className={styles.heroOverlay} />
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>DISCOVER</h1>
          <p className={styles.heroSub}>Explore legendary dancers and their stories.</p>
        </div>
        <div className={styles.trending}>
          <div className={styles.trendingLabel}>↗ TRENDING NOW</div>
          <div className={styles.trendingTitle}>Red Bull Dance Your Style World Final 2024</div>
          <a href="#" className={styles.trendingLink}>View News →</a>
        </div>
      </div>

      <div className={styles.content}>
        {/* Search */}
        <div className={styles.searchRow}>
          <div className={styles.searchWrap}>
            <Search size={16} className={styles.searchIcon} />
            <input
              className={styles.searchInput}
              placeholder="Search dancers, styles, battles…"
              value={query}
              onChange={e => setQuery(e.target.value)}
            />
          </div>
          <button className={styles.filterBtn}>
            <SlidersHorizontal size={15} />
            FILTERS
          </button>
        </div>

        {/* Search results */}
        {isSearching && (
          <div className={styles.searchResults}>
            <p className={styles.resultsCount}>{searchResults.length} result{searchResults.length !== 1 ? 's' : ''} for "{query}"</p>
            {searchResults.length > 0 ? (
              <div className={styles.cardRow}>
                {searchResults.map(d => <DancerCard key={d.id} dancer={d} />)}
              </div>
            ) : (
              <p className={styles.empty}>No dancers found. Try a different search.</p>
            )}
          </div>
        )}

        {/* Style tabs */}
        {!isSearching && (
          <>
            <div className={styles.section}>
              <h2 className={styles.sectionTitle}>EXPLORE BY STYLE</h2>
              <div className={styles.styleTabs}>
                <button
                  className={`${styles.tab} ${activeStyle === null ? styles.tabActive : ''}`}
                  onClick={() => setActiveStyle(null)}
                >ALL</button>
                {STYLES.map(s => (
                  <button
                    key={s}
                    className={`${styles.tab} ${activeStyle === s ? styles.tabActive : ''}`}
                    onClick={() => setActiveStyle(activeStyle === s ? null : s)}
                  >{s.toUpperCase()}</button>
                ))}
              </div>
            </div>

            {(activeStyle ? [activeStyle] : STYLES).map(style => {
              const list = getDancersByStyle(style)
              if (!list.length) return null
              return (
                <StyleSection key={style} style={style} list={list} />
              )
            })}
          </>
        )}
      </div>
    </div>
  )
}

function StyleSection({ style, list }) {
  return (
    <div className={styles.styleSection}>
      <div className={styles.sectionHeader}>
        <h2 className={styles.styleName}>{style.toUpperCase()}</h2>
        <button className={styles.viewAll}>VIEW ALL <ChevronRight size={14} /></button>
      </div>
      <div className={styles.cardRow}>
        {list.map(d => <DancerCard key={d.id} dancer={d} />)}
      </div>
    </div>
  )
}
