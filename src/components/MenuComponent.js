import React from 'react';
import {Card, CardImg, CardImgOverlay,CardTitle} from 'reactstrap';
import DishdetailComponent from './DishdetailComponent';
class Menu extends React.Component{
    constructor(props){
        super(props);
        this.state={
            selectedDish: null
        };
    }
    onDishSelect(dish){
        this.setState(
            {selectedDish: dish}
        )
    }
    
    render(){
        const menu= this.props.dishes.map((dish => {
            return(
                <div key={dish.name} className="col-12 col-md-5 m-1">
                    <Card key={dish.id} onClick={() => this.props.onClick(dishId)}>
                        <CardImg width="100%" src={dish.image} alt={dish.name}/>
                        <CardImgOverlay>
                            <CardTitle>{dish.name}</CardTitle>
                        </CardImgOverlay>
                    </Card>
                </div>
            )
        }));
        return(
            <div className="container">
                <div className="row">
                    {menu}
                </div>
            </div>
        );
    }
}
export default Menu;