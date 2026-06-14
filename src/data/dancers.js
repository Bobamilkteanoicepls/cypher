// CYPHER dancer dataset — Batch 1 (fact-checked June 2026).
// Every entry below is verified against public sources (Wikipedia, Red Bull,
// Olympics.com, official sites). `photo: null` means no freely-licensed image
// exists yet — the UI renders a styled placeholder. Real photos are Wikimedia
// Commons (CC-licensed) only.

export const STYLES = [
  'Hip Hop', 'Locking', 'Popping', 'Waacking', 'House', 'Breaking', 'Krump', 'Voguing'
]

export const dancers = [
  // ───────────────────────── HIP HOP ─────────────────────────
  {
    id: 'kyoka',
    name: 'Kyoka',
    realName: 'Kyoka Yamamoto (山本恭華)',
    country: 'Japan',
    flag: '🇯🇵',
    city: 'Osaka',
    styles: ['Hip Hop', 'Freestyle', 'House'],
    primaryStyle: 'Hip Hop',
    experience: 20,
    age: 30,
    born: 'April 24, 1996',
    bio: 'Japanese hip-hop dancer and model from Osaka. She and her partner Maika (as the crew Rushball) became the first Japanese crew to win the Hip-Hop category at Juste Debout. The first non-breaking dancer on the global Red Bull Dancers roster.',
    mentor: null,
    crew: 'Rushball',
    photo: 'https://upload.wikimedia.org/wikipedia/commons/1/10/Kyoka_Yamamoto_in_December_2025.png',
    achievements: [
      { title: 'Red Bull Dance Your Style World Final Winner', year: 2022 },
      { title: 'Juste Debout Hip-Hop World Winner (w/ Maika, as Rushball)', year: 2016 },
    ],
    videos: [
      { title: 'Red Bull Dance Your Style World Final 2022', url: 'https://www.youtube.com/results?search_query=Kyoka+Red+Bull+Dance+Your+Style+World+Final+2022', duration: '—', year: 2022 },
      { title: 'Juste Debout 2016 Hip-Hop Final (Rushball)', url: 'https://www.youtube.com/results?search_query=Juste+Debout+2016+Hip+Hop+final+Rushball+Kyoka+Maika', duration: '—', year: 2016 },
    ]
  },
  {
    id: 'les-twins',
    name: 'Les Twins',
    realName: 'Larry & Laurent Bourgeois',
    country: 'France',
    flag: '🇫🇷',
    city: 'Sarcelles',
    styles: ['Hip Hop', 'New Style', 'Freestyle'],
    primaryStyle: 'Hip Hop',
    experience: 25,
    age: 37,
    born: 'December 6, 1988',
    bio: 'Identical twin brothers from Sarcelles, France, and self-taught dancers who became global icons after their street-dance videos went viral. Longtime dancers for Beyoncé and the first dancers signed to the Jordan brand.',
    mentor: null,
    crew: null,
    photo: 'https://upload.wikimedia.org/wikipedia/commons/3/36/Les_Twins_at_SF_Workshop_April_2019.jpg',
    achievements: [
      { title: 'World of Dance (NBC) Champions', year: 2017 },
      { title: 'Juste Debout Hip-Hop New Style Winners', year: 2011 },
      { title: 'Beyoncé World Tour Dancers (through 2014)', year: 2011 },
    ],
    videos: [
      { title: 'World of Dance 2017 Winning Performance', url: 'https://www.youtube.com/results?search_query=Les+Twins+World+of+Dance+2017+winners', duration: '—', year: 2017 },
      { title: 'Juste Debout 2011 Final', url: 'https://www.youtube.com/results?search_query=Les+Twins+Juste+Debout+2011+final', duration: '—', year: 2011 },
    ]
  },
  {
    id: 'riehata',
    name: 'RieHata',
    realName: 'Rie Hata',
    country: 'Japan',
    flag: '🇯🇵',
    city: 'Tokyo',
    styles: ['Hip Hop', 'Choreography'],
    primaryStyle: 'Hip Hop',
    experience: 20,
    age: 35,
    born: 'August 9, 1990',
    bio: 'Japanese-Filipino dancer and choreographer, dubbed the "Swagger Queen" of K-pop choreography. Director of avex ROYALBRATS in Japan\'s D.LEAGUE and leader of the Queen of Swag crew.',
    mentor: null,
    crew: 'Queen of Swag',
    photo: null,
    achievements: [
      { title: 'Choreographed BTS "Idol" & "Mic Drop"', year: 2017 },
      { title: 'Director, avex ROYALBRATS (D.LEAGUE)', year: 2021 },
      { title: 'Choreography for TWICE, NCT, Red Velvet, EXO', year: 2018 },
    ],
    videos: [
      { title: 'RIEHATA Choreography Reel', url: 'https://www.youtube.com/results?search_query=RIEHATA+choreography', duration: '—', year: 2020 },
      { title: 'BTS "Idol" Choreography', url: 'https://www.youtube.com/results?search_query=BTS+Idol+RIEHATA+choreography', duration: '—', year: 2018 },
    ]
  },

  // ───────────────────────── POPPING ─────────────────────────
  {
    id: 'salah',
    name: 'Salah',
    realName: 'Salah Benlemqawanssa',
    country: 'France',
    flag: '🇫🇷',
    city: 'Saint-Denis',
    styles: ['Popping', 'Animation', 'Boogaloo'],
    primaryStyle: 'Popping',
    experience: 28,
    age: 46,
    born: 'June 28, 1979',
    bio: 'French dancer of Moroccan and Algerian descent, best known for popping and animation. He calls his personal style P.A.B.E. — Popping, Animation, Boogaloo, Effects — and has won televised talent shows across three countries.',
    mentor: null,
    crew: 'The Family',
    photo: null,
    achievements: [
      { title: 'La France a un incroyable talent — Winner', year: 2006 },
      { title: 'Arabs Got Talent (Season 4) — Winner', year: 2014 },
      { title: 'Tú Sí Que Vales Italy (Season 4) — Winner', year: 2017 },
      { title: 'Battle of the Year — 2nd place (crew The Family)', year: 1998 },
    ],
    videos: [
      { title: 'Salah — France\'s Got Talent Final', url: 'https://www.youtube.com/results?search_query=Salah+incroyable+talent+final+2006', duration: '—', year: 2006 },
      { title: 'Salah Popping Solo Showcase', url: 'https://www.youtube.com/results?search_query=Salah+popping+animation+showcase', duration: '—', year: 2010 },
    ]
  },
  {
    id: 'mr-wiggles',
    name: 'Mr. Wiggles',
    realName: 'Steffan Clemente',
    country: 'USA',
    flag: '🇺🇸',
    city: 'Bronx, New York',
    styles: ['Popping', 'Boogaloo'],
    primaryStyle: 'Popping',
    experience: 45,
    age: 61,
    born: '1965',
    bio: 'A pioneer of hip-hop dance from the South Bronx, of Puerto Rican descent. Member of the Rock Steady Crew, the Electric Boogaloos, Zulu Nation and TC5. Appeared in the foundational films Wild Style (1983) and Beat Street (1984).',
    mentor: null,
    crew: 'Rock Steady Crew · Electric Boogaloos',
    photo: 'https://upload.wikimedia.org/wikipedia/commons/e/ed/Mr_Wiggles.jpg',
    achievements: [
      { title: 'Featured in "Wild Style"', year: 1983 },
      { title: 'Featured in "Beat Street"', year: 1984 },
      { title: 'Rock Steady Crew & Electric Boogaloos Member', year: 1980 },
    ],
    videos: [
      { title: 'Mr. Wiggles Popping Foundations', url: 'https://www.youtube.com/results?search_query=Mr+Wiggles+popping+foundations', duration: '—', year: 2010 },
      { title: 'Wild Style (1983) Dance Scene', url: 'https://www.youtube.com/results?search_query=Wild+Style+1983+Rock+Steady+Crew', duration: '—', year: 1983 },
    ]
  },
  {
    id: 'bruce-ykanji',
    name: 'Bruce Ykanji',
    realName: 'Bruce Ykanji Sone',
    country: 'France',
    flag: '🇫🇷',
    city: 'Paris',
    styles: ['Popping'],
    primaryStyle: 'Popping',
    experience: 35,
    age: 50,
    born: '1976',
    bio: 'French popper born in Paris who began dancing in Cameroon at age eight. Founder of Juste Debout — the world\'s largest standing street-dance competition — and co-founder of the Juste Debout School.',
    mentor: null,
    crew: 'TKS (The Kriminal Starz)',
    photo: null,
    achievements: [
      { title: 'Founded Juste Debout', year: 2001 },
      { title: 'First Juste Debout event held in Paris', year: 2002 },
      { title: 'Co-founded the Juste Debout School', year: 2009 },
    ],
    videos: [
      { title: 'Juste Debout — The Story', url: 'https://www.youtube.com/results?search_query=Bruce+Ykanji+Juste+Debout+documentary', duration: '—', year: 2018 },
    ]
  },

  // ───────────────────────── WAACKING ─────────────────────────
  {
    id: 'princess-lockerooo',
    name: 'Princess Lockerooo',
    realName: 'Samara Cohen',
    country: 'USA',
    flag: '🇺🇸',
    city: 'New York',
    styles: ['Waacking'],
    primaryStyle: 'Waacking',
    experience: 20,
    age: null,
    born: null,
    bio: 'New York artist, educator and producer who has reshaped the global understanding of Waacking. She founded the Waack Dancer Training Program and, in 2022, The Fabulous Waack Dancers — the first Waacking company in the U.S.',
    mentor: null,
    crew: 'The Fabulous Waack Dancers',
    photo: null,
    achievements: [
      { title: 'Founded The Fabulous Waack Dancers', year: 2022 },
      { title: 'NY Dance & Performance (Bessie) Award — Breakout Choreographer', year: 2019 },
      { title: 'Featured on So You Think You Can Dance & AGT', year: 2015 },
    ],
    videos: [
      { title: 'Princess Lockerooo — Waacking Showcase', url: 'https://www.youtube.com/results?search_query=Princess+Lockerooo+waacking', duration: '—', year: 2018 },
    ]
  },

  // ───────────────────────── BREAKING ─────────────────────────
  {
    id: 'menno',
    name: 'Menno',
    realName: 'Menno van Gorp',
    country: 'Netherlands',
    flag: '🇳🇱',
    city: 'Tilburg',
    styles: ['Breaking'],
    primaryStyle: 'Breaking',
    experience: 25,
    age: 37,
    born: 'February 7, 1989',
    bio: 'Dutch B-Boy and the most decorated competitor in Red Bull BC One history — the only breaker to win the world title four times. Known for intelligent musicality and battle strategy. Competed for the Netherlands at the 2024 Olympics.',
    mentor: null,
    crew: 'Red Bull BC One All Stars',
    photo: null,
    achievements: [
      { title: 'Red Bull BC One World Champion (4x record)', year: 2024 },
      { title: 'Red Bull BC One World Champion', year: 2019 },
      { title: 'Red Bull BC One World Champion', year: 2017 },
      { title: 'Red Bull BC One World Champion', year: 2014 },
      { title: 'WDSF World Breaking Champion', year: 2019 },
    ],
    videos: [
      { title: 'Red Bull BC One World Final 2024 (Rio)', url: 'https://www.youtube.com/results?search_query=Red+Bull+BC+One+2024+World+Final+Menno', duration: '—', year: 2024 },
      { title: 'Red Bull BC One World Final 2014', url: 'https://www.youtube.com/results?search_query=Red+Bull+BC+One+2014+final+Menno', duration: '—', year: 2014 },
    ]
  },
  {
    id: 'hong-10',
    name: 'Hong 10',
    realName: 'Kim Hong-yul',
    country: 'South Korea',
    flag: '🇰🇷',
    city: 'Seoul',
    styles: ['Breaking'],
    primaryStyle: 'Breaking',
    experience: 25,
    age: 41,
    born: 'November 28, 1984',
    bio: 'A legend of Korean breaking and three-time Red Bull BC One champion across nearly two decades. He has a power move named after him — the "Hong 10 freeze," an inverted headstand variation — and is famed for his two-finger freeze.',
    mentor: null,
    crew: 'Red Bull BC One All Stars · 7Commandoz',
    photo: null,
    achievements: [
      { title: 'Red Bull BC One World Champion', year: 2023 },
      { title: 'Red Bull BC One World Champion', year: 2013 },
      { title: 'Red Bull BC One World Champion', year: 2006 },
    ],
    videos: [
      { title: 'Red Bull BC One World Final 2006', url: 'https://www.youtube.com/results?search_query=Red+Bull+BC+One+2006+Hong+10', duration: '—', year: 2006 },
      { title: 'Red Bull BC One World Final 2023 (Paris)', url: 'https://www.youtube.com/results?search_query=Red+Bull+BC+One+2023+Hong+10', duration: '—', year: 2023 },
    ]
  },
  {
    id: 'victor',
    name: 'Victor',
    realName: 'Victor Montalvo',
    country: 'USA',
    flag: '🇺🇸',
    city: 'Kissimmee, Florida',
    styles: ['Breaking'],
    primaryStyle: 'Breaking',
    experience: 25,
    age: 32,
    born: 'May 1, 1994',
    bio: 'Mexican-American B-Boy introduced to breaking by his father and uncle at age six. A two-time Red Bull BC One world champion and the first American to qualify for Olympic breaking, taking bronze at Paris 2024.',
    mentor: null,
    crew: 'Red Bull BC One All Stars',
    photo: null,
    achievements: [
      { title: 'Olympic Breaking Bronze, Paris', year: 2024 },
      { title: 'WDSF World Breaking Champion', year: 2023 },
      { title: 'Red Bull BC One World Champion', year: 2022 },
      { title: 'The World Games Gold (B-Boys)', year: 2022 },
      { title: 'Red Bull BC One World Champion', year: 2015 },
    ],
    videos: [
      { title: 'Paris 2024 Olympic Breaking', url: 'https://www.youtube.com/results?search_query=Victor+Montalvo+Olympics+2024+breaking', duration: '—', year: 2024 },
      { title: 'Red Bull BC One World Final 2022', url: 'https://www.youtube.com/results?search_query=Red+Bull+BC+One+2022+Victor', duration: '—', year: 2022 },
    ]
  },
  {
    id: 'phil-wizard',
    name: 'Phil Wizard',
    realName: 'Philip Kim',
    country: 'Canada',
    flag: '🇨🇦',
    city: 'Vancouver',
    styles: ['Breaking'],
    primaryStyle: 'Breaking',
    experience: 17,
    age: 28,
    born: 'June 21, 1997',
    bio: 'Canadian B-Boy of Korean heritage who began breaking at 12 in Vancouver. He became the first-ever men\'s Olympic Breaking champion at Paris 2024, defeating France\'s Dany Dann in the final.',
    mentor: null,
    crew: null,
    photo: 'https://upload.wikimedia.org/wikipedia/commons/b/b8/2025-12-31_Phil_Wizard_for_Marie_Claire_Korea_02_%28cropped%29.jpg',
    achievements: [
      { title: 'Olympic Breaking Gold, Paris (first-ever)', year: 2024 },
      { title: 'Pan American Games Gold, Santiago', year: 2023 },
      { title: 'WDSF World Breaking Champion', year: 2022 },
    ],
    videos: [
      { title: 'Paris 2024 Olympic Breaking Final', url: 'https://www.youtube.com/results?search_query=Phil+Wizard+Olympics+2024+gold+final', duration: '—', year: 2024 },
      { title: 'WDSF World Championship 2022', url: 'https://www.youtube.com/results?search_query=Phil+Wizard+WDSF+World+Championship+2022', duration: '—', year: 2022 },
    ]
  },
  {
    id: 'shigekix',
    name: 'Shigekix',
    realName: 'Shigeyuki Nakarai (半井重幸)',
    country: 'Japan',
    flag: '🇯🇵',
    city: 'Osaka',
    styles: ['Breaking'],
    primaryStyle: 'Breaking',
    experience: 17,
    age: 24,
    born: 'March 11, 2002',
    bio: 'Japanese B-Boy from Osaka who discovered breaking at seven through his sister, B-Girl Ayane. He became the youngest-ever Red Bull BC One World Champion in 2020 and competed at the Paris 2024 Olympics. Member of the K.A.K.B crew.',
    mentor: null,
    crew: 'K.A.K.B',
    photo: 'https://upload.wikimedia.org/wikipedia/commons/7/7f/%E5%8D%8A%E4%BA%95%E9%87%8D%E5%B9%B8.jpg',
    achievements: [
      { title: 'Red Bull BC One World Champion (youngest ever)', year: 2020 },
      { title: 'Youth Olympic Games Bronze, Buenos Aires', year: 2018 },
      { title: 'Paris Olympics Breaking Competitor', year: 2024 },
    ],
    videos: [
      { title: 'Red Bull BC One World Final 2020', url: 'https://www.youtube.com/results?search_query=Shigekix+Red+Bull+BC+One+2020+final', duration: '—', year: 2020 },
      { title: 'Paris 2024 Olympic Breaking', url: 'https://www.youtube.com/results?search_query=Shigekix+Olympics+2024+breaking', duration: '—', year: 2024 },
    ]
  },
]

export const getDancersByStyle = (style) =>
  dancers.filter(d => d.styles.includes(style))

export const getDancerById = (id) =>
  dancers.find(d => d.id === id)
