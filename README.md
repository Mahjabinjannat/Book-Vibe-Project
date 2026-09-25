# 📚 Book Vibe

A modern and responsive **book management and discovery web application** built with **Next.js, TypeScript, Tailwind CSS, and JSON Server**.

Book Vibe allows users to explore books, view detailed information about individual books, add books to their **Wishlist** or **Read Books** list, and manage their personal reading collection through a clean and responsive interface.

---

## ✨ Live Preview

🔗 **Live Website:** Coming Soon

🔗 **GitHub Repository:**  
https://github.com/Mahjabinjannat/Book-Vibe-Project

---

## 🚀 Features

### 📖 Browse Books

- View a collection of available books.
- Beautiful responsive book cards.
- Display book cover, title, author, category, tags, and rating.

### 📕 Book Details

- View complete information about a selected book.
- Book cover and detailed information displayed in a responsive two-column layout.
- Includes:
  - Book title
  - Author
  - Category
  - Review
  - Total pages
  - Publisher
  - Publishing year
  - Rating
  - Tags

### ❤️ Wishlist

- Add books to your personal Wishlist.
- Wishlist data is managed using React Context API.

### 📚 Read Books

- Add books to your Read Books list.
- View books that have been marked as read.

### 🔄 Shared State

- Uses **React Context API** to share Wishlist and Read Books data across different pages and components.

### 📱 Responsive Design

- Fully responsive interface.
- Optimized for:
  - 📱 Mobile
  - 💻 Tablet
  - 🖥️ Desktop

### 🎨 Modern UI

- Clean and minimal interface.
- Styled using Tailwind CSS.
- Responsive navigation bar.
- Interactive buttons and hover effects.

---

## 🛠️ Technologies Used

| Technology            | Purpose                                 |
| --------------------- | --------------------------------------- |
| **Next.js**           | React framework and application routing |
| **React**             | Building UI components                  |
| **TypeScript**        | Type-safe development                   |
| **Tailwind CSS**      | Styling and responsive design           |
| **JSON Server**       | Local REST API                          |
| **React Context API** | Global state management                 |
| **Next/Image**        | Optimized image rendering               |
| **Next/Link**         | Client-side navigation                  |
| **Git & GitHub**      | Version control                         |

---

## 📂 Project Structure

```text
book-vibe-project/
│
├── public/
│   └── ...
│
├── src/
│   │
│   ├── app/
│   │   ├── books/
│   │   │   ├
│   │   │   └── [id]/
│   │   │       ├── page.tsx
│   │   │       └── BookActions.tsx
│ 
│   │   ├── listed-books/
│   │   │   └── page.tsx
│   │   │
│   │   ├── read-books/
│   │   │   └── page.tsx
│   │   │
│   │   ├── page.tsx
│   │   ├── layout.tsx
│   │   └── globals.css
│   │
│   ├── component/
│   │   ├── buttons/
│   │   │   ├── ReadList.tsx
│   │   │   └── WishList.tsx
│
│   │   ├── homePage/
│   │   │   ├── Books.tsx
│   │   │   └── Hero.tsx
│   │   │
│   │   └── shared/
│   │       ├── BookCard.tsx
│   │       └── Navbar.tsx
│   │
│   └── context/
│       └── BooksContext.tsx│
│
│   └── types/
│       └── BookType.ts
│
├── db.json
├── package.json
├── next.config.ts
├── tsconfig.json
├── postcss.config.mjs
└── README.md
```
