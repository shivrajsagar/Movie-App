import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../api/api";
import poster from "../images/poster.png";

const API_KEY = "ebb9d8d33069e66b288614ca42d87ad4";

const Poster = `https://image.tmdb.org/t/p/w200`;

const MovieInfo = () => {
  const [movie, setMovie] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const fetchMovie = async () => {
      const response = await api.get(`/3/movie/${id}?api_key=${API_KEY}`);
      setMovie(response.data);
    };
    fetchMovie();
  });

  return (
    <div>
      <div className="md:flex bg-gray-100 rounded-xl p-8 md:p-0 bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500">
        <img className="w-32 h-32 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto"
          src={movie.poster_path === null ? poster : Poster + movie.poster_path}
          alt={movie.title}
        />
        <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
          <h1>MovieInfo-{id}</h1>
          <p className="text-lg font-semibold">{movie.original_title}</p>
          <p className="font-medium">{movie.overview}</p>
          <p className="text-white">Popularity</p>
          <p>{movie.popularity}</p>
        </div>
      </div>
      <div className="header large border first">
        <div className=" bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500">
          <div className="single_column">
            <section id="original_header" className="images inner">
              <div className="poster_wrapper true">
                <div className="poster">
                  <div className="">
                    <img
                      src={
                        movie.poster_path === null
                          ? poster
                          : Poster + movie.poster_path
                      }
                      alt={movie.title}
                    />
                  </div>

                  <div className="zoom">
                    <a href className="no_click">
                      <span className="glyphicons_v2 fullscreen white"></span>{" "}
                      Expand
                    </a>
                  </div>
                </div>

                <div className="ott_offer">
                  <div className="text_wrapper">
                    <div className="loading_wrapper">
                      <div className="ball-scale-multiple loader white">
                        <div></div>
                        <div></div>
                        <div></div>
                      </div>
                    </div>

                    <div className="button">
                      <div class="provider">
                        <img
                          src="https://images.justwatch.com/icon/52449861/s100"
                          width="36"
                          height="36"
                          alt="Now Streaming on Amazon Prime Video"
                        />
                      </div>
                      <div className="text">
                        <span>
                          <h4>Now Streaming</h4>
                          <h3>
                            <a
                              className="no_click"
                              href="/tv/76479-the-boys/watch"
                              title="Now Streaming on Amazon Prime Video"
                            >
                              Watch Now
                            </a>
                          </h3>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="header_poster_wrapper true">
                <section className="header poster">
                  <div className="title ott_true" dir="auto">
                    <h2 className="8">
                      <a href="/tv/76479-the-boys">The Boys</a>
                      <span className="tag release_date">(2019)</span>
                    </h2>

                    <div className="facts">
                      <span className="certification">TV-MA</span>

                      <span className="genres">
                        <a href="/genre/10765-sci-fi-fantasy/tv">
                          Sci-Fi & Fantasy
                        </a>
                        ,&nbsp;
                        <a href="/genre/10759-action-adventure/tv">
                          Action & Adventure
                        </a>
                      </span>

                      <span className="runtime">1h</span>
                    </div>
                  </div>
                  <ul className="auto actions">
                    <li className="chart">
                      <div className="consensus details">
                        <div className="outer_ring">
                          <div
                            className="user_score_chart"
                            data-percent="85.0"
                            data-track-color="#204529"
                            data-bar-color="#21d07a"
                          >
                            <div className="percent">
                              <span className="icon icon-r85"></span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="text">User Score</div>
                    </li>

                    <li
                      className="tooltip use_tooltip list tooltip_hover"
                      title="Add to list"
                    >
                      <a className="no_click" href>
                        <span className="glyphicons_v2 thumbnails-list white"></span>
                      </a>
                    </li>

                    <li
                      className="tooltip use_tooltip"
                      title="Mark as favorite"
                    >
                      <a
                        id="favourite"
                        className="no_click add_to_account_list favourite"
                        href
                      >
                        <span className="glyphicons_v2 heart white false"></span>
                      </a>
                    </li>

                    <li
                      className="tooltip use_tooltip"
                      title="Add to your watchlist"
                    >
                      <a
                        id="watchlist"
                        className="no_click add_to_account_list watchlist"
                        href
                      >
                        <span className="glyphicons_v2 bookmark white false"></span>
                      </a>
                    </li>

                    <li
                      className="tooltip use_tooltip rating tooltip_hover"
                      title="Rate It!"
                    >
                      <a id="rate_it" className="no_click rating" href>
                        <span className="glyphicons_v2 star white false"></span>
                      </a>
                    </li>

                    <li className="video none">
                      <a
                        className="no_click play_trailer"
                        href
                        data-site="YouTube"
                        data-id="tcrNsIaQkb4"
                        data-title="Play Trailer"
                      >
                        <span className="glyphicons_v2 play"></span> Play
                        Trailer
                      </a>
                    </li>
                  </ul>

                  <div className="header_info">
                    <h3 className="tagline" dir="auto">
                      Never meet your heroes.
                    </h3>

                    <h3 dir="auto">Overview</h3>
                    <div className="overview" dir="auto">
                      <p>
                        A group of vigilantes known informally as “The Boys” set
                        out to take down corrupt superheroes with no more than
                        blue-collar grit and a willingness to fight dirty.
                      </p>
                    </div>

                    <ol className="people no_image">
                      <li className="profile">
                        <p>
                          <a href="/person/58321-eric-kripke">{movie.original_title}</a>
                        </p>
                        <p className="character">Creator</p>
                      </li>
                    </ol>
                  </div>
                </section>
              </div>
            </section>

            <div id="ott_offers_window" className="hidden"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieInfo;
