package com.vyntramart;

import com.vyntramart.model.Product;
import com.vyntramart.service.ProductService;
//import com.vyntramart.service.UserService;
import com.vyntramart.model.User;
import com.vyntramart.repository.UserRepository;

import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class VyntramartApplication {

	public static void main(String[] args) {
		SpringApplication.run(VyntramartApplication.class, args);
	}
	
    @Bean
    CommandLineRunner runner(ProductService productService, UserRepository userRepository) {
//    CommandLineRunner runner(UserService userService) {
        return args -> {
            productService.save(new Product(1L, "TV Set", 300.00, "https://images.pexels.com/photos/236730/pexels-photo-236730.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=200&w=200"));
            productService.save(new Product(2L, "Game Console", 200.00, "https://images.pexels.com/photos/4219883/pexels-photo-4219883.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=200&w=200"));
            productService.save(new Product(3L, "Sofa"	, 100.00, "https://images.pexels.com/photos/1866149/pexels-photo-1866149.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=200&w=200"));
            productService.save(new Product(4L, "Icecream", 5.00, "https://images.pexels.com/photos/1362534/pexels-photo-1362534.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=200&w=200"));
            productService.save(new Product(6L, "Phone", 500.00, "https://images.pexels.com/photos/861126/pexels-photo-861126.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=200&w=200"));
            productService.save(new Product(7L, "Watch", 30.00, "https://images.pexels.com/photos/125779/pexels-photo-125779.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=200&w=200"));
            userRepository.save(new User( 1L,"adminasdf","a","a","asdf","a","a"));
            userRepository.save(new User( 2L,"asdf","a","a","asdf","a","a"));
        };

         
    }
}	
