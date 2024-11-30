package com.example.demo.controller;

import com.example.demo.doa.Job;
import com.example.demo.doa.Portfolio;
import com.example.demo.doa.Talent;
import com.example.demo.service.FreelanceService;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("api/v1/freelance/")
@AllArgsConstructor
@CrossOrigin("*")
public class FreelancerController {
    private final FreelanceService freelanceService;

    //    Nb: here for jobs
    @GetMapping("job")
    public Job Job(@RequestParam String jobId) {
        return freelanceService.getJob(jobId);
    }

    @GetMapping("jobs")
    public List<Job> jobs() {
        return freelanceService.getJobs();
    }

    @GetMapping("talent")
    public Talent talents(@RequestParam String userAddr) {
        return freelanceService.getTalent(userAddr);
    }



    @PatchMapping("change_name")
    public String changeName(@RequestParam String userAddr, @RequestBody String newName) {
        return freelanceService.changeName(userAddr,newName);
    }

    @PatchMapping("change_bio")
    public String changeTalentDescription(@RequestParam String userAddr, @RequestBody String newDescription) {
    return freelanceService.changeDescription(userAddr,newDescription);
    }
    @PatchMapping("change_title")
    public String changeJobTitle(@RequestParam String userAddr, @RequestBody String newTitle) {
    return freelanceService.changeJobTitle(userAddr,newTitle);
    }
    @PatchMapping("edit_skills")
    public String changeJobSkill(@RequestParam String userAddr, @RequestBody List<String> skills) {
    return freelanceService.changeJobSkill(userAddr,skills);
    }
    @PatchMapping("add_portfolio")
    public String addPortfolio(@RequestParam String userAddr, @RequestBody Portfolio portfolio) {
    return freelanceService.addPortfolio(userAddr,portfolio);
    }
    @DeleteMapping("delete_portfolio")
    public String deletePortfolio(@RequestParam String portfolio_id) {
        return freelanceService.deletePortfolio(portfolio_id);
    }

//    @PostMapping
//    public String addTalent(@RequestParam String userAddr, @RequestParam Talent talent) {
//
//    }


    @PostMapping("send_proposal")
    public String sendProposal(@RequestParam String jobId, @RequestParam String userId) {
        return freelanceService.sendProposal(jobId, userId);
    }

    @PatchMapping("accept_contract")
    public String acceptContract(@RequestParam String contractId, @RequestParam String userId) {
        return freelanceService.acceptContract(contractId, userId);
    }

    @PatchMapping("decline_contract")
    public String declineContract(@RequestParam String contractId, @RequestParam String userId, @RequestParam String reason) {
        return freelanceService.declineContract(contractId, userId, reason);
    }

    @PostMapping("submit_milestone")
    public String submitMilestone(@RequestParam String milestoneId, @RequestParam String userId, @RequestParam String contractId) {
        return freelanceService.submitMileStone(milestoneId, userId, contractId);

    }


//    highlight: // here for profile

    @PostMapping("create_profile")
    public String createTalentProfile(@RequestParam Talent talent, @RequestParam String userId) {
        return freelanceService.createTalentProfile(talent, userId);
    }

    @PatchMapping("edit_profile")
    public String editTalentProfile(@RequestParam Talent talent, @RequestParam String userId) {
        return freelanceService.editTalentProfile(talent, userId);
    }

    //    here for loan
    @GetMapping("access_loan")
    public String accessLoan(@RequestParam String userId) {
        return null;
    }


    //    here for review
    @PostMapping("review")
    public String review(@RequestParam String userId) {
        return null;
    }


}
