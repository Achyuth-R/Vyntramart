package com.vyntramart.controller;

import com.vyntramart.model.Product;
import com.vyntramart.model.User;
import com.vyntramart.service.ProductService;
import com.vyntramart.repository.ProductRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.validation.constraints.NotNull;

@RestController
@RequestMapping("/api/products")
public class ProductController {

    private ProductService productService;
    @Autowired
    private ProductRepository productRepository;

    public ProductController(ProductService productService) {
        this.productService = productService;
    }

    @GetMapping(value = { "", "/" })
    public @NotNull Iterable<Product> getProducts() {
        return productService.getAllProducts();
    }
    
    @PostMapping
    public @NotNull Product putProduct(@RequestBody Product product) {
		System.out.println(product.toString());
		return this.productRepository.save(product);
    }
    
}
