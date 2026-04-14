package com.example.demo;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins = "*") 
public class HelloController {

    @GetMapping("/api/hola")
    public String decirHola() {
        return "¡Hello Mundo Fullstack Java y Docker!";
    }
}