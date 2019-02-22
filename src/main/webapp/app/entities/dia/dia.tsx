import React from 'react';
import { connect } from 'react-redux';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Col, Row, Table } from 'reactstrap';
// tslint:disable-next-line:no-unused-variable
import { Translate, ICrudGetAllAction } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { IRootState } from 'app/shared/reducers';
import { getEntities } from './dia.reducer';
import { IDia } from 'app/shared/model/dia.model';
// tslint:disable-next-line:no-unused-variable
import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';

export interface IDiaProps extends StateProps, DispatchProps, RouteComponentProps<{ url: string }> {}

export class Dia extends React.Component<IDiaProps> {
  componentDidMount() {
    this.props.getEntities();
  }

  render() {
    const { diaList, match } = this.props;
    return (
      <div>
        <h2 id="dia-heading">
          <Translate contentKey="ghostceetApp.dia.home.title">Dias</Translate>
          <Link to={`${match.url}/new`} className="btn btn-primary float-right jh-create-entity" id="jh-create-entity">
            <FontAwesomeIcon icon="plus" />
            &nbsp;
            <Translate contentKey="ghostceetApp.dia.home.createLabel">Create new Dia</Translate>
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
                  <Translate contentKey="ghostceetApp.dia.nombreDia">Nombre Dia</Translate>
                </th>
                <th>
                  <Translate contentKey="ghostceetApp.dia.estado">Estado</Translate>
                </th>
                <th>
                  <Translate contentKey="ghostceetApp.dia.color">Color</Translate>
                </th>
                <th />
              </tr>
            </thead>
            <tbody>
              {diaList.map((dia, i) => (
                <tr key={`entity-${i}`}>
                  <td>
                    <Button tag={Link} to={`${match.url}/${dia.id}`} color="link" size="sm">
                      {dia.id}
                    </Button>
                  </td>
                  <td>{dia.nombreDia}</td>
                  <td>
                    <Translate contentKey={`ghostceetApp.Estado.${dia.estado}`} />
                  </td>
                  <td>{dia.color}</td>
                  <td className="text-right">
                    <div className="btn-group flex-btn-group-container">
                      <Button tag={Link} to={`${match.url}/${dia.id}`} color="info" size="sm">
                        <FontAwesomeIcon icon="eye" />{' '}
                        <span className="d-none d-md-inline">
                          <Translate contentKey="entity.action.view">View</Translate>
                        </span>
                      </Button>
                      <Button tag={Link} to={`${match.url}/${dia.id}/edit`} color="primary" size="sm">
                        <FontAwesomeIcon icon="pencil-alt" />{' '}
                        <span className="d-none d-md-inline">
                          <Translate contentKey="entity.action.edit">Edit</Translate>
                        </span>
                      </Button>
                      <Button tag={Link} to={`${match.url}/${dia.id}/delete`} color="danger" size="sm">
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

const mapStateToProps = ({ dia }: IRootState) => ({
  diaList: dia.entities
});

const mapDispatchToProps = {
  getEntities
};

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Dia);