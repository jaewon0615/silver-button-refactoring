package com.korit.silverbutton.repository;

import com.korit.silverbutton.entity.EmergencyContact;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface EmergencyContactRepository extends JpaRepository<EmergencyContact, Long> {

    void deleteEmergencyContactById(Long id);

    @Query(value = "SELECT * FROM emergency_contacts WHERE user_id = :userId ORDER BY created_at DESC", nativeQuery = true)
    List<EmergencyContact> getEmergencyContactByUserId(Long userId);
}
