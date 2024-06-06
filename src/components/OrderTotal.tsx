import { useMemo } from 'react';
import { OrderItem } from '../types/index';
import { formatCurrency } from '../helpers/index';

type OrderTotalsProps = {
    order: OrderItem[],
    tip: number,
    placeOrder: () => void
}

export default function OrderTotal({order, tip, placeOrder} : OrderTotalsProps) {

    const subTotalAmount = useMemo( () => order.reduce( (total, item) => total + ( item.quantity * item.price ), 0), [order] )
    
    const tipAmout = useMemo( () => subTotalAmount * tip, [tip, subTotalAmount])

    const totalAmount = useMemo( () => subTotalAmount + tipAmout , [tipAmout, subTotalAmount] )

  return (
    <>
        <div className=" space-y-3">
            <h2 className="font-black text-2xl">Totales y propina</h2>
            <p>Subtotal a pagar:{' '}
                <span className=" font-bold">{formatCurrency(subTotalAmount)}</span>
            </p>

            <p>Propina: {''}
                <span className="font-bold">{formatCurrency(tipAmout)}</span>
            </p>

            <p>Total a pagar: {''}
                <span className="font-bold">{formatCurrency(totalAmount)}</span>
            </p>
        </div>

        <button
            className='w-full bg-black p-3 uppercase text-white font-black disabled:opacity-10'
            disabled= { totalAmount === 0 }
            onClick={ placeOrder}
        >Guardar Orden</button>
    </>
  )
}
