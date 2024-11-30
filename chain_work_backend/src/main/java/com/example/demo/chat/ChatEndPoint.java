package com.example.demo.chat;

import lombok.AllArgsConstructor;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.messaging.simp.SimpMessagingTemplate;
import org.springframework.stereotype.Controller;

@AllArgsConstructor
@Controller
public class ChatEndPoint {

    private SimpMessagingTemplate messagingTemplate;

    @MessageMapping("/group")
    @SendTo("/topic/group")
    public GroupMessage sendToGroup(GroupMessage message) {
        return message;
    }

    @MessageMapping("/direct")
    public void sendDirectMessage(Chat message) {
        messagingTemplate.convertAndSendToUser(message.getReceiver(), "/queue/messages", message);
    }

//    todo: create methods to chat user ,customer_care, and arbitration_chat

}
