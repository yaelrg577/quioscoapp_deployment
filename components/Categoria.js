import useQuiosco from '../hooks/useQuiosco'
import Image from 'next/image'

const Categoria = ({categoria}) => {

    const {nombre, icono, id} = categoria
    const {categoriaActual, handleClickCategoria} = useQuiosco()


  return (

    <div className={`${
        categoriaActual?.id === id ? 'bg-amber-400' : ''}  
        flex items-center gap-4 border w-full p-5 hover:bg-amber-400`}>
        <Image
        height={70}
        width ={70}
        alt = 'imagen icono'
        src = {`/assets/img/icono_${icono}.svg`}
        /> 

        <button
        type='button'
        className='text-2xl font-bold hover:cursor-pointer'
        onClick={() => handleClickCategoria(id)}
        >
            {nombre}
        </button>
    </div>
  )
}

export default Categoria