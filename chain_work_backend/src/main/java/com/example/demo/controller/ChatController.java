package com.example.demo.controller;

import com.example.demo.chat.Chat;
import com.example.demo.service.ChatService;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@AllArgsConstructor
@RequestMapping("api/v1/chat")
public class ChatController {

    private final ChatService chatService;

    @GetMapping("/history")
    public List<Chat> history(@RequestParam String chat_id) {
        return chatService.getChatHistory(chat_id);
    }
}
