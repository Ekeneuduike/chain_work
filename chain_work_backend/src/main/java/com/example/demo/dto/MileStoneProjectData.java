package com.example.demo.dto;

import lombok.Data;

@Data
public class MileStoneProjectData {
    private String id;
    private String name;
    private String description;
    private String milestone_url;
    private byte[] milestone_file;
    private String milestone_file_type;
}
