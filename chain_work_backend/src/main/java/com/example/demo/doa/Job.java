package com.example.demo.doa;

import com.example.demo.dto.enums.JobStatus;
import com.example.demo.dto.enums.JobType;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDateTime;

@Entity
@NoArgsConstructor
@Setter
@Getter
public class Job {
    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    private String id;
    private String title;
    private String description;
    private float budget;
    private JobType jobType;
    private boolean milestone_based;
    private int numberOfMilestones;
    private String milestone_description;
    private LocalDateTime created_at;
    private JobStatus status;
    @ManyToOne
    private AppUser created_by;
}
