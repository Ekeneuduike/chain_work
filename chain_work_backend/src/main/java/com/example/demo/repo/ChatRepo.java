package com.example.demo.repo;

import com.example.demo.chat.Chat;
import org.springframework.data.repository.CrudRepository;

import java.util.UUID;

public interface ChatRepo extends CrudRepository<Chat, UUID> {
}
