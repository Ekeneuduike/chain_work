package com.example.demo.service.serviceImpl;

import com.example.demo.customerror.AppError;
import com.example.demo.customerror.AuthError;
import com.example.demo.doa.*;
import com.example.demo.dto.enums.ContractStatus;
import com.example.demo.dto.enums.MileStoneStatus;
import com.example.demo.dto.enums.ProposalStatus;
import com.example.demo.dto.enums.UserRole;
import com.example.demo.repo.*;
import com.example.demo.service.FreelanceService;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
@AllArgsConstructor
public class FreelanceServiceImpl implements FreelanceService {
    private final JobRepo jobRepo;
    private final ProposalRepo proposalRepo;
    private AppRepo appRepo;
    private final ContractRepo contractRepo;
    private final TalentRepo talentRepo;
    private  final PortfolioRepo portfolioRepo;

    @Override
    public Job getJob(String jobId) {
        return jobRepo.findById(jobId).orElseThrow(() -> new RuntimeException("job not found"));
    }

    @Override
    public List<Job> getJobs() {
        return jobRepo.findAll();
    }

    @Override
    public String sendProposal(String jobId, String userId) {
        Job job = jobRepo.findById(jobId).orElseThrow(() -> new RuntimeException("job not found"));
        AppUser appUser = appRepo.findById(userId).orElseThrow(() -> new RuntimeException("user not found"));
        Proposal proposal = new Proposal();
        proposal.setJob(job);
        proposal.setSender(appUser);
        proposal.setStatus(ProposalStatus.Pending);
        proposalRepo.save(proposal);
        return "operation successful";
    }

    @Override
    public String acceptContract(String contractId, String userId) {

        //todo: update notification send out email and change all proposal to rejected and the user proposal to APProved
        Contract contract = contractRepo.findById(contractId).orElseThrow(() -> new RuntimeException("contract not found"));
        if (contract.getFreelancer().getUser_id().equals(userId)) {
            contract.setStatus(ContractStatus.ACCEPTED);
            contractRepo.save(contract);
            return "operation successful";
        } else return "unauthorized";
    }

    @Override
    public String declineContract(String contractId, String userId, String reason) {
//        todo: send email so that the client knows their contract was rejected and update notification
        Contract contract = contractRepo.findById(contractId).orElseThrow(() -> new RuntimeException("contract not found"));
        if (contract.getFreelancer().getUser_id().equals(userId)) {
            contract.setStatus(ContractStatus.REJECTED);
            contractRepo.save(contract);
            return "operation successful";
        } else return "unauthorized";

    }

    @Override
    public String submitMileStone(String milestoneId, String userId, String contractId) {
        Contract contract = contractRepo.findById(contractId).orElseThrow(() -> new RuntimeException("contract not found"));
        if (contract.getFreelancer().getUser_id().equals(userId)) {
            contract.getMileStones().stream().filter((mileStone -> mileStone.getId()
                    .equals(milestoneId))).forEach(mileStone -> mileStone.setStatus(MileStoneStatus.SUBMITTED));
            contractRepo.save(contract);
        }
        return "";
    }

    @Override
    public String createTalentProfile(Talent talent, String userId) {

        return "";
    }

    @Override
    public String editTalentProfile(Talent talent, String userId) {
        return "";
    }

    @Override
    public Talent getTalent(String userAddr) {
        System.out.println(userAddr);
        System.out.println( talentRepo.findTalentByUserAddr(userAddr));
        return talentRepo.findTalentByUserAddr(userAddr).orElseThrow(() -> new AppError("Talent not found"));
    }

    @Override
    public String changeName(String userAddr, String newName) {
        AppUser appUser = appRepo.findById(userAddr).orElseThrow(() -> new AppError("user not found"));
        appUser.setFull_name(newName);
        appRepo.save(appUser);
        return "successful";
    }

    @Override
    public String changeDescription(String userAddr, String summary) {
        AppUser appUser = appRepo.findById(userAddr).orElseThrow(() -> new AppError("user not found"));

        if(appUser.getRole() == UserRole.Freelancer){
            Optional<Talent> talent = talentRepo.findTalentByUserAddr(userAddr);
            if(talent.isPresent()){
                talent.get().setSummary(summary);
                talentRepo.save(talent.get());
            }
           else{
               Talent newTalent = new Talent();
               newTalent.setSummary(summary);
               talentRepo.save(newTalent);
            }
            return "successful";
        }
        else {
            throw new AuthError("only freelancer can perform this operation");
        }
    }

    @Override
    public String changeJobTitle(String userAddr, String title) {
        AppUser appUser = appRepo.findById(userAddr).orElseThrow(() -> new AppError("user not found"));
        if(appUser.getRole() == UserRole.Freelancer){
            Optional<Talent> talent = talentRepo.findTalentByUserAddr(userAddr);
            if(talent.isPresent()){
                talent.get().setTitle(title);
                talentRepo.save(talent.get());
            }
            else{
                Talent newTalent = new Talent();
                newTalent.setTitle(title);
                talentRepo.save(newTalent);
            }
            return "successful";
        }
        else {
            throw new AuthError("only freelancer can perform this operation");
        }
    }

    @Override
    public String changeJobSkill(String userAddr, List<String> skills) {
        AppUser appUser = appRepo.findById(userAddr).orElseThrow(() -> new AppError("user not found"));
        if(appUser.getRole() == UserRole.Freelancer){
            Optional<Talent> talent = talentRepo.findTalentByUserAddr(userAddr);
            List<Skill> skillList = new ArrayList<>();
            if(talent.isPresent()){
                for(String skill : skills){
                    skillList.add(new Skill("",skill));
                }
                talent.get().setSkills(skillList);
                talentRepo.save(talent.get());
            }
            else{
                Talent newTalent = new Talent();
                for(String skill : skills){
                    skillList.add(new Skill("",skill));
                }
                newTalent.setSkills(skillList);
                talentRepo.save(newTalent);
            }
            return "successful";
        }
        else {
            throw new AuthError("only freelancer can perform this operation");
        }
    }

    @Override
    public String addPortfolio(String userAddr, Portfolio portfolio) {
        AppUser appUser = appRepo.findById(userAddr).orElseThrow(() -> new AppError("user not found"));
        if(appUser.getRole() == UserRole.Freelancer){
            Optional<Talent> talent = talentRepo.findTalentByUserAddr(userAddr);
            if(talent.isPresent()){
                talent.get().getPortfolios().add(portfolio);
                talentRepo.save(talent.get());
            }
            else{
                Talent newTalent = new Talent();
                newTalent.getPortfolios().add(portfolio);
                talentRepo.save(newTalent);
            }
            return "successful";
        }
        else {
            throw new AuthError("only freelancer can perform this operation");
        }
    }

    @Override
    public String deletePortfolio(String portfolioId) {
        portfolioRepo.deleteById(portfolioId);
        return "successful";
    }
}
