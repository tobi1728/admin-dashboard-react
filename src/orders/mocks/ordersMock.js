import { productsMock } from "../../product/mocks/productsMock";

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

function formatCurrency(value) {
  return `$${value.toFixed(2)}`;
}

const customers = [
  { name: 'John Doe', address: '123 Elm St' },
  { name: 'Jane Smith', address: '456 Oak St' },
  { name: 'Jim Beam', address: '789 Pine St' },
  { name: 'Jack Daniels', address: '101 Maple St' },
  { name: 'Jill Stein', address: '202 Birch St' },
  { name: 'George Orwell', address: '1984 Orwell St' },
  { name: 'Aldous Huxley', address: 'Brave New World St' },
  { name: 'F. Scott Fitzgerald', address: 'Gatsby St' },
  { name: 'Ernest Hemingway', address: 'Old Man St' },
  { name: 'Mark Twain', address: 'Huckleberry St' },
  { name: 'Charles Dickens', address: 'Great Expectations St' },
  { name: 'Leo Tolstoy', address: 'War and Peace St' },
  { name: 'Fyodor Dostoevsky', address: 'Crime and Punishment St' },
  { name: 'Jane Austen', address: 'Pride and Prejudice St' },
  { name: 'Mary Shelley', address: 'Frankenstein St' }
];

const statuses = ['new', 'paid', 'sent', 'completed'];

export const ordersMock = productsMock.map((product, index) => {
  const quantity = getRandomInt(1, 30);
  const orderValue = formatCurrency(quantity * product.price);
  const customer = customers[index % customers.length];
  const status = statuses[getRandomInt(0, statuses.length)];

  return {
    id: index + 1,
    customer: customer.name,
    address: customer.address,
    quantity,
    product: product.title,
    price: formatCurrency(product.price),
    orderValue,
    status
  };
});
