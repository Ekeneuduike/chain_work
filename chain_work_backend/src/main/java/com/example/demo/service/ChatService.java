package com.example.demo.service;

import com.example.demo.chat.Chat;
import com.example.demo.repo.ChatRepo;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@AllArgsConstructor
public class ChatService {
    private final ChatRepo chatRepo;

    public List<Chat> getChatHistory(String chatId) {
//todo: fetch chat history from cassandra and return the
        return List.of();
    }
}
