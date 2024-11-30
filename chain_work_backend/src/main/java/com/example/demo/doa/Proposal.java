package com.example.demo.doa;

import com.example.demo.dto.enums.ProposalStatus;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class Proposal {
    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    private String proposalId;
    private ProposalStatus status;
    @OneToOne
    private Job job;
    @OneToOne
    private AppUser sender;
}
