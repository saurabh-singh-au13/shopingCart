import * as actionTypes from "./shopping-types";

const INITIAL_STATE = {
  products: [
    {
      id: 1,
      title: "High Heels",
      description:
        "Get a Brand New Heels on 20% discount",
      price: 2215.0,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUk4rU4P7Ld7708Lu5S50Pl6ph4LRhsT_t1A&usqp=CAU",
    },
    {
      id: 2,
      title: "OnePlus Watch",
      description:
        "Smart Watch by OnePlus+",
      price: 9999.0,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4jSGEdtk0XcveXScY3eEJIbM7L7iCjigSMw&usqp=CAU",
    },
    {
      id: 3,
      title: "Shirt For Men",
      description:
        "Full Shirt for men color White/Pink",
      price: 1500.0,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5iWh4qqRXG7Bvc9BY0dBOgqqCSUT8oNgreQ&usqp=CAU",
    },
    {
      id: 4,
      title: "Laptop",
      description:
        "Fastest Processor with 2GB of GC",
      price: 42299.0,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmaxOlju2oJuXXQR0sQ9DQ7pTwGqxp0Z_FBw&usqp=CAU",
    },
    {
      id: 5,
      title: "OnePlus Mobile",
      description:
        "Get a Brand New OnePlus Nord ",
      price: 59999.0,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlWzB4zr8XnjzcfKLjxT-GBwb3K-HOyowecA&usqp=CAU",
    },
    {
      id: 6,
      title: "Formal Shoes",
      description:
        "Made with original Leather ",
      price: 2215.0,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFPqv1fzz4eB-TyEtlbVNrmQiHmMOfYSNavw&usqp=CAU",
    },
    {
      id: 7,
      title: "Headphones",
      description:
        "Sound that takes you to Heaven",
      price: 2215.0,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYFO8ENI5zf9oEeb0x9RcNwgkqftdv2LFoFA&usqp=CAU",
    },
  ],
  cart: [],
  currentItem: null,
};

const shopReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.ADD_TO_CART:
      // Great Item data from products array
      const item = state.products.find(
        (product) => product.id === action.payload.id
      );
      // Check if Item is in cart already
      const inCart = state.cart.find((item) =>
        item.id === action.payload.id ? true : false
      );

      return {
        ...state,
        cart: inCart
          ? state.cart.map((item) =>
              item.id === action.payload.id
                ? { ...item, qty: item.qty + 1 }
                : item
            )
          : [...state.cart, { ...item, qty: 1 }],
      };
    case actionTypes.REMOVE_FROM_CART:
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload.id),
      };
    case actionTypes.ADJUST_ITEM_QTY:
      return {
        ...state,
        cart: state.cart.map((item) =>
          item.id === action.payload.id
            ? { ...item, qty: +action.payload.qty }
            : item
        ),
      };
    case actionTypes.LOAD_CURRENT_ITEM:
      return {
        ...state,
        currentItem: action.payload,
      };
    default:
      return state;
  }
};

export default shopReducer;
