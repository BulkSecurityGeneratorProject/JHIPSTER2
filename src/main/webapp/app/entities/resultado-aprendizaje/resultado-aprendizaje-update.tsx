import React from 'react';
import { connect } from 'react-redux';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Row, Col, Label } from 'reactstrap';
import { AvForm, AvGroup, AvInput, AvField } from 'availity-reactstrap-validation';
// tslint:disable-next-line:no-unused-variable
import { Translate, translate, ICrudGetAction, ICrudGetAllAction, ICrudPutAction } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IRootState } from 'app/shared/reducers';

import { getEntity, updateEntity, createEntity, reset } from './resultado-aprendizaje.reducer';
import { IResultadoAprendizaje } from 'app/shared/model/resultado-aprendizaje.model';
// tslint:disable-next-line:no-unused-variable
import { convertDateTimeFromServer, convertDateTimeToServer } from 'app/shared/util/date-utils';
import { mapIdList } from 'app/shared/util/entity-utils';

export interface IResultadoAprendizajeUpdateProps extends StateProps, DispatchProps, RouteComponentProps<{ id: string }> {}

export interface IResultadoAprendizajeUpdateState {
  isNew: boolean;
}

export class ResultadoAprendizajeUpdate extends React.Component<IResultadoAprendizajeUpdateProps, IResultadoAprendizajeUpdateState> {
  constructor(props) {
    super(props);
    this.state = {
      isNew: !this.props.match.params || !this.props.match.params.id
    };
  }

  componentWillUpdate(nextProps, nextState) {
    if (nextProps.updateSuccess !== this.props.updateSuccess && nextProps.updateSuccess) {
      this.handleClose();
    }
  }

  componentDidMount() {
    if (this.state.isNew) {
      this.props.reset();
    } else {
      this.props.getEntity(this.props.match.params.id);
    }
  }

  saveEntity = (event, errors, values) => {
    if (errors.length === 0) {
      const { resultadoAprendizajeEntity } = this.props;
      const entity = {
        ...resultadoAprendizajeEntity,
        ...values
      };

      if (this.state.isNew) {
        this.props.createEntity(entity);
      } else {
        this.props.updateEntity(entity);
      }
    }
  };

  handleClose = () => {
    this.props.history.push('/entity/resultado-aprendizaje');
  };

  render() {
    const { resultadoAprendizajeEntity, loading, updating } = this.props;
    const { isNew } = this.state;

    return (
      <div>
        <Row className="justify-content-center">
          <Col md="8">
            <h2 id="ghostceetApp.resultadoAprendizaje.home.createOrEditLabel">
              <Translate contentKey="ghostceetApp.resultadoAprendizaje.home.createOrEditLabel">
                Create or edit a ResultadoAprendizaje
              </Translate>
            </h2>
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col md="8">
            {loading ? (
              <p>Loading...</p>
            ) : (
              <AvForm model={isNew ? {} : resultadoAprendizajeEntity} onSubmit={this.saveEntity}>
                {!isNew ? (
                  <AvGroup>
                    <Label for="id">
                      <Translate contentKey="global.field.id">ID</Translate>
                    </Label>
                    <AvInput id="resultado-aprendizaje-id" type="text" className="form-control" name="id" required readOnly />
                  </AvGroup>
                ) : null}
                <AvGroup>
                  <Label id="codigoLabel" for="codigo">
                    <Translate contentKey="ghostceetApp.resultadoAprendizaje.codigo">Codigo</Translate>
                  </Label>
                  <AvField
                    id="resultado-aprendizaje-codigo"
                    type="text"
                    name="codigo"
                    validate={{
                      required: { value: true, errorMessage: translate('entity.validation.required') },
                      maxLength: { value: 100, errorMessage: translate('entity.validation.maxlength', { max: 100 }) }
                    }}
                  />
                </AvGroup>
                <AvGroup>
                  <Label id="descripcionLabel" for="descripcion">
                    <Translate contentKey="ghostceetApp.resultadoAprendizaje.descripcion">Descripcion</Translate>
                  </Label>
                  <AvField
                    id="resultado-aprendizaje-descripcion"
                    type="text"
                    name="descripcion"
                    validate={{
                      required: { value: true, errorMessage: translate('entity.validation.required') },
                      maxLength: { value: 400, errorMessage: translate('entity.validation.maxlength', { max: 400 }) }
                    }}
                  />
                </AvGroup>
                <Button tag={Link} id="cancel-save" to="/entity/resultado-aprendizaje" replace color="info">
                  <FontAwesomeIcon icon="arrow-left" />
                  &nbsp;
                  <span className="d-none d-md-inline">
                    <Translate contentKey="entity.action.back">Back</Translate>
                  </span>
                </Button>
                &nbsp;
                <Button color="primary" id="save-entity" type="submit" disabled={updating}>
                  <FontAwesomeIcon icon="save" />
                  &nbsp;
                  <Translate contentKey="entity.action.save">Save</Translate>
                </Button>
              </AvForm>
            )}
          </Col>
        </Row>
      </div>
    );
  }
}

const mapStateToProps = (storeState: IRootState) => ({
  resultadoAprendizajeEntity: storeState.resultadoAprendizaje.entity,
  loading: storeState.resultadoAprendizaje.loading,
  updating: storeState.resultadoAprendizaje.updating,
  updateSuccess: storeState.resultadoAprendizaje.updateSuccess
});

const mapDispatchToProps = {
  getEntity,
  updateEntity,
  createEntity,
  reset
};

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ResultadoAprendizajeUpdate);
