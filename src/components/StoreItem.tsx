import React from 'react'
import { Button, Card } from 'react-bootstrap'
import { useShoppingCart } from '../context/shoppingCartContext'
import { formatCurrency } from '../ultility/formatCurrency'

type StoreItemProps =  {
    id:number,
    name:string,
    price:number,
    imgUrl:string
}

export  function StoreItem({id,name,price,imgUrl}:StoreItemProps) {
    const {getItemQuantity,
        increaseCartQuantity,
        decreaseCartQuantity,removeFromCart} = useShoppingCart();
    const quantity = getItemQuantity(id);
  return (
    <Card className='h-100'>
        <Card.Img src={imgUrl}
        variant="top"
        height="200px"
        style={{objectFit:"cover"}}
        />
        <Card.Body className='d-flex flex-column'>
            <Card.Title className='d-flex justify-content-between
            align-items-baseline mb-4'>
                <span className=''>{name}</span>
                <span className='ms-2 text-muted'>{formatCurrency(price)}</span>

            </Card.Title>
            <div className='mt-auto'>
                {quantity===0?(
                    <Button className='w-100' onClick={()=>increaseCartQuantity(id)}>+ Add to Cart</Button>
                ):(
                    <div className='d-flex flex-column align-items-center'
                    style={{gap:".5rem"}}>
                    <div className='d-flex justify-content-center align-items-center'
                    style={{gap:".5rem"}}>
                        <Button onClick={()=>decreaseCartQuantity(id)}>-</Button>
                        <div>
                            <span className='fs-3'>{quantity}</span>
                            in Cart
                        </div>
                        <Button onClick={()=>increaseCartQuantity(id)}>+</Button>
                    </div>
                    <Button variant='danger' size='sm' onClick={()=>removeFromCart(id)}>Remove</Button>
                </div>
                )
                }
            </div>

        </Card.Body>
    </Card>
  )
}
