
import MenuItem from './components/MenuItem';
import { menuItems } from './data/db'
import useOrder from './hooks/useOrder';
import OrderContents from './components/OrderContents';
import OrderTotal from './components/OrderTotal';
import TipPercentageForm from './components/TipPercentageForm';


function App() {
  
  const { 
      addItem, 
      order, 
      removeItem, 
      setTip,
      tip, 
      placeOrder,
    
  } = useOrder();

  return (
    <>
      <header className=" bg-teal-400 py-5">
        <h1 className=" text-center text-4xl font-black">Calculadora de Propinas y Consumo</h1>
      </header>

      <main className=' max-w-7xl mx-auto py-20 grid md:grid-cols-2'>
        <div className=' p-5'>
          <h2 className=' text-4xl font-black'>Menú</h2>

          <div className=' space-y-3 mt-10'>
            { menuItems.map( item => (
              <MenuItem
                item={ item }
                key={item.id}
                addItem= { addItem }
              />
            ))}
          </div>
        </div> 

          <div className='border border-dashed boder-slate-300 p-5 rounded-lg space-y-10 bg-slate-50'>

            { order.length > 0? (
              
              <>
                <OrderContents
                  order={ order }
                  removeItem = { removeItem }
                />
                <TipPercentageForm
                  setTip = { setTip }
                  tip={ tip }
                />
              
                <OrderTotal
                  order={order}
                  tip={ tip }
                  placeOrder = { placeOrder }
                />

              </>
            
            ) : (
              <p className=' text-center'>La orden está vacía</p>
          )}
            


          </div>
      </main>
    </>
  )
}

export default App
