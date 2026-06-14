import styles from './News.module.css'

const articles = [
  {
    id: 1,
    tag: 'BATTLE RECAP',
    title: 'Red Bull Dance Your Style World Final 2024 — Results',
    summary: 'The world\'s biggest street dance battle concluded in Paris with over 10,000 spectators voting in real time. Dancers from 50 countries competed across Hip Hop, Breaking, Waacking, Locking, and House.',
    date: 'Nov 2024',
    img: 'https://images.unsplash.com/photo-1547153760-18fc86324498?w=800&q=80',
    featured: true,
  },
  {
    id: 2,
    tag: 'OLYMPICS',
    title: 'Breaking at Paris 2024: Phil Wizard Wins Breaking Gold for Canada',
    summary: 'Phil Wizard (Philip Kim) defeated Japan\'s Shigekix in the men\'s final to claim Canada\'s first Olympic Breaking gold. The competition drew record viewership and reignited debate about judging in Olympic street dance.',
    date: 'Aug 2024',
    img: 'https://images.unsplash.com/photo-1535359056830-d4badde79747?w=800&q=80',
  },
  {
    id: 3,
    tag: 'COMPETITION',
    title: 'Juste Debout 2024 — Salah Dominates Popping Again',
    summary: 'France\'s Salah claimed his fourth Juste Debout world title in Popping, cementing his status as the greatest Popper in battle history. The event at Accor Arena drew 20,000 fans.',
    date: 'Mar 2024',
    img: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&q=80',
  },
  {
    id: 4,
    tag: 'CULTURE',
    title: 'RieHata\'s "Kimi ni Shika" Choreography Goes Viral Worldwide',
    summary: 'Japanese dancer RieHata\'s hip hop choreography for the song "Kimi ni Shika" amassed over 30 million views and sparked a global dance cover trend, bringing Japanese street dance to global audiences.',
    date: 'Jan 2024',
    img: 'https://images.unsplash.com/photo-1508700929628-666bc8bd84ea?w=800&q=80',
  },
  {
    id: 5,
    tag: 'COMMUNITY',
    title: 'Battle of the Year 2024 — Expanding to 60 Nations',
    summary: 'The world\'s premier Breaking event announced its 2024 edition will feature national teams from a record 60 countries, with qualification events running across five continents throughout the year.',
    date: 'Dec 2024',
    img: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=800&q=80',
  },
  {
    id: 6,
    tag: 'TRIBUTE',
    title: 'Tyrone Proctor Honored at Waack in Paris 2024',
    summary: 'Waacking pioneer Tyrone Proctor received a lifetime achievement award at the Waack in Paris competition, celebrating 50 years of the art form he helped create in the Hollywood disco clubs of the 1970s.',
    date: 'Oct 2024',
    img: 'https://images.unsplash.com/photo-1529516548873-9ce57c8f155e?w=800&q=80',
  },
]

const TAG_COLORS = {
  'BATTLE RECAP': '#7c3aed',
  'OLYMPICS': '#ef4444',
  'COMPETITION': '#f59e0b',
  'CULTURE': '#10b981',
  'COMMUNITY': '#06b6d4',
  'TRIBUTE': '#ec4899',
}

export default function News() {
  const [featured, ...rest] = articles

  return (
    <div className={styles.page}>
      <div className={styles.header}>
        <h1 className={styles.title}>NEWS</h1>
        <p className={styles.sub}>Latest battles, competitions & culture from the street dance world.</p>
      </div>

      <div className={styles.content}>
        {/* Featured */}
        <div className={styles.featured}>
          <img src={featured.img} alt="" className={styles.featuredImg} />
          <div className={styles.featuredOverlay} />
          <div className={styles.featuredContent}>
            <span className={styles.tag} style={{ background: TAG_COLORS[featured.tag] }}>
              {featured.tag}
            </span>
            <h2 className={styles.featuredTitle}>{featured.title}</h2>
            <p className={styles.featuredSummary}>{featured.summary}</p>
            <span className={styles.date}>{featured.date}</span>
          </div>
        </div>

        {/* Grid */}
        <div className={styles.grid}>
          {rest.map(a => (
            <div key={a.id} className={styles.card}>
              <div className={styles.cardImgWrap}>
                <img src={a.img} alt="" className={styles.cardImg} />
                <div className={styles.cardOverlay} />
                <span className={styles.tag} style={{ background: TAG_COLORS[a.tag], position: 'absolute', top: 10, left: 10 }}>
                  {a.tag}
                </span>
              </div>
              <div className={styles.cardBody}>
                <h3 className={styles.cardTitle}>{a.title}</h3>
                <p className={styles.cardSummary}>{a.summary}</p>
                <span className={styles.date}>{a.date}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
