package com.saad.imedia24test;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.jpa.repository.config.EnableJpaAuditing;

@SpringBootApplication
@EnableJpaAuditing
public class Imedia24TestApplication {

	public static void main(String[] args) {
		SpringApplication.run(Imedia24TestApplication.class, args);
	}

}
