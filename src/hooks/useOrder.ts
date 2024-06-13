import { useState } from 'react'
import type { MenuItem, OrderItem } from '../types';


export default function useOrder() {
    const [ order, setOrder ] = useState<OrderItem[]>([]);
    const [tip, setTip ] = useState(0);


    // console.log(order);

    const placeOrder = () => {
        setOrder([])
        setTip(0)
    }

    return {
        order,
        setTip,
        placeOrder
    }
}