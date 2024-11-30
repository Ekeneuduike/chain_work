package com.example.demo.service.serviceImpl;

import com.example.demo.doa.*;
import com.example.demo.dto.ContractInfo;
import com.example.demo.dto.IssueInfo;
import com.example.demo.dto.enums.ContractStatus;
import com.example.demo.dto.enums.IssueStatus;
import com.example.demo.dto.enums.JobStatus;
import com.example.demo.dto.enums.ProposalStatus;
import com.example.demo.repo.*;
import com.example.demo.service.ClientService;
import jakarta.transaction.Transactional;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;

@Service
@Transactional
@AllArgsConstructor
public class ClientServiceImpl implements ClientService {
    private final JobRepo jobRepo;
    private final TalentRepo talentRepo;
    private final AppRepo appRepo;
    private final ProposalRepo proposalRepo;
    private final ContractRepo contractRepo;
    private final IssueRepo issueRepo;

    @Override
    public String listJobs(Job job) {
        if (!job.getTitle().isEmpty() && !job.getDescription().isEmpty() && job.getBudget() != 0) {
            job.setCreated_at(LocalDateTime.now());
            job.setStatus(JobStatus.ACTIVE);
            jobRepo.save(job);
            return "success";
        } else return "";
    }

    @Override
    public List<Talent> getTalents() {
        return talentRepo.findAll();
    }

    @Override
    public String view_proposal(String proposalId, String client_id) {
        Proposal proposal = proposalRepo.findById(proposalId).orElseThrow(() -> new RuntimeException("proposal not found"));
        if (proposal.getJob().getCreated_by().getUser_id().equals(client_id)) {
            proposal.setStatus(ProposalStatus.Pending);
            proposalRepo.save(proposal);
            return "operation success";
        } else return "not the correct user";

    }

    @Override
    public String createContract(ContractInfo contractInfo) {
        AppUser client = appRepo.findById(contractInfo.getClient_id()).orElseThrow(() -> new RuntimeException("client not found"));
        AppUser freelancer = appRepo.findById(contractInfo.getFreelancer_id()).orElseThrow(() -> new RuntimeException("freelance not found"));
        Contract contract = new Contract();
        contract.setClient(client);
        contract.setFreelancer(freelancer);
        contract.setCreation_date(LocalDateTime.now());
        contract.setStatus(ContractStatus.PENDING);
        contract.setDuration(contractInfo.getDuration());
        contract.setMileStones(contractInfo.getMileStones());
        contractRepo.save(contract);
        return "success";
    }


}
