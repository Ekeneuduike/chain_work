package com.example.demo.controller;

import com.example.demo.doa.Issue;
import com.example.demo.doa.Notification;
import com.example.demo.dto.AppDto;
import com.example.demo.dto.AppInfo;
import com.example.demo.dto.IssueInfo;
import com.example.demo.service.AppService;
import com.fasterxml.jackson.databind.ObjectMapper;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;

@RestController
@RequestMapping("api/v1/app/")
@AllArgsConstructor
@CrossOrigin("*")
public class AppController {
    private final AppService appService;

    @PostMapping("signup")
    public String signUp(@RequestParam("appDto") String info, @RequestParam("file") MultipartFile profile_image) throws IOException {
        ObjectMapper objectMapper = new ObjectMapper();
        AppDto appDto = objectMapper.readValue(info, AppDto.class);
        return appService.signUp(appDto, profile_image);
    }

    @GetMapping("login")
    public AppInfo login(@RequestParam String userAddr) throws IOException {
        return appService.login(userAddr);
    }

    @GetMapping("notification")
    public List<Notification> notification(@RequestParam String userAddr) throws IOException {
        return appService.getNotifications(userAddr);
    }

    //    here for issues

    @PostMapping("raise_issue")
    public String raiseIssue(@RequestParam String contractId, @RequestParam String userId, @RequestBody IssueInfo issueInfo) throws IOException {
        return appService.raiseIssue(contractId, userId, issueInfo);
    }

    @PatchMapping("cancel_issue")
    public String cancelIssue(@RequestParam String userId, @RequestParam String issueId) throws IOException {
        return appService.cancelIssue(userId, issueId);

    }

    @GetMapping("issues")
    public List<Issue> getIssues(@RequestParam String client_id) throws IOException {
        return appService.getIssues(client_id);
    }

}
