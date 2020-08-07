package com.vyntramart.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import com.vyntramart.model.User;

@Repository
public interface UserRepository extends JpaRepository<User,Long>{
//	@Query("select password from Users u where u.username = :username")
	User findByUsername(String username);
//	@Query("select count(u.username) from user u where u.username = ?1")
	int countByUsername(String username);
}