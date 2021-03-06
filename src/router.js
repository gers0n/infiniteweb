import React, { Component } from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
// import Videos from "./components/videos/videos";
// import videosData from "./videos.json";
import Navbar from "./components/navbar/navbar";
// import Video from "./components/videos/video";
// import App from "./components/App";
import MoviesContainer from "./containers/moviesContainer";
import SeriesContainer from "./containers/seriesContainer";
import SearchContainer from "./containers/searchContainer";

// import VideosCarousel, {BootstrapCarousel} from "./components/videos/VideosCarousel";
import gql from "graphql-tag";
import { graphql } from "react-apollo";

const Queries = gql`
  query{
    genres:getAllGenres{
      name
    }
  }
`;

class RouterMap extends Component {
  state = {
    currentPageNumber: 1,
    currentUser: {},
    data: {
      genres: []
    }
  };
  render() {
    return (
      <BrowserRouter>
        {this.props.data.loading ? (
          <div>Loading...</div>
        ) : (
          <div>
            <Navbar data={this.props.data}/>
            <div className="container-fluid">
              <div className="container">
                <Switch>
                  <Route
                    exact
                    path="/"
                    render={state => <MoviesContainer match={state.match} />}
                  />
                  <Route
                    exact
                    path="/movies"
                    render={state => <MoviesContainer match={state.match} />}
                  />
                  <Route
                    exact
                    path="/series"
                    render={state => <SeriesContainer match={state.match} />}
                  />
                  <Route
                    exact
                    path="/search"
                    render={state => <SearchContainer match={state.match} />}
                  />
                  {/* <Route
                  exact
                  path="/carousel"
                  render={state => <BootstrapCarousel match={state.match} />}
                /> */}
                  {/* <Route
              path="/p=:currentPageNumber"
              render={state => <Videos videos={videosData} currentPageNumber={state.match.params.currentPageNumber}/>}
            />
            <Route
              path="/movies/:movieId"
              render={ state => <Video {...state.match} />}
            /> */}
                </Switch>
              </div>
            </div>
          </div>
        )}
      </BrowserRouter>
    );
  }
}
export default graphql(Queries)(RouterMap);
