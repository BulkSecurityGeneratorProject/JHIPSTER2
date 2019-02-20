package co.edu.sena.ghostceet.repository;

import co.edu.sena.ghostceet.domain.EstadoFicha;
import org.springframework.data.jpa.repository.*;
import org.springframework.stereotype.Repository;


/**
 * Spring Data  repository for the EstadoFicha entity.
 */
@SuppressWarnings("unused")
@Repository
public interface EstadoFichaRepository extends JpaRepository<EstadoFicha, Long> {

}
