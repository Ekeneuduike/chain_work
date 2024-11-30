package com.example.demo.chat;

import jakarta.persistence.Table;
import lombok.Getter;
import lombok.Setter;
import org.springframework.data.cassandra.core.mapping.PrimaryKey;

import java.time.LocalDateTime;
import java.util.UUID;

@Table
@Getter
@Setter
public class Message {
    @PrimaryKey
    private UUID id;
    private String text;
    private LocalDateTime time;
    private String file_type;
    private byte[] file;
    private MessageType type;

}
