import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import Mission from './pages/Mission';
import News from './pages/News';
import Events from './pages/Events';
import DialoguesLectures from './pages/DialoguesLectures';
import Workshops from './pages/Workshops';
import Centers from './pages/Centers';
import AiForce from './pages/AiForce';
import ArtCenter from './pages/ArtCenter';
import ArtWatercolor from './pages/ArtWatercolor';
import ArtPhotography from './pages/ArtPhotography';
import Membership from './pages/Membership';
import Contact from './pages/Contact';
import EventPost from './pages/EventPost';
import Gwfmd2018Home from './pages/workshops/Gwfmd2018Home';
import Gwfmd2018Committees from './pages/workshops/Gwfmd2018Committees';
import Gwfmd2018Speakers from './pages/workshops/Gwfmd2018Speakers';
import Gwfmd2018Topics from './pages/workshops/Gwfmd2018Topics';
import Gwfmd2018Programs from './pages/workshops/Gwfmd2018Programs';
import Gwfmd2018Submission from './pages/workshops/Gwfmd2018Submission';
import Gwfmd2018Venue from './pages/workshops/Gwfmd2018Venue';
import Gwfmd2018Hotels from './pages/workshops/Gwfmd2018Hotels';
import Gwfmd2018Registration from './pages/workshops/Gwfmd2018Registration';
import Gwfmd2018VisaInfo from './pages/workshops/Gwfmd2018VisaInfo';
import Nast2023Home from './pages/workshops/Nast2023Home';
import Nast2023Committees from './pages/workshops/Nast2023Committees';
import Nast2023Speakers from './pages/workshops/Nast2023Speakers';
import Nast2023Program from './pages/workshops/Nast2023Program';
import Nast2023Venue from './pages/workshops/Nast2023Venue';
import Nast2023Hotels from './pages/workshops/Nast2023Hotels';
import Nast2023Registration from './pages/workshops/Nast2023Registration';
import Nast2023VisaInfo from './pages/workshops/Nast2023VisaInfo';
import Nast2023Photos from './pages/workshops/Nast2023Photos';
import Fob2026Home from './pages/workshops/Fob2026Home';

export default function App() {
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL.replace(/\/$/, '')}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about-us" element={<AboutUs />} />
          <Route path="mission" element={<Mission />} />
          <Route path="news" element={<News />} />
          <Route path="events" element={<Events />} />
          <Route path="events-dialogs-lectures" element={<DialoguesLectures />} />
          <Route path="workshops" element={<Workshops />} />
          <Route path="2026-fob" element={<Fob2026Home />} />
          <Route path="centers" element={<Centers />} />
          <Route path="centers/aiforce" element={<AiForce />} />
          <Route path="art-center" element={<ArtCenter />} />
          <Route path="art-watercolor" element={<ArtWatercolor />} />
          <Route path="art-photography" element={<ArtPhotography />} />
          <Route path="membership" element={<Membership />} />
          <Route path="contact" element={<Contact />} />
          <Route path="post/:slug" element={<EventPost />} />

          <Route path="2018-gwfmd" element={<Gwfmd2018Home />} />
          <Route path="2018-committees" element={<Gwfmd2018Committees />} />
          <Route path="2018-speakers" element={<Gwfmd2018Speakers />} />
          <Route path="2018-topics" element={<Gwfmd2018Topics />} />
          <Route path="2018-programs" element={<Gwfmd2018Programs />} />
          <Route path="2018-submission" element={<Gwfmd2018Submission />} />
          <Route path="2018-venue" element={<Gwfmd2018Venue />} />
          <Route path="2018-hotels" element={<Gwfmd2018Hotels />} />
          <Route path="2018-registration" element={<Gwfmd2018Registration />} />
          <Route path="2018-visa-info" element={<Gwfmd2018VisaInfo />} />

          <Route path="2023-nast" element={<Nast2023Home />} />
          <Route path="2023-committees" element={<Nast2023Committees />} />
          <Route path="2023-speakers" element={<Nast2023Speakers />} />
          <Route path="2023-program" element={<Nast2023Program />} />
          <Route path="2023-venue" element={<Nast2023Venue />} />
          <Route path="2023-hotels" element={<Nast2023Hotels />} />
          <Route path="2023-registration" element={<Nast2023Registration />} />
          <Route path="2023-visa-info" element={<Nast2023VisaInfo />} />
          <Route path="wk2023-nast-photo" element={<Nast2023Photos />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
