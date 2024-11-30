package com.example.demo.doa;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.List;

@Entity
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class Talent {
    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    private String talentId;
    @OneToMany
    private List<Skill> skills;
    private String summary;
    private String title;
    @OneToMany
    private List<Portfolio> portfolios;
    @OneToOne
    private AppUser appUser;


}
