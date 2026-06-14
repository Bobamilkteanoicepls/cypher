import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { UserContext, useUserStore } from './data/userStore'
import Layout from './components/Layout'
import Discover from './pages/Discover'
import DancerProfile from './pages/DancerProfile'
import MyProfile from './pages/MyProfile'
import News from './pages/News'

export default function App() {
  const store = useUserStore()

  return (
    <UserContext.Provider value={store}>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route index element={<Navigate to="/discover" replace />} />
            <Route path="/discover" element={<Discover />} />
            <Route path="/dancer/:id" element={<DancerProfile />} />
            <Route path="/profile" element={<MyProfile />} />
            <Route path="/news" element={<News />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </UserContext.Provider>
  )
}
