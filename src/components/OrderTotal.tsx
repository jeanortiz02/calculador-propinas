import { useMemo, Dispatch } from 'react';
import { OrderItem } from '../types/index';
import { formatCurrency } from '../helpers/index';
import { OrderActions } from '../reducers/order-reducer';

type OrderTotalsProps = {
    order: OrderItem[],
    tip: number,
    dispatch: Dispatch<OrderActions>
}

export default function OrderTotal({order, tip, dispatch} : OrderTotalsProps) {

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
            onClick={ () => dispatch({type: 'place-order'})}
        >Guardar Orden</button>
    </>
  )
}
