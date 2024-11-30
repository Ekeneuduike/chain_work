package com.example.demo.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("api/v1/admin")
public class AdminController {

    @PatchMapping("make_arbitrator")
    public void makeArbitrator() {

    }

    @PatchMapping("resolve_issue")
    public void resolveIssue() {

    }
}
