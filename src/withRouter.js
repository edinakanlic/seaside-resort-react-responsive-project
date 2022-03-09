import React from 'react';
import { useParams, useLocation } from 'react-router-dom';

const withRouter = (WrappedComponent) => (props) => {
  const params = useParams();
  const location = useLocation();
  // const navigate = useNavigate();
  // const match = useMatch();
  // etc... other react-router-dom v6 hooks

  return (
    <WrappedComponent
      {...props}
      params={params}
      location={location}

      // etc...
    />
  );
};

export default withRouter;
