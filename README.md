# Docs Generator

A modern, full-featured documentation generation and management platform built with Next.js, React, and Supabase. Quickly generate, organize, and publish professional documentation for any project with an intuitive admin interface and MDX support.

## 🚀 Features

### Documentation Management
- **MDX Support**: Write documentation in MDX format with full Markdown capabilities and component integration
- **Hierarchical Organization**: Create nested documentation structures with parent-child page relationships
- **Category Management**: Organize docs into categories with custom ordering
- **Draft & Publish System**: Save drafts and publish docs when ready

### Admin Dashboard
- **Comprehensive Dashboard**: Overview of total pages, categories, and recent activity
- **Page Management**: Create, edit, and delete documentation pages with a rich editor
- **Category Management**: Organize and reorder documentation categories
- **Bulk Operations**: Efficient tools for managing multiple pages and categories
- **Real-time Preview**: See MDX rendered in real-time as you write

### Public Documentation Site
- **Professional Docs**: Beautifully styled documentation pages with syntax highlighting
- **Sidebar Navigation**: Smart navigation with category-aware sidebar
- **Breadcrumb Navigation**: Easy navigation with breadcrumb trails
- **Table of Contents**: Auto-generated TOC for long documents
- **API Reference**: Dedicated section for API documentation
- **Changelog**: Track changes and updates to your documentation

### Authentication & Security
- **User Authentication**: Sign up, login, and password management via Supabase Auth
- **Email Verification**: Confirm email addresses during signup
- **Password Recovery**: Secure password reset functionality
- **Admin-only Access**: Protected admin dashboard and API endpoints

### Developer Features
- **API Routes**: REST API for programmatic access to documentation
- **Search Functionality**: Full-text search across documentation
- **File Upload**: Support for file uploads and attachments
- **MDX Rendering**: Advanced markdown with rehype plugins for slugs and auto-linking
- **TypeScript**: Full TypeScript support for type safety
- **Responsive Design**: Mobile-friendly UI with Tailwind CSS

## 🛠️ Tech Stack

### Frontend
- **Next.js 15**: React framework with App Router
- **React 19**: UI library
- **TypeScript**: Type-safe development
- **Tailwind CSS**: Utility-first CSS framework
- **Radix UI**: Unstyled, accessible component primitives
- **React Hook Form + Zod**: Form management and validation
- **next-mdx-remote**: MDX rendering in Next.js
- **Lucide React**: Beautiful icon library
- **Sonner**: Toast notifications
- **date-fns**: Date manipulation

### Backend & Database
- **Supabase**: Backend-as-a-Service (PostgreSQL + Auth + Storage)
- **Next.js API Routes**: Serverless API endpoints
- **PostgreSQL**: Database (via Supabase)

### Development Tools
- **ESLint**: Code linting
- **TypeScript**: Static type checking
- **Tailwind CSS**: CSS framework
- **PostCSS**: CSS processing

## 📋 Prerequisites

- Node.js >= 22.0.0
- npm or yarn package manager
- Supabase project (free tier available)

## 🔧 Installation & Setup Guide

Follow these detailed steps to get the Docs Generator up and running on your local machine.

### Step 0: Clone and Install Dependencies

```bash
git clone <repository-url>
cd docs-generator
npm install
```

### Step 1: Prepare Environment Variables

Copy the environment example file and rename it:

```bash
cp .env.example .env.local
```

Keep this file open as you'll need to fill it in the upcoming steps.

### Step 2: Create a Supabase Account

1. Go to [https://supabase.com](https://supabase.com)
2. Click **"Sign Up"** if you don't have an account
3. Create your account using email or GitHub/Google OAuth
4. Verify your email if required

### Step 3: Create a New Supabase Project

1. After logging in, click **"New Project"**
2. Fill in the project details:
   - **Name**: Give your project a name (e.g., "Docs Generator")
   - **Database Password**: Create a strong password
   - **Region**: Choose a region close to you
3. Click **"Create new project"**
4. Wait for the project to be initialized (usually 2-3 minutes)

### Step 4: Get Your API Keys

1. Once your project is ready, click the **"Connect"** button at the top of the page
2. You should see an **"API Keys"** tab in the modal
   - *If you don't see it, close this modal and refresh the page, then click Connect again*
3. Copy the following values:
   - **Project URL** (starts with `https://`)
   - **Anon Key** (anonymous public key)

### Step 5: Configure Environment Variables

1. Open your `.env.local` file
2. Paste the values you copied:

```env
NEXT_PUBLIC_SUPABASE_URL=<paste_your_project_url_here>
NEXT_PUBLIC_SUPABASE_ANON_KEY=<paste_your_anon_key_here>
```

3. Save the file

### Step 6: Set Up the Database

1. In your Supabase project dashboard, look for the **SQL Editor** in the left sidebar
2. Click **"SQL Editor"** to open it
3. Open [scripts/migrations/init.sql](scripts/migrations/init.sql) in your text editor
4. Copy the entire SQL content
5. In Supabase's SQL Editor, create a new query and paste the SQL content
6. Click the **"Run"** button (or press `Ctrl+Enter`) to execute the migration
7. Wait for the execution to complete - you should see success messages for all tables created

The migration creates:
- **categories** table: For organizing your documentation
- **doc_pages** table: For storing documentation pages with MDX content
- Database indexes for optimized querying

### Step 7: Create Your First User

1. In your Supabase project dashboard, click **"Authentication"** in the left sidebar
2. Click the **"Add user"** button or look for a user management section
3. Click **"Add user"** → **"Add user with password"**
4. Fill in the user details:
   - **Email**: Enter an email address (e.g., `admin@example.com`)
   - **Password**: Enter a strong password
5. Click **"Create user"**
6. Save your credentials somewhere safe - you'll need these to log in

### Step 8: Run the Development Server

Open your terminal and run:

```bash
npm run dev
```

You should see output like:
```
> next dev
  ▲ Next.js 15.x.x
  - Local:        http://localhost:3000
```

### Step 9: Log In and Explore

1. Open your browser and go to [http://localhost:3000](http://localhost:3000)
2. Click on **"Login"** or go directly to [http://localhost:3000/login](http://localhost:3000/login)
3. Enter the email and password you created in Step 7
4. Click **"Login"**
5. After successful login, you'll be redirected to the admin dashboard at [http://localhost:3000/admin](http://localhost:3000/admin)

### 🎉 You're All Set!

Now you can:
- **Create Categories**: Organize your documentation
- **Create Pages**: Write MDX documentation with live preview
- **Manage Content**: Edit, publish, or delete pages
- **View Docs**: Visit the public documentation site at [http://localhost:3000/docs](http://localhost:3000/docs)

## 📚 Project Structure

```
docs-generator/
├── app/                          # Next.js App Router
│   ├── (public)/                 # Public routes
│   │   ├── docs/                 # Documentation pages
│   │   ├── api-reference/        # API documentation
│   │   └── changelog/            # Changelog page
│   ├── admin/                    # Admin dashboard (protected)
│   │   ├── categories/           # Category management
│   │   ├── pages/                # Page management
│   │   └── page.tsx              # Dashboard
│   ├── auth/                     # Authentication routes
│   │   ├── login/
│   │   ├── sign-up/
│   │   └── forgot-password/
│   ├── api/                      # API endpoints
│   │   ├── pages/                # Page CRUD operations
│   │   ├── categories/           # Category CRUD operations
│   │   ├── search/               # Full-text search
│   │   ├── upload/               # File uploads
│   │   └── mdx-preview/          # MDX rendering preview
│   ├── layout.tsx                # Root layout
│   └── page.tsx                  # Home page
│
├── components/                   # React components
│   ├── admin/                    # Admin-specific components
│   │   ├── page-editor.tsx       # MDX editor with preview
│   │   ├── category-manager.tsx  # Category management UI
│   │   ├── page-list.tsx         # Page listing
│   │   └── category-actions.tsx  # Category actions
│   ├── docs/                     # Documentation components
│   │   ├── sidebar.tsx           # Doc navigation sidebar
│   │   ├── breadcrumb.tsx        # Breadcrumb navigation
│   │   ├── toc.tsx               # Table of contents
│   │   ├── mdx-components.tsx    # Custom MDX components
│   │   └── category-nav.tsx      # Category navigation
│   ├── layout/                   # Layout components
│   │   ├── header.tsx            # Site header
│   │   └── search-dialog.tsx     # Search interface
│   ├── auth/                     # Authentication forms
│   │   ├── login-form.tsx
│   │   ├── sign-up-form.tsx
│   │   └── forgot-password-form.tsx
│   └── ui/                       # Reusable UI components
│       ├── button.tsx
│       ├── card.tsx
│       ├── dialog.tsx
│       ├── input.tsx
│       └── ...more components
│
├── lib/                          # Utility functions
│   ├── mdx.ts                    # MDX serialization
│   ├── utils.ts                  # Helper utilities
│   └── supabase/
│       ├── server.ts             # Server-side Supabase client
│       ├── client.ts             # Client-side Supabase client
│       ├── admin.ts              # Admin operations
│       ├── public.ts             # Public queries
│       └── queries.ts            # Reusable queries
│
├── types/                        # TypeScript types
│   ├── index.ts                  # Type definitions
│   └── database.types.ts         # Generated database types
│
├── scripts/                      # Utility scripts
│   └── migrations/
│       └── init.sql              # Database migration
│
├── public/                       # Static assets
├── package.json                  # Dependencies
├── tsconfig.json                 # TypeScript config
├── tailwind.config.ts            # Tailwind CSS config
├── next.config.ts                # Next.js config
└── README.md                     # This file
```

## 🚀 Usage

### Creating Your First Documentation

1. **Sign Up**: Visit [http://localhost:3000/auth/sign-up](http://localhost:3000/auth/sign-up) and create an account
2. **Access Admin Dashboard**: Navigate to [http://localhost:3000/admin](http://localhost:3000/admin)
3. **Create a Category**: Click "New Category" and give it a name and slug
4. **Create a Page**: Click "New Page", fill in the title, slug, and MDX content
5. **Preview**: Use the preview tab to see your documentation in real-time
6. **Publish**: Change status to "Published" and save

### Writing MDX Content

The editor supports full MDX with:

```mdx
# Heading 1
## Heading 2

**Bold** and *italic* text

- Bullet list
- Another item

1. Numbered list
2. Another item

[Links](https://example.com)

\`\`\`javascript
// Code blocks with syntax highlighting
const greeting = "Hello, world!";
console.log(greeting);
\`\`\`

| Header 1 | Header 2 |
|----------|----------|
| Cell 1   | Cell 2   |
```

### API Routes

#### Get All Pages
```bash
GET /api/pages
```

#### Get Single Page
```bash
GET /api/pages/[id]
```

#### Create Page
```bash
POST /api/pages
Content-Type: application/json

{
  "title": "Getting Started",
  "slug": "getting-started",
  "content": "# Getting Started...",
  "status": "published",
  "category_id": "uuid",
  "order_index": 0
}
```

#### Update Page
```bash
PUT /api/pages/[id]
```

#### Delete Page
```bash
DELETE /api/pages/[id]
```

#### Get All Categories
```bash
GET /api/categories
```

#### Search Documentation
```bash
GET /api/search?q=query
```

## 🔐 Authentication Flow

1. **Sign Up**: User creates account with email and password
2. **Email Confirmation**: Confirmation email sent (if configured in Supabase)
3. **Login**: User logs in with credentials
4. **Session Management**: Sessions stored in cookies via Supabase SSR
5. **Protected Routes**: Admin routes require authentication
6. **Logout**: Clear session and redirect to home

## 📦 Available Scripts

```bash
# Development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run linter
npm run lint
```

## 🎨 Customization

### Branding
- Modify site title and description in [app/layout.tsx](app/layout.tsx)
- Update colors in [tailwind.config.ts](tailwind.config.ts)
- Replace logo and icons with your own

### Styling
- Global styles in [app/globals.css](app/globals.css)
- Component styles use Tailwind CSS classes
- Dark mode support via `next-themes`

### MDX Components
- Customize MDX rendering in [components/docs/mdx-components.tsx](components/docs/mdx-components.tsx)
- Add custom components for your documentation

## 🐛 Troubleshooting

### Issue: "Unauthorized" on admin pages
**Solution**: Make sure you're logged in and the user is authenticated. Check Supabase auth settings.

### Issue: Pages not showing up
**Solution**: Ensure pages have status "published". Drafts only show in the admin panel.

### Issue: Database migration fails
**Solution**: Check that your Supabase SQL editor is connected and you have proper permissions. Verify the database.types.ts matches your schema.

### Issue: Styling looks broken
**Solution**: Clear Next.js cache: `rm -rf .next` and restart the dev server.

## 🚀 Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Go to [Vercel](https://vercel.com)
3. Create a new project and import your repository
4. Add environment variables:
   - `NEXT_PUBLIC_SUPABASE_URL`
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY`
5. Deploy!

### Deploy to Other Platforms

This is a standard Next.js application and can be deployed to:
- AWS Amplify
- Netlify
- Railway
- Render
- Your own VPS

For production builds:
```bash
npm run build
npm start
```

## 📝 Key Features Explained

### MDX Rendering
- Uses `next-mdx-remote` for safe, server-side MDX rendering
- Supports `remark` and `rehype` plugins
- Auto-generates heading anchors and table of contents
- Syntax highlighting via `react-syntax-highlighter`

### Search
- Full-text search across all published documentation
- Searches page titles, descriptions, and content
- Returns results with context snippets

### Categories & Hierarchy
- Organize pages into flat categories
- Support for nested pages (parent-child relationships)
- Custom ordering for categories and pages
- Smart sidebar navigation based on structure

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is open source and available under the MIT License.

## 🆘 Support

For issues and questions:
1. Check the Troubleshooting section above
2. Review [Supabase documentation](https://supabase.com/docs)
3. Check [Next.js documentation](https://nextjs.org/docs)
4. Open an issue on the repository

## 📚 Additional Resources

- [Supabase Docs](https://supabase.com/docs)
- [Next.js Documentation](https://nextjs.org/docs)
- [React Documentation](https://react.dev)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [MDX Documentation](https://mdxjs.com/)
- [Radix UI](https://www.radix-ui.com/)

---

**Built with ❤️ for developers who want to create beautiful documentation quickly.**
