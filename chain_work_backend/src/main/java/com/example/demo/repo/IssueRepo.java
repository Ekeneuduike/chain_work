package com.example.demo.repo;

import com.example.demo.doa.Issue;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface IssueRepo extends JpaRepository<Issue, String> {
    @Query("""
            select i from Issue i where i.initiator.user_id = ?1 or i.defendant.user_id = ?1
            """)
    List<Issue> getIssues(String clientId);
}
