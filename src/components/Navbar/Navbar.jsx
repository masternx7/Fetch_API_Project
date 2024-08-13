import React, { useState } from 'react'
import './Navbar.css'
import '../Home/Homejs.js'

const Navbar = () => {

    const [cartopen, setCartopen] = useState(false);

    const toggleCart = () => {
        setCartopen(!cartopen)
    }

    return (
        <>
            <nav className='nav-container'>
                <div className='nav-content'>
                    <div className='nav-logo'>
                        <a href="#">MasterN Shop</a>
                    </div>
                    <ul className='menu-ul'>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">Product</a></li>
                        <li><a href="#">Contact</a></li>
                    </ul>
                    <div >
                        <button className='btn-store' id='viewCart' onClick={toggleCart}>ตะกร้า</button>
                        <div id='cartSummary' className={`${cartopen ? 'active' : ''}`}>
                            <table>
                                <thead>
                                    <tr>
                                        <th>ชื่อสินค้า</th>
                                        <th>จำนวน</th>
                                        <th>ราคา</th>
                                    </tr>
                                </thead>
                                <tbody id='cartSummary_items'>
                                    <tr>
                                        <th>iPhone 29</th>
                                        <td>1</td>
                                        <td>50000</td>
                                    </tr>
                                </tbody>
                                <tfoot>
                                    <tr>
                                        <th colSpan={2}>ราคารวม</th>
                                        <td id='cartSummary_total'>50000</td>
                                    </tr>
                                </tfoot>
                            </table>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar