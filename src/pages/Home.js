import Search from "../constants/Search";
import Heading from "../constants/Heading";
import Trending from "../components/Trending";
import Toprated from "../components/Toprated";
import Upcoming from "../components/Upcoming";
import Latest from "../components/Latest";
import GetList from "../components/GetList";
import GetDetail from "../components/GetDetail";

const Home = () => {
  return (
    <>
      <Search />
      <Heading>Trending</Heading>
      <Trending />
      <Heading>Top Rated</Heading>
      <Toprated />
      <Heading>Upcoming</Heading>
      <Upcoming />
      <Heading>Latest</Heading>
      <Latest />
      <Heading>Get Movie List</Heading>
      <GetList />
      <Heading>Get Detail</Heading>
      <GetDetail />
    </>
  );
};

export default Home;
