import IRestaurant from '../interface/IRestaurant';

class Restaurant{

    private id : Number;
    private name: string;
    address: string;
    addressNumber: number;
    openDate: string;
    closeDate: string;
    photo: string;

    constructor(restaurant: IRestaurant) {
        this.id = restaurant.id;
        this.name = restaurant.name;
        this.address = restaurant.address;
        this.addressNumber = restaurant.addressNumber;
        this.openDate = restaurant.openDate;
        this.closeDate = restaurant.closeDate;
        this.photo = restaurant.photo;
    }

    get getId(){
        return this.id;
    }

    get getName(){
        return this.name;
    }
}

export default Restaurant;