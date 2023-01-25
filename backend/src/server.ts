import express from 'express';
import cors from 'cors';
import restaurantRouter from './controller/RestaurantController';

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors({
    origin: '*'
}));

app.use('/restaurant', restaurantRouter);

app.listen(3333);