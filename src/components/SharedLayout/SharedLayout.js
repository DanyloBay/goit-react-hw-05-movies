import { NavLink, Outlet } from 'react-router-dom';
import css from './SharedLayout.module.css';
import { MdOutlineLocalMovies } from 'react-icons/md';
import { Container } from 'utils/Container/Container';

const SharedLayout = () => {
  return (
    <>
      <header className={css.header}>
        <nav className={css.headerNav}>
          <ul className={css.headerList}>
            <li>
              <NavLink className={`${css.headerItems} ${css.active}`} to={'/'}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                className={`${css.headerItems} ${css.active}`}
                to={'/movies'}
              >
                Movies
              </NavLink>
            </li>
          </ul>
          <MdOutlineLocalMovies className={css.headerIcon} />
        </nav>
      </header>
      <main className={css.main}>
        <Container>
          <Outlet />
        </Container>
      </main>
    </>
  );
};

export default SharedLayout;
