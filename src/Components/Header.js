import React from 'react'

const Header = ({inCart, setInCart}) => {
  return (
    <header>
        <div className="container mx-auto">
        <nav className='flex flex-row items-center justify-between border-b'>
           <div className='flex flex-row items-center space-x-12'>
           <div className="logo">
                <a href=".com"><img src="../../logo.svg" alt="" /></a>
            </div>
            <ul className="menu flex flex-row items-center space-x-6 mt-1">
                <li className='py-10'>Collections</li>
                <li className='py-10'>Men</li>
                <li className='py-10'>Women</li>
                <li className='py-10'>About</li>
                <li className='py-10'>Contact</li>
            </ul>
           </div>
            <div className="user flex flex-row items-center space-x-12">
                <div className='relative group cursor-pointer'>
                    <div className='relative h-full py-10 px-4'>
                    { inCart.amount < 1 ? '' : (<span className='bg-orange-600 px-2 rounded-md text-[9px] absolute top-8 right-2 text-white'>{inCart.amount}</span>)}
                    <img src="../../icon-cart.svg" alt="" className='block'/>
                    </div>
                    {inCart.length === 0 ? (<div className='hidden group-hover:block shadow-2xl w-[350px] h-auto rounded-lg absolute top-20 -right-24 z-50 bg-white'>
                        <div className="cart border-b p-5">
                            <h4 className='font-bold'>Cart</h4>
                        </div>
                        <div className='h-44 flex flex-col items-center justify-center'>
                            <p className='text-sm text-center'>Your cart is empty</p>
                        </div>
                    </div>) : (<div className='hidden group-hover:block shadow-2xl w-[350px] h-auto rounded-lg absolute top-20 -right-24 z-50 bg-white'>
                        <div className="cart border-b p-5">
                            <h4 className='font-bold'>Cart</h4>
                        </div>
                        <div className='h-auto px-5 py-6 flex flex-col items-cente'>
                            <div className='flex flex-row items-center justify-between space-x-4'>
                                <span><img src="../../image-product-1-thumbnail.jpg" alt=""  className='w-14 rounded-md'/></span>
                                <div>
                                <h4>{inCart.title}</h4>
                                <p>${inCart.price}.00 x {inCart.amount}<strong className='pl-2'>${inCart.price * inCart.amount}.00</strong></p>
                                </div>
                                <button onClick={e => setInCart([])}><img src="../../icon-delete.svg" alt="" /></button>
                            </div>
                            <button className='mt-5 w-full block shadow-xl shadow-orange-200 bg-orange-500 text-white py-3 rounded-lg'>
                            checkout
                            </button>
                        </div>
                    </div>)}
                </div>
                <div>
                    <img src="../../image-avatar.png"  alt="" className='w-10' />
                </div>
            </div>
        </nav>
        </div>
    </header>
  )
}

export default Header