package com.vyntramart.repository;

import com.vyntramart.model.OrderProduct;
import com.vyntramart.model.OrderProductPK;
import org.springframework.data.repository.CrudRepository;

public interface OrderProductRepository extends CrudRepository<OrderProduct, OrderProductPK> {
}
