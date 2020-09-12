import React from 'react'
import './Home.css'
import Product from './Product'


function Home() {
    return (
        <div className="home">
            <div className="home_container">
                <div id="slider">
                    <figure>
                        <img src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_Currency_v2_en_US_2x._CB428993290_.jpg" alt="" >
                        </img>     
                        
                        <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img20/Wireless/SamsungM/M51/GWTO/PostLaunch/Uber/P38983965_IN_WLME_SamsungGalaxy_M51_New_Launchtall-hero_1500x600_1._CB405488972_.jpg" alt="" >
                        </img>   
                        
                        <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img19/AmazonPay/Rajeshwari/September/GWBanners/Control/DesktopHero_1500x600._CB405007888_.jpg" alt="" >
                        </img>
                        
                        <img src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_Computers_1x._CB432469755_.jpg" alt="" >
                        </img>   
                            
                        <img src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_Computers_1x._CB432469755_.jpg" alt="" >
                        </img>   
                    </figure>    
                </div>
                

                <div className="home_row">
                    <Product
                    id="123645" 
                    title='The lean startup' 
                    price={600.00} 
                    image='https://images-na.ssl-images-amazon.com/images/I/81-QB7nDh4L.jpg' 
                    rating={5}/>
                    <Product
                    id="563241" 
                    title='1080P Webcam with Microphone, Wansview USB 2.0 Desktop Laptop Computer Web Camera with Auto Light Correction' 
                    price={2000.00} 
                    image='https://m.media-amazon.com/images/I/71zEiQWAUoL._AC_UL480_FMwebp_QL65_.jpg' 
                    rating={4}/>

                </div>

                <div className="home_row">
                    <Product
                        id="529743" 
                        title='swanart Peacock Modern Round Hanging LED Chandelier Light for Living Dining Room (Multicolour)' 
                        price={500.00} 
                        image='https://m.media-amazon.com/images/I/51Enb4nvQPL._AC_UL480_FMwebp_QL65_.jpg' 
                        rating={3}
                    />

                    <Product
                        id="456786" 
                        title='Redmi 8A Dual (Midnight Grey, 2GB RAM, 32GB Storage) – Dual Cameras & 5,000 mAH Battery' 
                        price={8000.00} 
                        image='https://images-na.ssl-images-amazon.com/images/I/81eCoI3o-HL._SL1500_.jpg' 
                        rating={5}
                    />

                    <Product
                        id="896325" 
                        title='Mi Band 3 (Black)' 
                        price={1999.00} 
                        image='data:image/jpeg;base64,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' 
                        rating={4}
                    />
                </div>

                <div className="home_row">
                <Product
                    id="456893" 
                    title='Amazon Echo (3rd Gen) – Improved sound, powered by Dolby (Grey)' 
                    price={7999.00} 
                    image='https://images-na.ssl-images-amazon.com/images/I/618l86R3U9L._SL1000_.jpg' 
                    rating={5}/>
                </div>

                <div className="home_banner">
                    <img src="https://m.media-amazon.com/images/G/31/AMS/IN/970X250-_desktop_banner.jpg" alt="second-banner"></img>
                </div>

                <div className="home_row">
                <Product
                    id="523896" 
                    title='Microsoft Surface Pro X 1876 13-inch Laptop (Microsoft SQ1/8GB/128GB SSD/Windows 10 Home/Microsoft SQ1 Adreno 685 GPU Graphics), Matte Black' 
                    price={100713.00} 
                    image='https://images-na.ssl-images-amazon.com/images/I/51ZqIfidWfL._SL1200_.jpg' 
                    rating={4}/>
                
                <Product
                    id="854796" 
                    title='Mi Notebook 14 Intel Core i5-10210U 10th Gen Thin and Light Laptop(8GB/256GB SSD/Windows 10/Intel UHD Graphics/Silver/1.5Kg), XMA1901-FC+Webcam' 
                    price={43000.00} 
                    image='https://images-na.ssl-images-amazon.com/images/I/71mYRzElTAL._SL1500_.jpg' 
                    rating={3}/>
                </div>

                <div className="home_row">
                <Product
                    id="523896" 
                    title='Nescafe Travel Kit (Red) - NESCAFÉ Classic Coffee, 200g with Travel Mug (Limited Edition)' 
                    price={500.00} 
                    image='https://images-na.ssl-images-amazon.com/images/I/71wzXDH5p4L._SL1500_.jpg' 
                    rating={5}/>
                
                <Product
                    id="854796" 
                    title='Toblerone of Switzerland Milk Chocolate with Honey and Almond Nougat - 6 Pack Pouch, 6 x 100 g' 
                    price={399.00} 
                    image='https://images-na.ssl-images-amazon.com/images/I/71zMfHHfKpL._SL1500_.jpg' 
                    rating={4}/>
                </div>

                
            </div>
        </div>
    )
}

export default Home
