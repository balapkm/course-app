/* eslint-disable jsx-a11y/anchor-is-valid */
function Navbar() {
  return (
    <div className="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white border-bottom box-shadow">
        <h5 style={{ cursor: 'pointer'}} onClick={() => window.location.href= '/course-app/'} className="my-0 mr-md-auto font-weight-normal">Course App</h5>
        <nav className="my-2 my-md-0 mr-md-3">
        </nav>
        <a className="btn btn-outline-primary">Sign In</a>
    </div>
  );
}

export default Navbar;
