import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Product from './component/Product';

class App extends Component {
    render() {

    let products = [
        {
            id : 1,
            nama : 'Nokia 7610',
            harga : 'Rp 1500',
            img : 'https://static.toiimg.com/thumb/msid-70471650,width-220,resizemode-4,imgv-0/Nokia-7610.jpg',
            status : true
        },
        {
            id : 2,
            nama : 'Nokia 7600',
            harga : 'Rp 2500',
            img : 'https://ecs7.tokopedia.net/img/cache/700/attachment/2018/10/14/153951880140467/153951880140467_fd0909a7-7f42-4680-9543-7214715bb6d7.png',
            status : true
        },
        {
            id : 3,
            nama:'Nokia 3310',
            harga: 'Rp 9871500',
            img:'https://images-na.ssl-images-amazon.com/images/I/416Q02GR0ZL._AC_.jpg',
            status : true
        },
        {
            id : 4,
            nama:'Nokia 3360',
            harga: 'Rp 9871500',
            img:'https://d2pa5gi5n2e1an.cloudfront.net/webp/global/images/product/mobilephones/Nokia_3660/Nokia_3660_L_1.jpg',
            status : true
        },
        {
            id : 5,
            nama:'Nokia 3315',
            harga: 'Rp 9871500',
            img:'https://cdns.klimg.com/resized/630x/g/1/0/10_hp_jadul_paling_legendaris_di_indonesia_mana_punyamu/hp_jadul_di_indonesia-20150120-005-rita.jpg',
            status : true
        },
        {
            id : 6,
            nama:'Nokia N81',
            harga: 'Rp 9871500',
            img:'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRKxcxhbFE4Mr_gjtshx5UdkmTVeW3X4m7n7A&usqp=CAU',
            status : true
        }
    ];

    let elements = products.map((product, index) => {
        let result = '';
        if (product.status) {
            result = <Product 
                        key = {product.id}
                        harga = {product.harga}
                        img = {product.img}            
                        nama = {product.nama}
                    /> 
            return result;
        }
                
    })
        return (
            <div>
                <nav className="navbar navbar-inverse">
                    <div className="container-fluid bg-dark">
                        <a className="navbar-brand" style={{color:'white'}}>PROPS</a>
                    </div>
                </nav>
                
                <div className="container">
                    <div className="row">
                        {elements}
                    </div>
                </div>
            </div>
      
        );

    }
}

export default App;
