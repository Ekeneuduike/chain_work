package com.example.demo.doa;

import com.example.demo.dto.enums.ContractStatus;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.Duration;
import java.time.LocalDateTime;
import java.util.List;

@Entity
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class Contract {
    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    private String id;
    @OneToOne
    private AppUser client;
    @OneToOne
    private AppUser freelancer;
    private LocalDateTime creation_date;
    private Duration duration;
    @OneToOne
    private Job job;
    @OneToMany
    private List<MileStone> mileStones;
    private ContractStatus status;

}
