import { useEffect, useState } from "react"
import Image from "next/image"
import useQuiosco from "../hooks/useQuiosco"
import { formatearDinero } from '../helpers'

const ModalProducto = () => {
    const { producto, handleChangeModal, handleAgregarPedido, pedido } = useQuiosco()
    const [ cantidad, setCantidad ] = useState(1)
    const [edicion , setEdicion ] = useState(false)

    useEffect(() => {
        if(pedido.some((pedidoState) => pedidoState.id === producto.id)){

            const productoEdicion = pedido.find((pedidoState) => pedidoState.id === producto.id)
            setEdicion(true)
            setCantidad(productoEdicion.cantidad)
        }
    
    },[pedido,producto])

    

    return (
        <div className='md:flex gap-10 '>

            <div className='md:w-1/3'>
                <Image
                    height={400}
                    width={300}
                    alt={`imagen de producto ${producto.nombre}`}
                    src={`/assets/img/${producto.imagen}.jpg`}
                />
            </div>

            <div className='md:w-2/3'>
                <div className="flex justify-end">
                    <button
                        onClick={handleChangeModal}
                    >
                        <svg
                            className="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                            />
                        </svg>
                    </button>
                </div>


                <h1 className="text-3xl mt-5 font-bold">{producto.nombre}</h1>
                <p className="text-amber-400  mt-5 font-black text-5xl ">{formatearDinero(producto.precio)}</p>


                <div className="flex gap-3 mt-3">
                    <button
                    type="button"
                   onClick={() => {
                    if(cantidad <= 1 ) return
                    setCantidad(cantidad -1)
                   }}
                    >
                        <svg
                            className="w-7 h-7"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                            />
                        </svg>
                    </button>

                        <p className="text-3xl">{cantidad}</p>

                    <button
                    type="button"
                    onClick={() => {
                        if(cantidad >= 5 ) return
                        setCantidad(cantidad + 1)
                       }}
                    >
                        <svg
                            className="w-7 h-7"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                            />
                        </svg>
                    </button>
                </div>

                <button 
                type="button"
                className="bg-indigo-600 hover:bg-indigo-800 text-white font-bold rounded px-5 py-2 mt-5 uppercase"
                onClick={() => handleAgregarPedido({...producto, cantidad})}
                >
                    {edicion ? 'Guardar Cambiar' : 'Añadir al Pedido'}
                </button>
            </div>
        </div>
    )
}

export default ModalProducto