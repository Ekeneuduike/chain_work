package com.example.demo.controller;

import com.example.demo.doa.Issue;
import com.example.demo.doa.Job;
import com.example.demo.doa.Talent;
import com.example.demo.dto.ContractInfo;
import com.example.demo.dto.IssueInfo;
import com.example.demo.service.ClientService;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.io.IOException;
import java.util.List;

@RestController
@RequestMapping("api/v1/client/")
@AllArgsConstructor
public class ClientController {
    private final ClientService clientService;

    // for jobs
    @PostMapping("/listJob")
    public String listJobs(@RequestBody Job job) throws IOException {
        return clientService.listJobs(job);
    }

    @GetMapping("/talents")
    public List<Talent> talents() {
        return clientService.getTalents();
    }

    @PatchMapping("view_proposal")
    public String acceptProposal(@RequestParam String proposalId, @RequestParam String client_id) throws IOException {
        return clientService.view_proposal(proposalId, client_id);
    }

//    @PatchMapping("decline_proposal")
//    public String declineProposal(@RequestBody String proposalId) throws IOException {
//
//    }

    @PostMapping("create_contract")
    public String createContract(@RequestBody ContractInfo contract) throws IOException {
        return clientService.createContract(contract);
    }
//  todo
//    @PatchMapping("modify_contract")
//    public String modifyContract(@RequestBody ContractInfo contract) throws IOException {
//        return clientService.modifyContract(contract);
//    }


    @PatchMapping
    public String extendContract(@RequestParam String contractId) {
        return null;
    }

    @PatchMapping("accept_milestone")
    public String acceptMilestone(@RequestParam String contractId) {
        return null;
    }


}
