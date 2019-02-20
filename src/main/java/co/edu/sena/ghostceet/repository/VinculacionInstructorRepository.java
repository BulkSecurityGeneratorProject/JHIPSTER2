package co.edu.sena.ghostceet.repository;

import co.edu.sena.ghostceet.domain.VinculacionInstructor;
import org.springframework.data.jpa.repository.*;
import org.springframework.stereotype.Repository;


/**
 * Spring Data  repository for the VinculacionInstructor entity.
 */
@SuppressWarnings("unused")
@Repository
public interface VinculacionInstructorRepository extends JpaRepository<VinculacionInstructor, Long> {

}
