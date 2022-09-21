import React, { useState } from 'react'
import productData from '../data'

const ProductDetails = ({overflow, setInCart}) => {

    const [count, setCount] = useState(0)
    const [amount, setAmount] = useState(0)
    const [isOpen, setIsOpen] = useState(false)
    overflow(isOpen)

    const handlePrevious = () => {
        if(count < 1){
            setCount(count + (productData.productThumb.length -1))
        }else{
            setCount(count - 1)
        }
    }

    const handleNext = () => {
        if(count === productData.productThumb.length -1){
            setCount((productData.productThumb.length -1) - count)
        }else{
          setCount(count + 1)
        }
    }

    const handlePriceDecrease = () => {
        if(amount < 1){
            setAmount(0)
        }else{
            setAmount(prev => prev -1)
        }
    }

    const addToCart = () => {
        if(amount === 0){
            setInCart([])
            return
        }
        setInCart({
            title: productData.title,
            price: productData.salePrice,
            amount,

        })
    }

  return (
    <div className="container mx-auto my-20 overflow-y-hidden">
        <div className='flex flex-row items-center justify-center gap-32 max-w-[1140px] mx-auto'>
        <div className='w-[400px]'>
            <button onClick={e => setIsOpen(true)}>
                <img src={productData.productImages[count]} alt="img"  className='rounded-3xl'/>
            </button>
            <div className='grid grid-cols-4 gap-8 my-8'>
                {productData.productThumb.map((product, index, arr) => {
                    return (<button className={`${(count === index) && 'ring-[2.5px] ring-orange-400'} rounded-lg`} onClick={e => setCount(index)} key={index}><img src={product} alt="" className={`${(count === index) && 'opacity-50'} w-18 rounded-lg`}/></button>)

                })}
            </div>
        </div>
        <div className='w-1/2'>
            <h4 className='text-orange-600 font-bold text-sm uppercase mb-4'>{productData.category}</h4>
            <h1 className='font-bold text-5xl capitalize'>{productData.title}</h1>
            <p className='text-gray-500 text-sm my-8 max-w-sm'>{productData.description}</p>
            <div className='flex flex-row items-center space-x-4'>
                <p className='font-bold text-2xl'>${productData.salePrice}.00</p>
                <p className='text-orange-600 bg-orange-100 font-bold px-2  rounded-md'>{productData.discount}%</p>
            </div>
            <p className='text-gray-300 font-medium mt-2 line-through'>${productData.originalPrice}.00</p>
            <div className='flex flex-row items-center space-x-8'>
                <div className='bg-gray-50 rounded-lg shadow-sm flex flex-row items-center justify-between py-3 px-4 flex-1 max-w-[140px]'>
                    <button onClick={handlePriceDecrease}><img src="../../icon-minus.svg" alt="" /></button>
                    <p className='font-bold'>{amount}</p>
                    <button onClick={(e) => setAmount(prev => prev + 1)}><img src="../../icon-plus.svg" alt="" /></button>

                </div>
                <div className='my-8'>
                    <button onClick={addToCart} className='flex flex-row items-center space-x-4 shadow-xl shadow-orange-200 bg-orange-500 text-white py-3 px-14 rounded-lg'>
                    <img src="../../icon-cart-white.svg" alt="" className='text-white' />
                    <p>Add to cart</p>
                    </button>
                </div>
            </div>
        </div>
    </div>
    {isOpen && (
        <div className='flex flex-col z-50 items-center justify-center bg-black bg-opacity-90 absolute inset-0 h-screen w-full'>
        <div className='w-full sm:w-[450px]'>
                <div className='relative mt-14'>
                    <img src={productData.productImages[count]} alt="img"  className='rounded-3xl'/>
                    <button onClick={e => setIsOpen(!isOpen)} className='absolute -top-8 right-0'><img src="../../icon-close.svg" alt="" className='w-[18px]' /></button>
                    <button onClick={handlePrevious} className='absolute top-1/2 bottom-1/2 -translate-y-1/2 transform left-0 -translate-x-1/2  bg-white rounded-full w-14 h-14 flex items-center justify-center'><img src="../../icon-previous.svg" alt="" className='w-[12px]' /></button>
                    <button onClick={handleNext} className='absolute top-1/2 bottom-1/2 -translate-y-1/2 transform right-0 translate-x-1/2 bg-white rounded-full w-14 h-14 flex items-center justify-center'><img src="../../icon-next.svg" alt="" className='w-[12px]' /></button>
                </div>
                <div className='grid grid-cols-4 gap-8 my-8 mx-8'>
                    {productData.productThumb.map((product, index, arr) => {
                        return (<button className={`${(count === index) && 'ring-[2.5px] ring-orange-400'} rounded-lg`} onClick={e => setCount(index)} key={index}><img src={product} alt="" className={`${(count === index) && 'opacity-50'} w-18 rounded-lg`}/></button>)
    
                    })}
                </div>
            </div>
        </div>
    )}
    </div>
  )
}

export default ProductDetails