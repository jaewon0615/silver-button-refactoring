package com.korit.silverbutton.repository;

import com.korit.silverbutton.dto.detination.request.DestinationRequestDto;
import com.korit.silverbutton.entity.Destination;
import com.korit.silverbutton.entity.User;
import jakarta.persistence.metamodel.SingularAttribute;
import org.springframework.data.jpa.domain.AbstractPersistable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import javax.xml.stream.Location;
import java.io.Serializable;
import java.math.BigDecimal;
import java.util.List;
import java.util.Optional;

@Repository
public interface DestinationRepository extends JpaRepository<Destination, Long> {
    Optional<Destination> getDestinationById(Long id);

    @Query("SELECT d FROM Destination d WHERE d.location = :location")
    List<Destination> getDestinationsByLocation(@Param("location") String location);

    void deleteDestinationById(Long id);

    @Query(value = "SELECT * FROM destination WHERE rating >= :rating ORDER BY rating DESC", nativeQuery = true)
    List<Destination> getDestinationByRating(@Param("rating") BigDecimal rating);

    @Query("SELECT d FROM Destination d WHERE d.location = :location AND d.city = :city")
    List<Destination> getDestinationByLocationAndCity(@Param("location") String location, @Param("city") String city);

    Optional<Destination> findById(Long destinationId);




}
