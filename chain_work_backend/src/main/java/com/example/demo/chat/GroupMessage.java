package com.example.demo.chat;

import jakarta.persistence.Table;
import lombok.Data;
import org.springframework.data.cassandra.core.mapping.PrimaryKey;

import java.time.LocalDateTime;
import java.util.List;
import java.util.UUID;

@Table
@Data
public class GroupMessage {
    @PrimaryKey
    private UUID chatId;
    private String chatName;
    private String sender;
    private List<Message> messages;
}
