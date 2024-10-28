import RestaurantItem from "./restaurant/RestuarantItem"
import { useSelector, useDispatch } from "react-redux"
import { clearItem } from "../redux/cartslice"

const Cart = () => {
    const cartItem = useSelector((store) => store.cart.cartItem)
    const dispatch = useDispatch()
    //handle clear cart
    const handleClearCart = () => {
        dispatch(clearItem())
    }
    return(
        <div className="w-6/12 m-auto">
            <div>
            <h3 className="font-bold text-lg text-center m-4">Cart</h3>
            </div>
            <div className="bg-red-400 p-3 rounded-lg w-3/12 m-auto text-center mb-4 cursor-pointer" onClick={handleClearCart}>
                <button className="text-white font-bold">Clear cart</button>
            </div>
            <div className="p-2 mx-2">
            {cartItem?.map((item) => 
            <RestaurantItem data={item}/>
            )}
            </div>
            
        </div>
    )
}


export default Cart