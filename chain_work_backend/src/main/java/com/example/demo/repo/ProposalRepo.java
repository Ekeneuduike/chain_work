package com.example.demo.repo;


import com.example.demo.doa.Proposal;
import jakarta.transaction.Transactional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;

public interface ProposalRepo extends JpaRepository<Proposal, String> {

}
