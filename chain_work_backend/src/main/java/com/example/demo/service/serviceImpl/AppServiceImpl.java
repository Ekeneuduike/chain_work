package com.example.demo.service.serviceImpl;


import com.example.demo.customerror.AppError;
import com.example.demo.doa.AppUser;
import com.example.demo.doa.Contract;
import com.example.demo.doa.Issue;
import com.example.demo.doa.Notification;
import com.example.demo.dto.AppDto;
import com.example.demo.dto.AppInfo;
import com.example.demo.dto.IssueInfo;
import com.example.demo.dto.enums.ContractStatus;
import com.example.demo.dto.enums.IssueStatus;
import com.example.demo.repo.AppRepo;
import com.example.demo.repo.ContractRepo;
import com.example.demo.repo.IssueRepo;
import com.example.demo.repo.NotificationRepo;
import com.example.demo.service.AppService;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.util.List;

@Service
@AllArgsConstructor
public class AppServiceImpl implements AppService {
    private final Path PROFILE_IMAGE_STORE = Path.of("C:\\Users\\DELL\\Downloads\\chain_work\\chain_work_backend/profileImages");
    private final AppRepo appRepo;
    private final NotificationRepo notificationRepo;
    private final ContractRepo contractRepo;
    private final IssueRepo issueRepo;


    @Override
    public String signUp(AppDto appDto, MultipartFile profile_image) throws IOException {
//        Web3j web3j = Web3j.build(new HttpService("https://sepolia.infura.io/v3/b4ad8df69f664f96af8aa39befb33702"));
//        String greeting;
//        HelloWorld helloWorld = HelloWorld.load("your_contract_address", web3j, Credentials.create("your_private_key"), new DefaultGasProvider());
//        todo: send the request over to the blockchain to register user there too
        AppUser user = new AppUser(appDto.getUser_id(), appDto.getFull_name(), appDto.getEmail(), appDto.getRole(), uploadProfileImage(profile_image), profile_image.getContentType());
        appRepo.save(user);
        return "operation success";
    }

    @Override
    public AppInfo login(String userAddr) throws IOException {
        AppUser appUser = appRepo.findById(userAddr).orElseThrow(() -> new AppError("user not found"));

        return AppInfo.builder()
                .user_id(appUser.getUser_id())
                .full_name(appUser.getFull_name())
                .email(appUser.getEmail())
                .role(appUser.getRole())
                .image(downloadProfileImage(appUser.getProfile_image()))
                .image_type(appUser.getImg_type())
                .build();
    }

    @Override
    public List<Notification> getNotifications(String userAddr) {
        return notificationRepo.getUserNotification(userAddr);
    }

    private byte[] downloadProfileImage(String profileImage) throws IOException {
        return Files.readAllBytes(Path.of(profileImage));
    }

    private String uploadProfileImage(MultipartFile multipartFile) throws IOException {
        if (Files.isDirectory(PROFILE_IMAGE_STORE)) {
            multipartFile.transferTo(new File(PROFILE_IMAGE_STORE + "/" + multipartFile.getOriginalFilename()));

        } else {
            Files.createDirectory(PROFILE_IMAGE_STORE);
            multipartFile.transferTo(new File(PROFILE_IMAGE_STORE + "/" + multipartFile.getOriginalFilename()));

        }
        return PROFILE_IMAGE_STORE + "/" + multipartFile.getOriginalFilename();

    }

    @Override
    public String raiseIssue(String contractId, String userId, IssueInfo issueInfo) {
        Contract contract = contractRepo.findById(contractId).orElseThrow(() -> new AppError("contract not found"));
        if (contract.getStatus().equals(ContractStatus.ACCEPTED) && (contract.getClient().getUser_id().equals(userId) || contract.getFreelancer().getUser_id().equals(userId))) {
            Issue issue = new Issue();
            issue.setBody(issueInfo.getBody());
            issue.setSubject(issueInfo.getSubject());
            issue.setInitiator(contract.getClient().getUser_id().equals(userId) ? contract.getClient() : contract.getFreelancer());
            issue.setInitiator(contract.getFreelancer().getUser_id().equals(userId) ? contract.getFreelancer() : contract.getClient());
            issue.setStatus(IssueStatus.UNRESOLVED);
            issue.setContract(contract);
            issueRepo.save(issue);
            return "success";
        } else return "not the correct user";

    }

    @Override
    public String cancelIssue(String userId, String issueId) {
        AppUser appUser = appRepo.findById(issueId).orElseThrow(() -> new AppError("user not found"));
        Issue issue = issueRepo.findById(issueId).orElseThrow(() -> new AppError("issue not found"));
        if (issue.getInitiator().equals(appUser)) {
            issue.setStatus(IssueStatus.RESOLVED);
            issueRepo.save(issue);
            return "success";
        } else return "not the correct user";

    }

    @Override
    public List<Issue> getIssues(String clientId) {
        return issueRepo.getIssues(clientId);
    }


}
