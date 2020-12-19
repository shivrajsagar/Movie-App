import { Component } from "react";
import api from "../api/api";
import Card from "../constants/Card";

const API_KEY = "ebb9d8d33069e66b288614ca42d87ad4";

class Search extends Component {
  state = {
    value: "",
    movie: [],
  };

  async componentDidUpdate() {
    const { value } = this.state;
    const response = await api.get(`3/search/movie?api_key=${API_KEY}&query=${value}`);
    this.setState({ movie: response.data.results });
  }

  handleChange = (event) => {
    this.setState({ value: event.target.value });
  };

  render() {
    const { movie, value } = this.state;

    return (
      <>
        <div className="p-32 items-center justify-center text-center from-blue-600 via-teal-500 to-purple-500 bg-gradient-to-r w-full h-64 block ">
          <h1>Search</h1>
          <form class="relative mr-6 my-2">
            <input
              type="search"
              class="bg-purple-white shadow rounded border-0 p-3"
              placeholder="Search by name..."
              value={value}
              onChange={this.handleChange}
            />
          </form>
          <h1>{value}</h1>
        </div>

        {value === "" ? null : (
          <div className=" container mx-auto grid grid-cols-1 md:grid-cols-6 gap-1">
            {movie.map((movie) => {
              return (
                <div>
                  <Card movie={movie} />
                </div>
              );
            })}
          </div>
        )}
      </>
    );
  }
}
export default Search;
