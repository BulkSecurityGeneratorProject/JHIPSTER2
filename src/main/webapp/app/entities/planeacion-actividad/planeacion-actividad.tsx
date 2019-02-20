import React from 'react';
import { connect } from 'react-redux';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Col, Row, Table } from 'reactstrap';
// tslint:disable-next-line:no-unused-variable
import { Translate, ICrudGetAllAction } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { IRootState } from 'app/shared/reducers';
import { getEntities } from './planeacion-actividad.reducer';
import { IPlaneacionActividad } from 'app/shared/model/planeacion-actividad.model';
// tslint:disable-next-line:no-unused-variable
import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';

export interface IPlaneacionActividadProps extends StateProps, DispatchProps, RouteComponentProps<{ url: string }> {}

export class PlaneacionActividad extends React.Component<IPlaneacionActividadProps> {
  componentDidMount() {
    this.props.getEntities();
  }

  render() {
    const { planeacionActividadList, match } = this.props;
    return (
      <div>
        <h2 id="planeacion-actividad-heading">
          <Translate contentKey="ghostceetApp.planeacionActividad.home.title">Planeacion Actividads</Translate>
          <Link to={`${match.url}/new`} className="btn btn-primary float-right jh-create-entity" id="jh-create-entity">
            <FontAwesomeIcon icon="plus" />
            &nbsp;
            <Translate contentKey="ghostceetApp.planeacionActividad.home.createLabel">Create new Planeacion Actividad</Translate>
          </Link>
        </h2>
        <div className="table-responsive">
          <Table responsive>
            <thead>
              <tr>
                <th>
                  <Translate contentKey="global.field.id">ID</Translate>
                </th>
                <th>
                  <Translate contentKey="ghostceetApp.planeacionActividad.planeacionTrimestre">Planeacion Trimestre</Translate>
                </th>
                <th>
                  <Translate contentKey="ghostceetApp.planeacionActividad.actividadProyecto">Actividad Proyecto</Translate>
                </th>
                <th />
              </tr>
            </thead>
            <tbody>
              {planeacionActividadList.map((planeacionActividad, i) => (
                <tr key={`entity-${i}`}>
                  <td>
                    <Button tag={Link} to={`${match.url}/${planeacionActividad.id}`} color="link" size="sm">
                      {planeacionActividad.id}
                    </Button>
                  </td>
                  <td>
                    {planeacionActividad.planeacionTrimestre ? (
                      <Link to={`planeacion-trimestre/${planeacionActividad.planeacionTrimestre.id}`}>
                        {planeacionActividad.planeacionTrimestre.id}
                      </Link>
                    ) : (
                      ''
                    )}
                  </td>
                  <td>
                    {planeacionActividad.actividadProyecto ? (
                      <Link to={`actividad-proyecto/${planeacionActividad.actividadProyecto.id}`}>
                        {planeacionActividad.actividadProyecto.id}
                      </Link>
                    ) : (
                      ''
                    )}
                  </td>
                  <td className="text-right">
                    <div className="btn-group flex-btn-group-container">
                      <Button tag={Link} to={`${match.url}/${planeacionActividad.id}`} color="info" size="sm">
                        <FontAwesomeIcon icon="eye" />{' '}
                        <span className="d-none d-md-inline">
                          <Translate contentKey="entity.action.view">View</Translate>
                        </span>
                      </Button>
                      <Button tag={Link} to={`${match.url}/${planeacionActividad.id}/edit`} color="primary" size="sm">
                        <FontAwesomeIcon icon="pencil-alt" />{' '}
                        <span className="d-none d-md-inline">
                          <Translate contentKey="entity.action.edit">Edit</Translate>
                        </span>
                      </Button>
                      <Button tag={Link} to={`${match.url}/${planeacionActividad.id}/delete`} color="danger" size="sm">
                        <FontAwesomeIcon icon="trash" />{' '}
                        <span className="d-none d-md-inline">
                          <Translate contentKey="entity.action.delete">Delete</Translate>
                        </span>
                      </Button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ planeacionActividad }: IRootState) => ({
  planeacionActividadList: planeacionActividad.entities
});

const mapDispatchToProps = {
  getEntities
};

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PlaneacionActividad);
