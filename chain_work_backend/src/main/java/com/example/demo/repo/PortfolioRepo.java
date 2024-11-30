package com.example.demo.repo;

import com.example.demo.doa.Portfolio;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PortfolioRepo extends JpaRepository<Portfolio,String> {
}
