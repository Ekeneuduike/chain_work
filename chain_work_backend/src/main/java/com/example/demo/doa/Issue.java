package com.example.demo.doa;

import com.example.demo.dto.enums.IssueStatus;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class Issue {
    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    private String id;
    private String subject;
    private String body;
    @OneToOne
    @JoinColumn(name = "initiator_user_id")
    private AppUser initiator;
    @OneToOne
    @JoinColumn(name = "defendant_user_id")
    private AppUser defendant;
    @OneToOne
    private Contract contract;
    private IssueStatus status;
}
