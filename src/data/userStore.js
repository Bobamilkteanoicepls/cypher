import { useState, useEffect, createContext, useContext } from 'react'

const defaultProfile = {
  name: '',
  country: '',
  city: '',
  bio: '',
  age: '',
  styles: [],
  level: '',
  experience: '',
  instagram: '',
  avatar: null,
}

const defaultStats = {
  favoriteDancers: [],
  videosWatched: 0,
  articlesRead: 0,
  eventsAttended: 0,
  activity: [],
}

export const UserContext = createContext(null)

export function useUser() {
  return useContext(UserContext)
}

export function useUserStore() {
  const [profile, setProfile] = useState(() => {
    try { return JSON.parse(localStorage.getItem('cypher_profile')) || defaultProfile }
    catch { return defaultProfile }
  })

  const [stats, setStats] = useState(() => {
    try { return JSON.parse(localStorage.getItem('cypher_stats')) || defaultStats }
    catch { return defaultStats }
  })

  useEffect(() => {
    localStorage.setItem('cypher_profile', JSON.stringify(profile))
  }, [profile])

  useEffect(() => {
    localStorage.setItem('cypher_stats', JSON.stringify(stats))
  }, [stats])

  const toggleFavorite = (dancerId, dancerName) => {
    setStats(prev => {
      const isFav = prev.favoriteDancers.includes(dancerId)
      const newFavs = isFav
        ? prev.favoriteDancers.filter(id => id !== dancerId)
        : [...prev.favoriteDancers, dancerId]
      const activity = isFav ? prev.activity : [
        { type: 'liked', label: `Liked ${dancerName}`, ts: Date.now() },
        ...prev.activity.slice(0, 19)
      ]
      return { ...prev, favoriteDancers: newFavs, activity }
    })
  }

  const isFavorite = (dancerId) => stats.favoriteDancers.includes(dancerId)

  const updateProfile = (updates) => setProfile(p => ({ ...p, ...updates }))

  return { profile, stats, updateProfile, toggleFavorite, isFavorite }
}
