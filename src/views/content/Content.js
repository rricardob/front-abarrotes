import React from 'react';

export const Content = () => {
  return (
    <div className="all-content-wrapper">
      <div className="breadcome-area">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
              <div className="breadcome-list">
                <div className="row">
                  <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6">
                    <div className="breadcomb-wp">
                      <div className="breadcomb-icon">
                        <i className="icon nalika-home" />
                      </div>
                      <div className="breadcomb-ctn">
                        <h2>Dashboard One</h2>
                        <p>
                          Welcome to Nalika{' '}
                          <span className="bread-ntd">Admin Template</span>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6">
                    <div className="breadcomb-report">
                      <button
                        data-toggle="tooltip"
                        data-placement="left"
                        title="Download Report"
                        className="btn">
                        <i className="icon nalika-download" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="section-admin container-fluid">
        <div className="row admin text-center">
          <div className="col-md-12">
            <div className="row">
              <div className="col-lg-3 col-md-3 col-sm-3 col-xs-12">
                <div className="admin-content analysis-progrebar-ctn res-mg-t-15">
                  <h4 className="text-left text-uppercase">
                    <b>Orders</b>
                  </h4>
                  <div className="row vertical-center-box vertical-center-box-tablet">
                    <div className="col-xs-3 mar-bot-15 text-left">
                      <label className="label bg-green">
                        30% <i className="fa fa-level-up" aria-hidden="true" />
                      </label>
                    </div>
                    <div className="col-xs-9 cus-gh-hd-pro">
                      <h2 className="text-right no-margin">10,000</h2>
                    </div>
                  </div>
                  <div className="progress progress-mini">
                    <div
                      style={{ width: '78%' }}
                      className="progress-bar bg-green"
                    />
                  </div>
                </div>
              </div>
              <div
                className="col-lg-3 col-md-3 col-sm-3 col-xs-12"
                style={{ marginBottom: 1 }}>
                <div className="admin-content analysis-progrebar-ctn res-mg-t-30">
                  <h4 className="text-left text-uppercase">
                    <b>Tax Deduction</b>
                  </h4>
                  <div className="row vertical-center-box vertical-center-box-tablet">
                    <div className="text-left col-xs-3 mar-bot-15">
                      <label className="label bg-red">
                        15%{' '}
                        <i className="fa fa-level-down" aria-hidden="true" />
                      </label>
                    </div>
                    <div className="col-xs-9 cus-gh-hd-pro">
                      <h2 className="text-right no-margin">5,000</h2>
                    </div>
                  </div>
                  <div className="progress progress-mini">
                    <div
                      style={{ width: '38%' }}
                      className="progress-bar progress-bar-danger bg-red"
                    />
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-3 col-sm-3 col-xs-12">
                <div className="admin-content analysis-progrebar-ctn res-mg-t-30">
                  <h4 className="text-left text-uppercase">
                    <b>Revenue</b>
                  </h4>
                  <div className="row vertical-center-box vertical-center-box-tablet">
                    <div className="text-left col-xs-3 mar-bot-15">
                      <label className="label bg-blue">
                        50% <i className="fa fa-level-up" aria-hidden="true" />
                      </label>
                    </div>
                    <div className="col-xs-9 cus-gh-hd-pro">
                      <h2 className="text-right no-margin">$70,000</h2>
                    </div>
                  </div>
                  <div className="progress progress-mini">
                    <div
                      style={{ width: '60%' }}
                      className="progress-bar bg-blue"
                    />
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-3 col-sm-3 col-xs-12">
                <div className="admin-content analysis-progrebar-ctn res-mg-t-30">
                  <h4 className="text-left text-uppercase">
                    <b>Yearly Sales</b>
                  </h4>
                  <div className="row vertical-center-box vertical-center-box-tablet">
                    <div className="text-left col-xs-3 mar-bot-15">
                      <label className="label bg-purple">
                        80% <i className="fa fa-level-up" aria-hidden="true" />
                      </label>
                    </div>
                    <div className="col-xs-9 cus-gh-hd-pro">
                      <h2 className="text-right no-margin">$100,000</h2>
                    </div>
                  </div>
                  <div className="progress progress-mini">
                    <div
                      style={{ width: '60%' }}
                      className="progress-bar bg-purple"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="product-sales-area mg-tb-30">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-9 col-md-9 col-sm-9 col-xs-12">
              <div className="product-sales-chart">
                <div className="portlet-title">
                  <div className="row">
                    <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                      <div className="caption pro-sl-hd">
                        <span className="caption-subject text-uppercase">
                          <b>Product Sales</b>
                        </span>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                      <div className="actions graph-rp">
                        <div className="btn-group" data-toggle="buttons">
                          <label className="btn btn-grey active">
                            <input
                              type="radio"
                              name="options"
                              className="toggle"
                              id="option1"
                              defaultChecked
                            />
                            Today
                          </label>
                          <label className="btn btn-grey">
                            <input
                              type="radio"
                              name="options"
                              className="toggle"
                              id="option2"
                            />
                            Week
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  id="curved-line-chart"
                  className="flot-chart-sts flot-chart curved-chart-statistic"
                />
              </div>
            </div>
            <div className="col-lg-3 col-md-3 col-sm-3 col-xs-12">
              <div className="white-box analytics-info-cs mg-b-30 res-mg-t-30">
                <h3 className="box-title">Total Visit</h3>
                <ul className="list-inline two-part-sp">
                  <li>
                    <div id="sparklinedash" />
                  </li>
                  <li className="text-right sp-cn-r">
                    <i className="fa fa-level-up" aria-hidden="true" />{' '}
                    <span className="counter sales-sts-ctn">8659</span>
                  </li>
                </ul>
              </div>
              <div className="white-box analytics-info-cs mg-b-30">
                <h3 className="box-title">Total Page Views</h3>
                <ul className="list-inline two-part-sp">
                  <li>
                    <div id="sparklinedash2" />
                  </li>
                  <li className="text-right">
                    <i className="fa fa-level-up" aria-hidden="true" />{' '}
                    <span className="counter sales-sts-ctn">7469</span>
                  </li>
                </ul>
              </div>
              <div className="white-box analytics-info-cs mg-b-30">
                <h3 className="box-title">Unique Visitor</h3>
                <ul className="list-inline two-part-sp">
                  <li>
                    <div id="sparklinedash3" />
                  </li>
                  <li className="text-right">
                    <i className="fa fa-level-up" aria-hidden="true" />{' '}
                    <span className="counter sales-sts-ctn">6011</span>
                  </li>
                </ul>
              </div>
              <div className="white-box analytics-info-cs">
                <h3 className="box-title">Bounce Rate</h3>
                <ul className="list-inline two-part-sp">
                  <li>
                    <div id="sparklinedash4" />
                  </li>
                  <li className="text-right">
                    <i className="fa fa-level-down" aria-hidden="true" />{' '}
                    <span className="sales-sts-ctn">18%</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
