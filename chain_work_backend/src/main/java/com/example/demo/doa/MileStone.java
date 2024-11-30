package com.example.demo.doa;

import com.example.demo.dto.enums.MileStoneStatus;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class MileStone {
    @Id
    private String id;
    private String name;
    private String deadline;
    private float release_percentage;
    private MileStoneStatus status;

}
