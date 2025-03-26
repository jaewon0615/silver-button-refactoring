package com.korit.silverbutton.repository;

import com.korit.silverbutton.entity.UserSavedDestination;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface UserSavedDestinationRepository extends JpaRepository<UserSavedDestination, Long> {
    @Query(value = "SELECT * FROM user_saved_destinations WHERE user_id = :userId", nativeQuery = true)
    List<UserSavedDestination> getUserSavedDestinationByUserId(@Param("userId") Long userId);
    void deleteUserSavedDestinationById(Long id);

}
