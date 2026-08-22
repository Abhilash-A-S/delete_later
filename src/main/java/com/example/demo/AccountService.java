package com.example.demo;

import org.springframework.stereotype.Service;

@Service
public class AccountService {

    private final AccountRepository repository;

    public AccountService(
        AccountRepository repository
    ) {
        this.repository = repository;
    }

    public void transfer(
        Long fromId,
        Long toId,
        double amount
    ) {
        Account from = repository
            .findById(fromId)
            .orElseThrow();

        Account to = repository
            .findById(toId)
            .orElseThrow();

        from.setBalance(
            from.getBalance() - amount
        );

        repository.save(from);

        to.setBalance(
            to.getBalance() + amount
        );

        repository.save(to);
    }
}