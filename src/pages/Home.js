import Search from "../constants/Search";
import Heading from "../constants/Heading";
import Trending from "../components/Trending";
import Toprated from "../components/Toprated";
import Upcoming from "../components/Upcoming";
import Latest from "../components/Latest";

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
    </>
  );
};

export default Home;
