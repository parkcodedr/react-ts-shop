import React from 'react'
import { Button, Offcanvas, Stack } from 'react-bootstrap'
import { useShoppingCart } from '../context/shoppingCartContext'
import { formatCurrency } from '../ultility/formatCurrency'
import { CartItem } from './CartItem'
import storeItems from '../data/items.json'
import topProduct from '../data/food.json';


type ShoppingCartProps = {
    isOpen:boolean
}

export function ShoppingCart({isOpen}:ShoppingCartProps) {
    const {closeCart,cartItems} = useShoppingCart();
    const allProducts = [...topProduct,...storeItems]
    

  return (
    <Offcanvas show={isOpen} placement="end" onHide={closeCart}> 
        <Offcanvas.Header closeButton>
            <Offcanvas.Title>Cart</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
            <Stack gap={3}>
                {cartItems.map(item=>(
                    <CartItem key={item.id} {...item} />
                ))}
                <div className='ms-auto fw-bold fs-5'>
                    Total {' '}

                    {formatCurrency(cartItems.reduce((total,cartItem)=>{
                        const item = allProducts.find(i=>i.id===cartItem.id) ;
                        return total + (item?.price || 0) * cartItem.quantity;
                    },0))
                    }
                    
                </div>
            </Stack>
            {cartItems.length>0 && (
                <div className="mt-3">
                <Button variant='primary' size='sm' className='w-100'>Checkout</Button>
               </div>
            )}
        </Offcanvas.Body>

    </Offcanvas>
  )
}
