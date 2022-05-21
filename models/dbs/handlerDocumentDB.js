let fs = require("fs");
let path = require("path");

class Contenedor{
    constructor(url){
        this.url = url;
    }

    async create(product){
      try {       
        let productos = await this.getAll();
        let new_product_id = await this.getNewId(productos);
        let new_product = {          
          id: new_product_id,
          ...product
        }
        productos.push(new_product);
        let contenido = JSON.stringify(productos, null, 2);
        await fs.promises.writeFile(`${this.url}`,contenido);
        return new_product_id;
      } catch (error) {
        console.log(error);
      }
    }

    async getNewId(productos){
      let restemporal = productos.reduce((prev, actual)=>{
        if(actual.id < prev){
          return prev;
        }else{
          return actual.id;
        }
      }, 0);
      return restemporal + 1;
    }

    async getById(id){
      try {       
        let respuesta = null;
        let productos = await this.getAll(); 
        if(productos.length > 0){
          productos.forEach(element => {
            if(element.id == id){
              respuesta = element;
            }
          });
        }
        return respuesta;
      } catch (error) {
        console.log(error);
      }
    }

    async getAll(){
      try {      
        let productos = await fs.promises.readFile(`${this.url}`,'utf-8');   
        return JSON.parse(productos);
      } catch (error) {
        console.log(error);
      }
    }

    async deleteById(id){
      try {       
        let respuesta = [];     
        let productos = await this.getAll();
        for (const key in productos) {
          if(productos[key].id == id){
            productos.splice(key, 1);
          }
        }
        let contenido = JSON.stringify(productos, null, 2);
        await fs.promises.writeFile(`${this.url}`,contenido);
        return respuesta;
      } catch (error) {
        console.log(error);
      }
    }

    async deleteAll(){
      try {     
        await fs.promises.writeFile(`${this.url}`,'[]');    
        return 0;
      } catch (error) {
        console.log(error);
      }
    }

}

module.exports = Contenedor;