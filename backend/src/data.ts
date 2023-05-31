export const sample_foods: any[] = [
  {
    id: '1',
    name: 'Pizza Pepperoni',
    cookTime: '10-20',
    price: 10,
    favorite: false,
    origins: ['italy'],
    stars: 4.5,
    imageUrl: 'assets/food-1.jpg',
    tags: ['FastFood', 'Pizza', 'Lunch'],
  },
  {
    id: '2',
    name: 'Meatball',
    cookTime: '20-30',
    price: 20,
    favorite: true,
    origins: ['persia', 'middle-east', 'china'],
    stars: 4.7,
    imageUrl: 'assets/food-2.jpg',
    tags: ['SlowFood', 'Lunch'],
  },
  {
    id: '3',
    name: 'Hamburger',
    cookTime: '10-15',
    price: 5,
    favorite: false,
    origins: ['germany', 'us'],
    stars: 3.5,
    imageUrl: 'assets/food-3.jpg',
    tags: ['FastFood', 'Hamburger'],
  },
  {
    id: '4',
    name: 'Fried Potatoes',
    cookTime: '15-20',
    price: 2,
    favorite: true,
    origins: ['belgium', 'france'],
    stars: 3.3,
    imageUrl: 'assets/food-4.jpg',
    tags: ['FastFood', 'Fry'],
  },
  {
    id: '5',
    name: 'Chicken Soup',
    cookTime: '40-50',
    price: 11,
    favorite: false,
    origins: ['inida', 'asia'],
    stars: 3.0,
    imageUrl: 'assets/food-5.jpg',
    tags: ['SlowFood', 'Soup'],
  },
  {
    id: '6',
    name: 'Vegetables-pizza',
    cookTime: '40-50',
    price: 9,
    favorite: true,
    origins: ['italy'],
    stars: 4.0,
    imageUrl: 'assets/food-6.jpg',
    tags: ['FastFood', 'Pizza', 'Lunch'],
  },
  {
    id: '7',
    name: 'Spicy Cheese Burger',
    cookTime: '20-30',
    price: 12,
    favorite: false,
    origins: ['indian'],
    stars: 4.0,
    imageUrl: 'assets/food-7.jpg',
    tags: ['FastFood', 'Burger', 'Lunch'],
  },
  {
    id: '8',
    name: 'Vegetables Magento Pizza',
    cookTime: '45-50',
    price: 9,
    favorite: false,
    origins: ['indian'],
    stars: 4.0,
    imageUrl: 'assets/food-8.jpg',
    tags: ['FastFood', 'Pizza', 'Lunch'],
  },
];
export interface Tag {
    name: string;
    count: number;
  }
  
  export const sample_tags: any[] = [
    { name: 'All', count: 8 },
    { name: 'FastFood', count: 4 },
    { name: 'Pizza', count: 3 },
    { name: 'Lunch', count: 3 },
    { name: 'SlowFood', count: 2 },
    { name: 'Hamburger', count: 2 },
    { name: 'Fry', count: 1 },
    { name: 'Soup', count: 1 },
  ];
  export const sample_users: any[] = [
    {
      name:"sudhanshu singh",
      email:"sudhanshusingh@gmail.com",
      password:"abc@123",
      address:"Gujarat",
      isAdmin:true,
    },
    {
      name:"anshu singh",
      email:"anshusingh@gmail.com",
      password:"def@123",
      address:"Bihar",
      isAdmin:false,
    },
  ]