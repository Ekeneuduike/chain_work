package com.example.demo.repo;

import com.example.demo.doa.AppUser;
import org.springframework.data.jpa.repository.JpaRepository;

public interface AppRepo extends JpaRepository<AppUser, String> {
}
