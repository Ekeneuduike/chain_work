package com.example.demo.repo;

import com.example.demo.doa.Contract;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ContractRepo extends JpaRepository<Contract, String> {
}
