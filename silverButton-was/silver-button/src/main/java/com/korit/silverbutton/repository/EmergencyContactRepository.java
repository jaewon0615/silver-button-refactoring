package com.korit.silverbutton.repository;

import com.korit.silverbutton.entity.EmergencyContact;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface EmergencyContactRepository extends JpaRepository<EmergencyContact, Long> {

    void deleteEmergencyContactById(Long id);

    List<EmergencyContact> getEmergencyContactByUserId(Long userId);
}
