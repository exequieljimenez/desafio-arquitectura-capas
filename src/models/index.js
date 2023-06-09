import ProductManagerMongo from "./manager/products.manager.js";
import CarritosManagerMongo from "./manager/carritos.manager.js";
import { ProductModel } from "./dbModels/product.model.js";
import { CarritoModel } from "./dbModels/carrito.model.js";

const productManager = new ProductManagerMongo(ProductModel);
const carritosManager = new CarritosManagerMongo(CarritoModel)

export {productManager, carritosManager}