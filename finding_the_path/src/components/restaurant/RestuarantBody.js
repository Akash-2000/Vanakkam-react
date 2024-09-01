import { useState } from "react"

const RestaurantBody = () => {
    const [isOpen, setIsOpen] = useState(true)
    return(
        <div className="restaurant-body">
            <div className="restaurant-body-tittle">
                <div>
                    <h4>Ambur star briyani</h4>
                </div>
                <div onClick={() => setIsOpen(!isOpen)}>
                {isOpen?
                <i class="fa-solid fa-arrow-up"></i>:<i class="fa-solid fa-arrow-down"></i>}
                </div>
            </div>
            {isOpen && <div className="restaurant-items">
                <div>
                <h3>Briyani</h3>
                <p>$35</p>
                <p>4.3(53)</p>
                <h3>Briyani</h3>
                </div>
                <div>
                <h3>Briyani</h3>
                <p>$35</p>
                <p>4.3(53)</p>
                <h3>Briyani</h3>
                </div>
                <div>
                <h3>Briyani</h3>
                <p>$35</p>
                <p>4.3(53)</p>
                <h3>Briyani</h3>
                </div>
            </div>}
        </div>
    )
}

export default RestaurantBody