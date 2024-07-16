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
- Display the uploaded image in the client

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

<img width="1284" alt="Screenshot 2024-07-15 at 12 19 03" src="https://github.com/user-attachments/assets/f2aca7fa-a70f-494f-b93a-087e18e33288">

### Error handling

<img width="792" alt="Screenshot 2024-07-15 at 12 16 39" src="https://github.com/user-attachments/assets/457e8fe9-38fc-4f35-b6f2-244b64585743">

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
