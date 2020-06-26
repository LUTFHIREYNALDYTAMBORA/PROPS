import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';


class Product extends Component {
    render() {
        return (
            
            <div className="col-4">
                <div className="thumbnail" >
                    <img alt={this.props.nama} src={this.props.img} style={{ height:'200px'}}/>
                    <div className="caption" >
                        <h3>{this.props.nama}</h3>
                        <p>
                            {this.props.harga}
                        </p>
                        <p>
                            <a className="btn btn-primary">Beli</a>
                        </p>
                    </div>
                </div>
            </div>
                  
        );

    }
}

export default Product;
