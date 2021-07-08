import './App.css';

import React, { useState } from 'react';

const Course = React.lazy(() => import('./Course'));

function Home() {

  const [data, setData] = useState([]);

  React.useEffect(() => {
    console.log('d');
      fetch('db.json')
        .then(response => response.json())
        .then(data => {
          setData(data);
        });
  } ,[]);

  return (
    <>
      <div className="pricing-header px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center">
        <h3 className="display-4">Course Pricing</h3>
        <p className="lead">Quickly build an effective pricing table for your potential customers with this Bootstrap example. It's built with default Bootstrap components and utilities with little customization.</p>
      </div>

      <div className="container course-list">
        <div className="row text-center">
            {data.map((v, k) => 
              <>
                <div className="col-lg-3">
                  <Course key={k} data={v}/> 
                </div>
              </>
            )}
        </div>
      </div>
    </>
  );
}

export default Home;
