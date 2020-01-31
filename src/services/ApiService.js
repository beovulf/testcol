import axios from "axios";

// Product

const getProduct = (id = 1) => {
  // return axios.get(`/api/product/${id}`);

  return new Promise(function(resolve, reject) {
    setTimeout(() => {
      resolve({
        id: 1,
        title: "Paper",
        price: {
          new: 565,
          old: 670
        },
        variants: ["white", "black", "blue"],
        stock_amount: 10,
        gallery: [
          {
            src: "paper1.jpg",
            alt: "Caption 1"
          },
          {
            src: "paper2.jpg",
            alt: "Caption 2"
          },
          {
            src: "paper3.jpg",
            alt: "Caption 3"
          }
        ],
        description: `<p>
     Lorem ipsum dolor sit amet, consectetur adipiscing elit.
     Aenean euismod bibendum laoreet. Proin gravida dolor sit
     amet lacus accumsan et viverra justo commodo. Proin sodales
     pulvinar tempor. Cum sociis natoque penatibus et magnis dis
     parturient montes, nascetur ridiculus mus. Nam fermentum,
     nulla luctus pharetra vulputate, felis tellus mollis orci,
     sed rhoncus sapien nunc eget odio.
   </p>
   <p>
     Lorem ipsum dolor sit amet, consectetur adipiscing elit.
     Aenean euismod bibendum laoreet. Proin gravida dolor sit
     amet lacus accumsan et viverra justo commodo. Proin sodales
     pulvinar tempor. Cum sociis natoque penatibus et magnis dis
     parturient montes, nascetur ridiculus mus. Nam fermentum,
     nulla luctus pharetra vulputate, felis tellus mollis orci,
     sed rhoncus sapien nunc eget odio.
   </p>
   <p>
     Lorem ipsum dolor sit amet, consectetur adipiscing elit.
     Aenean euismod bibendum laoreet. Proin gravida dolor sit
     amet lacus accumsan et viverra justo commodo. Proin sodales
     pulvinar tempor. Cum sociis natoque penatibus et magnis dis
     parturient montes, nascetur ridiculus mus. Nam fermentum,
     nulla luctus pharetra vulputate, felis tellus mollis orci,
     sed rhoncus sapien nunc eget odio.
   </p>`,
        inspirations: [
          {
            id: 1,
            title: "Paper is awesome!",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar tempor. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam fermentum, nulla luctus pharetra vulputate, felis tellus mollis orci, sed rhoncus sapien nunc eget odio."
          },
          {
            id: 2,
            title: "Paper is awesome!",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet."
          },
          {
            id: 3,
            title: "Paper is awesome!",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet la."
          }
        ]
      });
    }, 500);
  });
};

// Get cart

const getCart = () => {
  // return axios.get(`/api/cart`);

  return new Promise(function(resolve, reject) {
    setTimeout(() => {
      resolve([]);
    }, 500);
  });
};

// Update cart

const updateCart = product => {
  // return axios.post(`/api/cart`);

  return new Promise(function(resolve, reject) {
    setTimeout(() => {
      resolve(product);
    }, 500);
  });
};

export default {
  getProduct,
  getCart,
  updateCart
};
