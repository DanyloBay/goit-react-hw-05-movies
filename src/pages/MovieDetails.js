import fetchGetMovie from 'API/get_movie_details';
import { useEffect, useRef, useState } from 'react';
import { Link, Outlet, useLocation, useParams } from 'react-router-dom';
import { FiChevronLeft, FiChevronDown } from 'react-icons/fi';
import css from './MovieDetails.module.css';
import shortid from 'shortid';

const baseImgUrl = 'https://image.tmdb.org/t/p/';
const posterSize = 'w300';

const MovieDetails = () => {
  const [movie, setMovie] = useState([]);
  const { moviedId } = useParams();
  const location = useLocation();
  const backLinkLocationRef = useRef(location.state?.from ?? '/movies');

  useEffect(() => {
    fetchGetMovie(moviedId)
      .then(data => setMovie(data))
      .catch(error => console.log(error));
  }, [moviedId]);

  return (
    <>
      <div className={css.detailsContainer}>
        <Link to={backLinkLocationRef.current} className={css.backButton}>
          <FiChevronLeft className={css.detailsIcon} />
          Go Back
        </Link>
        <div className={css.detailsCard}>
          <img
            src={baseImgUrl + posterSize + movie.poster_path}
            alt={movie.original_title}
            className={css.movieImg}
          />
          <div className={css.detailsCardDescription}>
            <h2 className={css.movieTitle}>{movie.original_title}</h2>
            <div className={css.detailsSubcard}>
              User Score - {movie.vote_average}
            </div>
            <div className={css.detailsSubcard}>
              <span className={css.movieOverviewSubtitles}>Overview</span>
              <p className={css.movieDesc}>{movie.overview}</p>
            </div>
            {movie.genres && (
              <div className={css.detailsSubcard}>
                <span className={css.movieOverviewSubtitles}>Genres</span>
                <ul className={css.movieGenres}>
                  {movie.genres.map(({ name }) => (
                    <li className={css.movieGenresItems}>{name}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
        <ul className={css.detailsList}>
          <li key={shortid.generate()} className={css.detailsItem}>
            <Link to={'cast'} className={css.detailsLink}>
              Cast
              <FiChevronDown className={css.detailsIcon} />
            </Link>
          </li>
          <li key={shortid.generate()} className={css.detailsItem}>
            <Link to={'reviews'} className={css.detailsLink}>
              Reviews
              <FiChevronDown className={css.detailsIcon} />
            </Link>
          </li>
        </ul>
        <Outlet />
      </div>
    </>
  );
};

export default MovieDetails;
