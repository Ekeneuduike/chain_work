package com.example.demo.repo;

import com.example.demo.doa.Notification;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface NotificationRepo extends JpaRepository<Notification, String> {
    @Query("""
            SELECT n from Notification n where n.owner = ?1
            """)
    List<Notification> getUserNotification(String userAddr);
}
