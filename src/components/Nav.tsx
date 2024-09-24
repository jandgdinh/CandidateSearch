import { useLocation, Link } from 'react-router-dom';

const Nav = () => {
  // TODO: Add necessary code to display the navigation bar and link between the pages
  const currentPath = useLocation().pathname;

  return (
    <div>
      <nav>
        <ul className='nav nav-tabs'>
          <li className="nav-item">
            <Link to="/" className={currentPath === '/' ? 'active' : ''}>
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/SavedCandidates" className={currentPath === '/SavedCandidates' ? 'active' : ''}>
              Potential Candidates
            </Link>
          </li>
        </ul>
      </nav>




    </div>
  )
};

export default Nav;
