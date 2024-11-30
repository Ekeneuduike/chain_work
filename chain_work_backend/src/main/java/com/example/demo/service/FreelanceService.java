package com.example.demo.service;

import com.example.demo.doa.Job;
import com.example.demo.doa.Portfolio;
import com.example.demo.doa.Talent;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface FreelanceService {
    Job getJob(String jobId);

    List<Job> getJobs();

    String sendProposal(String jobId, String userId);

    String acceptContract(String contractId, String userId);

    String declineContract(String contractId, String userId, String reason);

    String submitMileStone(String milestoneId, String userId, String contractId);

    String createTalentProfile(Talent talent, String userId);

    String editTalentProfile(Talent talent, String userId);

    Talent getTalent(String userAddr);

    String changeName(String userAddr, String newName);

    String changeDescription(String userAddr, String newDescription);

    String changeJobTitle(String userAddr, String newTitle);

    String changeJobSkill(String userAddr, List<String> skills);

    String addPortfolio(String userAddr, Portfolio portfolio);

    String deletePortfolio(String portfolioId);
}
