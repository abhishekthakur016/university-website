import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import Gallery from './pages/Gallery'
import ActivityUpdates from './pages/ActivityUpdates'
import Contact from './pages/Contact'
import NoticeBoard from "./pages/Notices/NoticeBoard";
import Grievances from './pages/Notices/Grievances'
import OnlineGrievance from './pages/Notices/OnlineGrievance'
import Careers from './pages/Admin/Careers'
import ERP from './pages/Admin/ERP'
import ERPSOP from './pages/Admin/ERPSOP'
import EasyFeeInstallment from './pages/Admin/EasyFeeInstallment'
import Alumni from './pages/Alumni/Alumni'
import AlumniAssociation from './pages/Alumni/AlumniAssociation'
import NotableAlumni from './pages/Alumni/NotableAlumni'
import OurTeam from './pages/Alumni/OurTeam'
import MembershipForm from './pages/Alumni/MembershipForm'
import FacultyLogin from './pages/Authentication/FacultyLogin'
import StudentLogin from './pages/Authentication/StudentLogin'

// Event pages
import Lakshya from './pages/Events/Lakshya'
import NSSUnit from './pages/Events/NSSUnit'
import Prabandhotsav from './pages/Events/Prabandhotsav'
import InterDepartmentSports from './pages/Events/InterDepartmentSports'
import Convocation from './pages/Events/Convocation'
import Convocation2025 from './pages/Events/Convocation2025'
import Convocation2024 from './pages/Events/Convocation2024'
import ConvocationAlumni from './pages/Events/ConvocationAlumni'
import Emanation from './pages/Events/Emanation'
import Emanation2025 from './pages/Events/Emanation2025'
import Emanation2024 from './pages/Events/Emanation2024'
import Emanation2019 from './pages/Events/Emanation2019'
import WomensDay from './pages/Events/WomensDay'
import YogaDay from './pages/Events/YogaDay'
import ScienceDay from './pages/Events/ScienceDay'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="gallery" element={<Gallery />} />
        <Route path="activity-updates" element={<ActivityUpdates />} />
        <Route path="contact" element={<Contact />} />
        
        {/* Events Routes */}
        <Route path="events/lakshya" element={<Lakshya />} />
        <Route path="events/nss-unit" element={<NSSUnit />} />
        <Route path="events/prabandhotsav" element={<Prabandhotsav />} />
        <Route path="events/inter-department-sports" element={<InterDepartmentSports />} />
        <Route path="events/convocation" element={<Convocation />} />
        <Route path="events/convocation-2025" element={<Convocation2025 />} />
        <Route path="events/convocation-2024" element={<Convocation2024 />} />
        <Route path="events/convocation-alumni" element={<ConvocationAlumni />} />
        <Route path="events/emanation" element={<Emanation />} />
        <Route path="events/emanation-2025" element={<Emanation2025 />} />
        <Route path="events/emanation-2024" element={<Emanation2024 />} />
        <Route path="events/emanation-2019" element={<Emanation2019 />} />
        <Route path="events/womens-day" element={<WomensDay />} />
        <Route path="events/yoga-day" element={<YogaDay />} />
        <Route path="events/science-day" element={<ScienceDay />} />
        
        {/* Notices Routes */}
        <Route path="notices/notice-board" element={<NoticeBoard />} />
        <Route path="notices/grievances" element={<Grievances />} />
        <Route path="notices/online-grievance" element={<OnlineGrievance />} />
        
        {/* Admin Routes */}
        <Route path="admin/careers" element={<Careers />} />
        <Route path="admin/erp" element={<ERP />} />
        <Route path="admin/erp-sop" element={<ERPSOP />} />
        <Route path="admin/easy-fee-installment" element={<EasyFeeInstallment />} />
        
        {/* Alumni Routes */}
        <Route path="alumni" element={<Alumni />} />
        <Route path="alumni/association" element={<AlumniAssociation />} />
        <Route path="alumni/notable-alumni" element={<NotableAlumni />} />
        <Route path="alumni/our-team" element={<OurTeam />} />
        <Route path="alumni/membership-form" element={<MembershipForm />} />
        
        {/* Authentication Routes */}
        <Route path="faculty-login" element={<FacultyLogin />} />
        <Route path="student-login" element={<StudentLogin />} />
      </Route>
    </Routes>
  )
}

export default App