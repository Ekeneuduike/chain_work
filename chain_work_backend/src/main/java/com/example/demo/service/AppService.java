package com.example.demo.service;

import com.example.demo.doa.Issue;
import com.example.demo.doa.Notification;
import com.example.demo.dto.AppDto;
import com.example.demo.dto.AppInfo;
import com.example.demo.dto.IssueInfo;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;

@Service
public interface AppService {
    String signUp(AppDto appDto, MultipartFile profile_image) throws IOException;

    AppInfo login(String userAddr) throws IOException;

    List<Notification> getNotifications(String userAddr);

    String raiseIssue(String contractId, String userId, IssueInfo issueInfo);

    String cancelIssue(String userId, String issueId);

    List<Issue> getIssues(String clientId);


}
