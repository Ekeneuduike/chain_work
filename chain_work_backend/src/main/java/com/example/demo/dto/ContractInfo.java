package com.example.demo.dto;

import com.example.demo.doa.AppUser;
import com.example.demo.doa.Job;
import com.example.demo.doa.MileStone;
import com.example.demo.dto.enums.ContractStatus;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.OneToMany;
import jakarta.persistence.OneToOne;
import lombok.Builder;
import lombok.Data;

import java.time.Duration;
import java.time.LocalDateTime;
import java.util.List;

@Builder
@Data
public class ContractInfo {
    private String id;
    private String client_id;
    private String freelancer_id;
    private LocalDateTime creation_date;
    private Duration duration;
    private String job_id;
    @OneToMany
    private List<MileStone> mileStones;
    private ContractStatus status;
}
