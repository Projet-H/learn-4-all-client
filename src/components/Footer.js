import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";

export const Footer = () => {
  return (
    <MDBFooter color="blue" className="font-small pt-4">
      <MDBContainer fluid className="text-center text-md-left">
        <MDBRow>
          <MDBCol md="6">
            <h5 className="title">Learn 4 all</h5>
            <p>Application d'entraide entre élève et intervenant.</p>
          </MDBCol>
          <MDBCol md="6">
            <h5 className="title">Liens</h5>
            <ul style={{ paddingLeft: 0 }}>
              <li className="list-unstyled">
                <a
                  href="https://twitter.com/learn4all4"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Twitter
                </a>
              </li>
              <li className="list-unstyled">
                <a
                  href="https://www.instagram.com/_learn4all/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Instagram
                </a>
              </li>
            </ul>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <div className="footer-copyright text-center py-3">
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} Copyright:{" "}
          <a href="https://learn4all.fr"> Learn4all.fr </a>
        </MDBContainer>
      </div>
    </MDBFooter>
  );
};
