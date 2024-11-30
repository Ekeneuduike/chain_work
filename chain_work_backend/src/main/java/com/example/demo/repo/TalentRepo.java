package com.example.demo.repo;

import com.example.demo.doa.Talent;
import jakarta.transaction.Transactional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;

import java.util.Optional;

public interface TalentRepo extends JpaRepository<Talent, String> {
    @Query("""
SELECT t FROM Talent t where t.appUser.user_id = ?1
""")
    Optional<Talent> findTalentByUserAddr(String userAddr);

}
