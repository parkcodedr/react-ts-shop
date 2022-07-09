import React from 'react'
import { Col, Row } from 'react-bootstrap';
import { StoreItem } from '../components/StoreItem';
import storeItems from '../data/items.json';
import topProduct from '../data/food.json'

export  function TopProduct() {
  return (
   <>
    <h1>Top Product</h1>
    <Row md={2} xm={1} lg={5} className="g-3">
        {topProduct.map(item=>(
            <Col key={item.id}>
            
        <StoreItem {...item} />
            </Col>
        ))}
    </Row>
    
   </>
  )
}
