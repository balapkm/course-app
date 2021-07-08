/* eslint-disable jsx-a11y/anchor-is-valid */
import './App.css';

function Details() {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-lg-8">
            <div class="jumbotron">
              <h1>Java</h1>
              <p>Learn Python like a Professional Start from the basics and go all the way to creating your own applications and games</p>
              <p className="mb-0">
                Created by <b>Balakumaran</b>
              </p>
              <span style={{fontSize: '12px'}}>Last updated on <b>12 June 21</b></span>
              
            </div>
            <h5 className="mb-3">Course content</h5>
            <div id="accordion">
              <div class="card">
                <div class="card-header">
                  <a class="card-link" data-toggle="collapse" href="#collapseOne">
                    Course Overview
                    <span className="duration">1hr 22min</span>
                  </a>
                </div>
                <div id="collapseOne" class="collapse show" data-parent="#accordion">
                  <div class="card-body">
                    <ul className="list-unstyled">
                      <li>
                        1. Auto-Welcome Message
                        <span className="duration">22min</span>
                      </li>
                      <li>
                        2. Auto-Welcome Message
                        <span className="duration">22min</span>
                      </li>
                      <li>
                        3. Auto-Welcome Message
                        <span className="duration">22min</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div class="card">
                <div class="card-header">
                  <a class="collapsed card-link" data-toggle="collapse" href="#collapseTwo">
                    Collapsible Group Item #2
                  </a>
                </div>
                <div id="collapseTwo" class="collapse" data-parent="#accordion">
                  <div class="card-body">
                    Lorem ipsum..
                  </div>
                </div>
              </div>

              <div class="card">
                <div class="card-header">
                  <a class="collapsed card-link" data-toggle="collapse" href="#collapseThree">
                    Collapsible Group Item #3
                  </a>
                </div>
                <div id="collapseThree" class="collapse" data-parent="#accordion">
                  <div class="card-body">
                    Lorem ipsum..
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="card mb-3 box-shadow">
              <div className="card-header">
                <h4 className="my-0 font-weight-normal">Details</h4>
              </div>
              <div className="card-body">
                <h1 className="card-title pricing-card-title">$0 <small className="text-muted">/ mon</small></h1>
                <ul className="list-unstyled mt-3 mb-4">
                  <li>23 sections</li>
                  <li>155 lectures</li>
                  <li>22h 13m total length</li>
                  <li>
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star"></span>
                    <span class="fa fa-star"></span>
                    <span class="ml-2">(1,200 ratings)</span>
                  </li>
                </ul>
                <button type="button" className="btn btn-lg btn-block btn-outline-danger">Add Cart</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Details;
