# Cloudinary Image Upload Examples in Next.js

This repository contains examples of how to upload images to Cloudinary in a Next.js application. The examples are based on the [Cloudinary documentation](https://cloudinary.com/documentation/upload_images) and the [Next.js documentation](https://nextjs.org/docs). The examples are written in TypeScript and it shows how you can upload images to Cloudinary using `API Route` handlers.

## Technologies

- Next.js
- TypeScript
- Cloudinary
- Tailwind CSS
- Database: PostgreSQL
- Migrations: Ley

## Features

- Upload image to Cloudinary using `API Route`
- Create user profile with image using `API Route`
- Display the uploaded image in the client
- Display the user profile with image in the client

## Getting Started

### Clone the repository

```bash
git clone https://github.com/Eprince-hub/cloudinary-image-upload-example.git
```

### Change the directory

```bash
cd cloudinary-image-upload-example
```

### Install the dependencies

```bash
pnpm install
```

### Create a `.env` file in the root directory

```bash
touch .env
```

### Add the following environment variables to the `.env` file: reference the `.env.example` file

```bash
PGHOST=localhost
PGDATABASE=your_database_name
PGUSERNAME=your_database_username
PGPASSWORD=your_database_password
CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_api_secret
```

### Run the migrations

```bash
pnpm migrate up
```

### Start the development server

```bash
pnpm dev
```

### Open your browser and visit `http://localhost:3000`

### UI

#### Single image upload

<img width="1339" alt="Screenshot 2024-07-15 at 11 39 30" src="https://github.com/user-attachments/assets/e33a6100-860a-476b-bc26-47c74500b5c1">

### User profile with image

<img width="1339" alt="Screenshot 2024-07-15 at 11 40 05" src="https://github.com/user-attachments/assets/706e22b7-afc7-4680-af4c-3a431fac9181">

### Error handling

<img width="815" alt="Screenshot 2024-07-15 at 11 41 46" src="https://github.com/user-attachments/assets/789ce75c-d1bd-4cc0-9fa7-b54e662efd6c">

### Resources

- [Cloudinary](https://cloudinary.com/documentation/upload_images)
- [Next.js](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [PostgreSQL](https://www.postgresql.org/docs/)
- [TypeScript](https://www.typescriptlang.org/docs/)
- [Ley](https://github.com/lukeed/ley)
- [Node.js](https://nodejs.org/en/docs/)
- [React](https://react.dev/)
- [Vercel](https://vercel.com/docs)
- [pnpm](https://pnpm.io/)

## License

This project is open source and available under the [MIT License](LICENSE).
