import { useLocation, Link } from 'react-router-dom';

const Nav = () => {
  // TODO: Add necessary code to display the navigation bar and link between the pages
  const currentPath = useLocation().pathname;

  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/" className={currentPath === '/' ? 'active' : ''}>
              Candidate Search
            </Link>
          </li>
          <li>
            <Link to="/SavedCandidates" className={currentPath === '/SavedCandidates' ? 'active' : ''}>
              Saved Candidates
            </Link>
          </li>
        </ul>
      </nav>




    </div>
  )
};

export default Nav;
