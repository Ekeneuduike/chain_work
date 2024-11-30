package com.example.demo.controller;

import com.example.demo.service.LendService;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("api/v1/lend/")
@AllArgsConstructor
public class LenderController {
    private final LendService lendService;


}
