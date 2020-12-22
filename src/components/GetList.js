import { Component } from "react";
import api from "../api/api";
import Card from "../constants/Card";

const API_KEY = "ebb9d8d33069e66b288614ca42d87ad4";

class GetList extends Component {
  state = {
    movie: [],
  };
  async componentDidMount() {
    const response = await api.get(`/3/movie/590706/lists?api_key=${API_KEY}`);
    this.setState({ movie: response.data.results });
  }
  render() {
    const { movie } = this.state;
    return (
      <div className=" container mx-auto grid grid-cols-1 md:grid-cols-6 gap-1">
        {movie.map((movie) => {
          return (
            <div className="mb-14">
              <Card movie={movie} />
              <h1>{movie.id}</h1>
              <h1>{movie.name}</h1>
            </div>
          );
        })}
      </div>
    );
  }
}

export default GetList;
