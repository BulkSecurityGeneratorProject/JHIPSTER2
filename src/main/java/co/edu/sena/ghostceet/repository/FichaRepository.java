package co.edu.sena.ghostceet.repository;

import co.edu.sena.ghostceet.domain.Ficha;
import org.springframework.data.jpa.repository.*;
import org.springframework.stereotype.Repository;


/**
 * Spring Data  repository for the Ficha entity.
 */
@SuppressWarnings("unused")
@Repository
public interface FichaRepository extends JpaRepository<Ficha, Long> {

}
