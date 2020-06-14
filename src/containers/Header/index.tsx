import * as React from 'react';
import LinkButton from "../../components/LinkButton";
import './Header.scss';

const Header = () => {
  return (
      <div className="header">
          <div className="row">
              <div className="col-sm-10">
                  <p>Header</p>
              </div>
              <div className="col-sm-1">
                  <LinkButton url="https://github.com/martin-bucinskas" />
              </div>
              <div className="col-sm-1">
                  <LinkButton url="https://www.linkedin.com/in/martynasbucinskas/" />
              </div>
          </div>
      </div>
  );
};

export default Header;
