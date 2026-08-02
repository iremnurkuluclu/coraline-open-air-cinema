import {
  Navigate,
  Route,
  Routes,
  useLocation,
} from "react-router-dom"

import CoralineHome from "./CoralineHome.jsx"
import FilmPage from "./FilmPage.jsx"
import EventPage from "./EventPage.jsx"
import TicketsPage from "./TicketsPage.jsx"
import MyTicketsPage from "./MyTicketsPage.jsx"
import FaqPage from "./FaqPage.jsx"
import ContactPage from "./ContactPage.jsx"
import SiteFooter from "./SiteFooter.jsx"

function App() {
  const location = useLocation()

  return (
    <>
      <Routes>
        <Route path="/" element={<CoralineHome />} />
        <Route path="/film" element={<FilmPage />} />
        <Route path="/etkinlik" element={<EventPage />} />
        <Route path="/biletler" element={<TicketsPage />} />
        <Route path="/biletlerim" element={<MyTicketsPage />} />
        <Route path="/sss" element={<FaqPage />} />
        <Route path="/iletisim" element={<ContactPage />} />

        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>

      {location.pathname !== "/" && <SiteFooter />}
    </>
  )
}

export default App