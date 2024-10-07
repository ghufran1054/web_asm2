import Calendar from "./components/admin/Calendar";
import DataCard from "./components/admin/DataCard";
import ProjectsTable from "./components/admin/LatestProjects";
import LineChartComponent from "./components/admin/LineChart";
import Navbar from "./components/admin/Navbar";
import ProfileCard from "./components/admin/profileCard";
import Sidebar from "./components/admin/Sidebar";
import SignUp from "./components/admin/SignupCard";
import UsagePieChart from "./components/admin/usageChart";
import BlogCard from "./components/coffee/blogCard";
import CoffeeCard from "./components/coffee/coffeeCard";
import Footer from "./components/coffee/Footer";
import CoffeeGrid from "./components/coffee/Grid";
import Post from "./components/social/Post";
import PostInput from "./components/social/PostInput";
import WeatherCard from "./components/social/WeatherCard";
const LineChartdata = [
  { name: "Jan", value: 2000 },
  { name: "Feb", value: 1500 },
  { name: "Mar", value: 1700 },
  { name: "Apr", value: 1800 },
  { name: "May", value: 1600 },
  { name: "Jun", value: 2100 },
  { name: "Jul", value: 2200 },
  { name: "Aug", value: 2500 },
  { name: "Sep", value: 2800 },
  { name: "Oct", value: 3200 },
  { name: "Nov", value: 2900 },
  { name: "Dec", value: 3000 },
];
const postData = {
  profilePic: "https://via.placeholder.com/40",
  userName: "John Michael",
  postTime: "3 hours ago",
  content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
  image: "https://via.placeholder.com/400x200", // Add image URL if needed
  reactions: [
    { name: "Like", icon: "https://img.icons8.com/emoji/48/thumbs-up.png" },
    { name: "Love", icon: "https://img.icons8.com/emoji/48/red-heart.png" },
    {
      name: "Haha",
      icon: "https://img.icons8.com/emoji/48/face-with-tears-of-joy.png",
    },
  ],
};
const coffeeData = [
  {
    name: "Cappuccino",
    price: 49,
    description:
      "Usage of the Internet is becoming more common due to rapid advance.",
  },
  {
    name: "Americano",
    price: 49,
    description:
      "Usage of the Internet is becoming more common due to rapid advance.",
  },
  {
    name: "Espresso",
    price: 49,
    description:
      "Usage of the Internet is becoming more common due to rapid advance.",
  },
  {
    name: "Macchiato",
    price: 49,
    description:
      "Usage of the Internet is becoming more common due to rapid advance.",
  },
  {
    name: "Mocha",
    price: 49,
    description:
      "Usage of the Internet is becoming more common due to rapid advance.",
  },
  {
    name: "Coffee Latte",
    price: 49,
    description:
      "Usage of the Internet is becoming more common due to rapid advance.",
  },
  {
    name: "Piccolo Latte",
    price: 49,
    description:
      "Usage of the Internet is becoming more common due to rapid advance.",
  },
  {
    name: "Ristretto",
    price: 49,
    description:
      "Usage of the Internet is becoming more common due to rapid advance.",
  },
  {
    name: "Affogato",
    price: 49,
    description:
      "Usage of the Internet is becoming more common due to rapid advance.",
  },
];
const data = [
  { name: "Chrome", value: 4306, color: "#4285F4" }, // Blue
  { name: "Firefox", value: 3801, color: "#FBBF24" }, // Yellow
  { name: "IE", value: 1689, color: "#EF4444" }, // Red
];

const profileData = {
  name: "Christina Mason",
  title: "Lead Developer",
  skills: [
    "HTML",
    "JavaScript",
    "Sass",
    "Angular",
    "Vue",
    "React",
    "Redux",
    "UI",
    "UX",
  ],
  location: "San Francisco, CA",
  workplace: "GitHub",
  hometown: "Boston",
  website: "staciehall.co",
  socialLinks: ["Twitter", "Facebook", "Instagram", "LinkedIn"],
  imageUrl: "https://via.placeholder.com/100", // Replace with actual image URL
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
      {/* <CoffeeGrid
        title="What kind of Coffee we serve for you"
        subtitle="Who are in extremely love with eco friendly system."
        coffeeList={coffeeData}
      ></CoffeeGrid> */}
      {/* <BlogCard
        imageUrl="https://images.unsplash.com/photo-1521017432531-fbd92d768814?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        categories={["Travel", "Life Style"]}
        title="Portable latest Fashion for young women"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore."
        date="31st January, 2018"
      /> */}

      {/* <div style={{height: '100vh'}} className="flex flex-col justify-end">
      <Footer></Footer>
      </div> */}
      {/* <PostInput userName="Hello World!"></PostInput>
      <Post {...postData}></Post> */}
      {/* <WeatherCard {...{time:"10:30 PM", location:"California, CA", humidity:15, windSpeed:"10km/h", temperature:28}}></WeatherCard> */}
      {/* <Sidebar></Sidebar> */}
      {/* <LineChartComponent data={LineChartdata} title="Recent Movement" /> */}
      <Calendar></Calendar>
    </>
  );
}

export default App;
