import React from 'react';
import { connect } from 'react-redux';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Row, Col } from 'reactstrap';
// tslint:disable-next-line:no-unused-variable
import { Translate, ICrudGetAction } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { IRootState } from 'app/shared/reducers';
import { getEntity } from './disponibilidad-competencias.reducer';
import { IDisponibilidadCompetencias } from 'app/shared/model/disponibilidad-competencias.model';
// tslint:disable-next-line:no-unused-variable
import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';

export interface IDisponibilidadCompetenciasDetailProps extends StateProps, DispatchProps, RouteComponentProps<{ id: string }> {}

export class DisponibilidadCompetenciasDetail extends React.Component<IDisponibilidadCompetenciasDetailProps> {
  componentDidMount() {
    this.props.getEntity(this.props.match.params.id);
  }

  render() {
    const { disponibilidadCompetenciasEntity } = this.props;
    return (
      <Row>
        <Col md="8">
          <h2>
            <Translate contentKey="ghostceetApp.disponibilidadCompetencias.detail.title">DisponibilidadCompetencias</Translate> [
            <b>{disponibilidadCompetenciasEntity.id}</b>]
          </h2>
          <dl className="jh-entity-details">
            <dt>
              <Translate contentKey="ghostceetApp.disponibilidadCompetencias.instructor">Instructor</Translate>
            </dt>
            <dd>{disponibilidadCompetenciasEntity.instructor ? disponibilidadCompetenciasEntity.instructor.id : ''}</dd>
            <dt>
              <Translate contentKey="ghostceetApp.disponibilidadCompetencias.vinculacionInstructor">Vinculacion Instructor</Translate>
            </dt>
            <dd>
              {disponibilidadCompetenciasEntity.vinculacionInstructor ? disponibilidadCompetenciasEntity.vinculacionInstructor.id : ''}
            </dd>
          </dl>
          <Button tag={Link} to="/entity/disponibilidad-competencias" replace color="info">
            <FontAwesomeIcon icon="arrow-left" />{' '}
            <span className="d-none d-md-inline">
              <Translate contentKey="entity.action.back">Back</Translate>
            </span>
          </Button>
          &nbsp;
          <Button tag={Link} to={`/entity/disponibilidad-competencias/${disponibilidadCompetenciasEntity.id}/edit`} replace color="primary">
            <FontAwesomeIcon icon="pencil-alt" />{' '}
            <span className="d-none d-md-inline">
              <Translate contentKey="entity.action.edit">Edit</Translate>
            </span>
          </Button>
        </Col>
      </Row>
    );
  }
}

const mapStateToProps = ({ disponibilidadCompetencias }: IRootState) => ({
  disponibilidadCompetenciasEntity: disponibilidadCompetencias.entity
});

const mapDispatchToProps = { getEntity };

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DisponibilidadCompetenciasDetail);
