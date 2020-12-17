import { Component } from "react";
import api from "../api/api";
import Card from "../constants/Card";

const API_KEY = "ebb9d8d33069e66b288614ca42d87ad4";

class Trending extends Component {
  state = {
    movie: [],
  };
  async componentDidMount() {
    const response = await api.get(`/3/movie/now_playing?api_key=${API_KEY}`);
    this.setState({ movie: response.data.results });
  }
  render() {
    const { movie } = this.state;

    return (
      <div className="grid grid-flow-col auto-cols-min gap-2">
        {movie.map((movie) => {
          return (
            <div>
              <Card movie={movie} />
            </div>
          );
        })}
      </div>
    );
  }
}

export default Trending;
