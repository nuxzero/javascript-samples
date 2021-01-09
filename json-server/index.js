const faker = require("faker");
const { fake } = require("faker");

module.exports = function () {
  return {
    products: [...Array(5).keys()].map(i => {
      return productObject();
    }),
    customer: customerObject(),
    cart: cartObject()
  }
}

function productObject() {
  return {
    id: faker.random.uuid(),
    name: faker.name.findName(),
    image: faker.image.avatar(),
  }
}

function cartObject() {
  const cartItems = [...Array(5).keys()].map(i => { return cartItemObject(); });
  return {
    id: faker.random.uuid(),
    items: cartItems,
    subtotal: 250.0,
    shipping: 35.0,
    tax: 15.0,
    total: 300.0,
  }
}

function cartItemObject() {
  return {
    id: faker.random.uuid(),
    product: productObject(),
    quantity: faker.random.number(),
  }
}

function customerObject() {
  return {
    id: faker.random.uuid(),
    name: faker.name.findName(),
    email: faker.internet.email(),
    shipping_address: `${faker.address.streetAddress()}, ${faker.address.city()} ${faker.address.zipCode()}`,
    profile_image: faker.internet.avatar(),
  }
}