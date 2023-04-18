import Auth from './assets/screens/auth/auth.jsx'
import Registration from './assets/screens/registration/registration.jsx'
import Header from './assets/screens/appMain/components/header/header.jsx'
import Process from './assets/screens/appMain/components/process/process.jsx'
import Profile from './assets/screens/appMain/components/profile/profile.jsx'
import Archive from './assets/screens/appMain/components/archive/archive.jsx'
import { Routes, Route } from "react-router-dom";
import ProfileHeader from './assets/screens/appMain/components/profile/profileHeader/profileHeader.jsx'
import ProcessHeader from './assets/screens/appMain/components/process/processHeader/processHeader.jsx'
import ArchiveHeader from './assets/screens/appMain/components/archive/archiveHeader/archiveHeader.jsx'
import Varka from './assets/screens/appMain/components/process/processes/varka/varka.jsx'

function App() {
  return (
    <div className='bg-gray-800 w-full h-max min-h-screen z-0 absolute top-0'>
      <Routes>
        <Route path="/" element={<Auth />} />
        <Route path="/Registration" element={<Registration />} />
        <Route path="/Process" element={
          <>
            <Header>
              <ProcessHeader/>
            </Header>
            <Process />

          </>
        } />
        <Route path="/Profile" element={
          <>
            <Header >
              <ProfileHeader />
            </Header>
            <Profile />
          </>
        } />
        <Route path="/Archive" element={
          <>
            <Header >
              <ArchiveHeader />
            </Header>
            <Archive />
          </>
        } />
        <Route path="/Boiling" element={
          <Varka />
        } />
      </Routes >
    </div >
  )
}

export default App;
