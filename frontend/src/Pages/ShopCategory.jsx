import React, { useContext } from 'react'
import './CSS/ShopCategory.css'
import { ShopContext } from '../Context/ShopContext';
import dropdown_icon from '../Components/Assets/dropdown_icon.png'
import all_product from '../Components/Assets/all_product';
import Item from '../Components/Item/Item';

const ShopCategory = (props) => {
  const {all_product} = useContext(ShopContext);
  return (
    <div className='shop-category'>
      <div className="shopcategory-banner">
        <hr />
        <h1>Escolha já a sua nova bicicleta.</h1>
        <p>Faça parte do mundo sobre duas rodas.</p>
        <hr />
      </div>

      <div className="shopcategory-indexSort">
        <p>
          <span>Mostrando 1-12</span> de 20 produtos.
        </p>
      </div>

      <div className="shopcategory-sort">
        Organizar por <img src={dropdown_icon} alt="" />
      </div>

      <div className="shopcategory-products">
        {all_product.map((item, i) =>{
          if(props.category===item.category) {
            return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
          }
          else {
            return null;
          }
        })}
      </div>

    </div>

  )
}

export default ShopCategory
