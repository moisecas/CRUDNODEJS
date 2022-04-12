const { Router } = require('express');

const routerProductos = Router();

const productos = [];

//posible consulta según id 
// const consulta = productos.find(id => id.id === 1);

// routerProductos.get('/', (req, res) => {
//     res.json(consulta); 
// });

routerProductos.get('/', (req, res) => {
    res.json(productos);
});

routerProductos.post('/', (req, res) => {
    productos.push(req.body);
    res.json(req.body);
});

routerProductos.delete("/:id", (req, res) => {
    const id = req.params.id;
  
    productos = productos.filter((productos) => productos.id != id);
  
    res.send(`producto con id: ${id} borrado.`);
  });

  //consulta por id 
  routerProductos.get("/:id", (req, res) => {
    const id = req.params.id;
  
    const productos = productos.find((productos) => productos.id == id);
  
    res.send(foundUser);
  });

exports.routerProductos = routerProductos;   