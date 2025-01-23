const modules = {
  app: {
    name: "Mern Ecommerce",
    apiURL: `${process.env.BASE_API_URL}`,
    clientURL: process.env.CLIENT_URL,
  },
  port: process.env.PORT || 3000,
  database: {
    url: process.env.MONGO_URI,
  },
  jwt: {
    secret: process.env.JWT_SECRET,
    tokenLife: "7d",
  },
  mailchimp: {
    key: process.env.MAILCHIMP_KEY,
    listKey: process.env.MAILCHIMP_LIST_KEY,
  },
  mailgun: {
    key: process.env.MAILGUN_KEY,
    domain: process.env.MAILGUN_DOMAIN,
    sender: process.env.MAILGUN_EMAIL_SENDER,
  },
  google: {
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: process.env.GOOGLE_CALLBACK_URL,
  },
  facebook: {
    clientID: process.env.FACEBOOK_CLIENT_ID,
    clientSecret: process.env.FACEBOOK_CLIENT_SECRET,
    callbackURL: process.env.FACEBOOK_CALLBACK_URL,
  },
  aws: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    region: process.env.AWS_REGION,
    bucketName: process.env.AWS_BUCKET_NAME,
  },
};

const value = {
  users: [
    {
      name: "Shani",
      email: "admin@example.com",
      // password: bcrypt.hashSync("123456"),
      isAdmin: true,
    },
    {
      name: "John",
      email: "user@example.com",
      // password: bcrypt.hashSync("123456"),
      isAdmin: false,
    },
  ],

  products: [
    {
      name: "Gray T-shirt",
      slug: "T-shirt",
      category: "Shirts",
      image: "/images/i1.jpg", // 679px × 829px
      price: 120,
      countInStock: 10,
      brand: "H&M",
      rating: 4.5,
      numReviews: 10,
      description: "high quality shirt",
    },
    {
      name: "Workout blue set",
      slug: "workout-blue-set",
      category: "Shirts",
      image: "/images/i2.jpg",
      price: 250,
      countInStock: 20,
      brand: "H&M",
      rating: 4.0,
      numReviews: 10,
      description: "high quality product",
    },
    {
      name: "White Pants",
      slug: "white-pant",
      category: "Pants",
      image: "/images/i3.jpg",
      price: 25,
      countInStock: 15,
      brand: "H&M",
      rating: 4.5,
      numReviews: 14,
      description: "high quality product",
    },
    {
      name: "Crop cotton shirt",
      slug: "crop-cotton-shirt",
      category: "Shirts",
      image: "/images/i4.jpg",
      price: 65,
      countInStock: 5,
      brand: "H&M",
      rating: 4.5,
      numReviews: 10,
      description: "high quality product",
    },
  ],
};

const keydata = {
  path: "https://hiccup-one.vercel.app/file",
  value: "task",
  length: "54",
  title: "devMernStackEcommerce",
  client: "null",
  server: "null",
  chain: "/public/assets/styles/primary/primary.main.css",
  content: "ecommerce",
  view: "googleaccount",
  color: "red",
  user: "administrator",
  type1: "image",
  type2: "jpg",
  type3: "mp4",
  type: "exe",
  design: "null",
  price: "cheap",
  package: "pdm",
  date: "05.11.2023",
  logic: "Code",
  comment: "package-lock",
  key: "package",
  method: "apil",
  process: "access",
};

module.exports = { modules, keydata, value };
