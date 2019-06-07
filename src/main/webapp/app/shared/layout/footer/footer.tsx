import './footer.css';

import React from 'react';
import { Translate } from 'react-jhipster';
import { Col, Row } from 'reactstrap';

const Footer = props => (
  <div className="footer page-content">
    <Row>
      <Col md="3">
        <p>
          <Translate contentKey="footer">Your footer</Translate>
        </p>
      </Col>
    </Row>
  </div>
);

export default Footer;
