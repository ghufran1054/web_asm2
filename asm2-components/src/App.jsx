import DataCard from "./components/admin/DataCard";
import ProjectsTable from "./components/admin/LatestProjects";
import Navbar from "./components/admin/Navbar";
import ProfileCard from "./components/admin/profileCard";
import SignUp from "./components/admin/SignupCard";
import UsagePieChart from "./components/admin/usageChart";
const data = [
  { name: "Chrome", value: 4306, color: "#4285F4" }, // Blue
  { name: "Firefox", value: 3801, color: "#FBBF24" }, // Yellow
  { name: "IE", value: 1689, color: "#EF4444" }, // Red
];

const profileData = {
  name: 'Christina Mason',
  title: 'Lead Developer',
  skills: ['HTML', 'JavaScript', 'Sass', 'Angular', 'Vue', 'React', 'Redux', 'UI', 'UX'],
  location: 'San Francisco, CA',
  workplace: 'GitHub',
  hometown: 'Boston',
  website: 'staciehall.co',
  socialLinks: ['Twitter', 'Facebook', 'Instagram', 'LinkedIn'],
  imageUrl: 'https://via.placeholder.com/100', // Replace with actual image URL
};
const projectsData = [
  {
    name: "Project Alpha",
    startDate: "2024-01-01",
    endDate: "2024-06-30",
    status: "Done",
    assignee: "John Doe",
  },
  {
    name: "Project Beta",
    startDate: "2024-03-01",
    endDate: "2024-12-31",
    status: "In Progress",
    assignee: "Jane Smith",
  },
  {
    name: "Project Gamma",
    startDate: "2024-05-15",
    endDate: "2024-07-30",
    status: "Cancelled",
    assignee: "Alice Johnson",
  },
];

function App() {
  return (
    <>
      {/* <Navbar></Navbar>
      <DataCard title="Sales" value={"$13 089"} percentage={-6.65} iconUrl="https://img.icons8.com/material-outlined/24/us-dollar--v1.png"></DataCard> */}
      {/* <SignUp></SignUp> */}
      {/* <ProjectsTable projects={projectsData}></ProjectsTable> */}
      {/* <UsagePieChart data={data} title="Browser Usage"></UsagePieChart> */}
      {/* <ProfileCard name={profileData.name} title={profileData.title} skills={profileData.skills} location={profileData.location} workplace={profileData.workplace} hometown={profileData.hometown} website={profileData.website} socialLinks={profileData.socialLinks} imageUrl={profileData.imageUrl}></ProfileCard> */}
      
    </>
  );
}

export default App;
