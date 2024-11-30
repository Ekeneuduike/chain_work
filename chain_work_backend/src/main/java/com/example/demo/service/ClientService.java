package com.example.demo.service;

import com.example.demo.doa.Issue;
import com.example.demo.doa.Job;
import com.example.demo.doa.Talent;
import com.example.demo.dto.ContractInfo;
import com.example.demo.dto.IssueInfo;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface ClientService {
    String listJobs(Job job);

    List<Talent> getTalents();

    String view_proposal(String proposalId, String client_id);

    String createContract(ContractInfo contract);


}
