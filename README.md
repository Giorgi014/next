# Next.js 14 App Directory Crash Course – Codevolution

This project is built by following the [Next.js 14 App Directory Crash Course](https://www.youtube.com/watch?v=ZjAqacIC_3c&list=PLC3y8-rFHvwjOKd6gdf4QtV1uYNiQnruI) by [Codevolution](https://www.youtube.com/@Codevolution).  
It demonstrates advanced features of Next.js 14, including the App Router, layouts, routing patterns, API routes, error boundaries, intercepting routes, and more.

---

## 📚 Tutorial Series

- **YouTube Playlist:** [Next.js 14 App Directory Crash Course](https://www.youtube.com/watch?v=ZjAqacIC_3c&list=PLC3y8-rFHvwjOKd6gdf4QtV1uYNiQnruI)
- **Channel:** [Codevolution](https://www.youtube.com/@Codevolution)

---

## 🚀 Getting Started

1. **Install dependencies:**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   # or
   bun install
   ```

2. **Run the development server:**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   # or
   bun dev
   ```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 🗂️ Project Structure

```
src/
  app/
    (auth)/                # Auth layouts, login, register, forgot-password
    about/                 # About page
    blog/                  # Blog with nested routes and loading UI
    comments/              # API routes for comments
    complex-dashboard/     # Parallel routes, intercepting routes, layouts
    dashboard/             # API route for dashboard
    docs/                  # Catch-all routes
    f1/, f2/, f3/, f4/     # Route groups, intercepting, parallel routes
    hello/                 # API route
    order-product/         # Dynamic route
    photo-feed/            # Modal routes, static assets
    products/              # Error boundaries, dynamic nested routes
    profile/               # API route for profile
    time/                  # API route
  components/              # Reusable UI components
  middleware.ts            # Middleware for authentication, logging, etc.
```

---

## ✨ Features Demonstrated

- **App Directory Routing**: File-based routing with nested layouts and templates
- **Dynamic & Catch-all Routes**: Flexible route patterns for complex apps
- **API Routes**: REST endpoints using the app directory
- **Error Boundaries & Loading UI**: Custom error and loading states per route
- **Route Interception & Parallel Routes**: Advanced navigation patterns
- **Layouts & Templates**: Shared UI and persistent layouts
- **Client & Server Components**: Mixing SSR and client-side interactivity
- **Middleware**: Authentication, logging, and more
- **Modular CSS & Tailwind CSS**: Scoped and utility-first styling

---

## 📦 Dependencies

- [Next.js 14](https://nextjs.org/)
- [React](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/) (if included in the tutorial)
- Other dependencies as per tutorial steps

---

## 📖 Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Codevolution YouTube Channel](https://www.youtube.com/@Codevolution)
- [YouTube Playlist](https://www.youtube.com/watch?v=ZjAqacIC_3c&list=PLC3y8-rFHvwjOKd6gdf4QtV1uYNiQnruI)

---

## 📝 License

This project is for educational purposes, based on the Codevolution tutorial series.

---





This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
