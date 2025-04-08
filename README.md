# Blog Project Documentation
## Project Overview
This is a RESTful API backend service for a blog system built with TypeScript, Express.js, and MongoDB.

## Tech Stack
- Runtime: Node.js
- Language: TypeScript
- Framework: Express.js
- Database: MongoDB
- Validation: Zod
- Logging: Morgan
- Authentication: JWT
## Project Structure
```plaintext
src/
├── api/
│   ├── Config/
│   │   └── Config.ts         # Configuration settings
│   └── v1/
│       ├── Controllers/      # Request handlers
│       ├── Interfaces/       # TypeScript interfaces
│       ├── Models/          # MongoDB models
│       ├── Router/          # Route definitions
│       ├── Services/        # Business logic
│       └── Validations/     # Request validation schemas
 ```
```

## API Endpoints
### Posts
- POST /api/v1/posts/create - Create a new post
- PUT /api/v1/posts/update/:id - Update an existing post
- GET /api/v1/posts/getOne/:id - Get a single post
- GET /api/v1/posts/getAll - Get all posts
- DELETE /api/v1/posts/delete/:id - Delete a post
- GET /api/v1/posts/filter - Filter posts
## Data Models
### Post Model
```typescript
interface IPost {
  title: string;
  content: string;
  category: string;
  tags?: string[];
  createAt: Date;
  updateAt: Date;
}
 ```

## Error Handling
The project implements a custom `APIError` class for consistent error handling across the application.

## Configuration
- Environment variables are managed through .env file
- Port configuration defaults to 3000 if not specified
- MongoDB connection string is required via environment variable MONGO_URI
## Logging
- Uses Morgan for HTTP request logging
- Logs are stored in a .log file
- Only logs errors (status codes >= 400)
- Logs include:
  - HTTP method
  - URL
  - Status code
  - Response time
  - Timestamp
  - Remote IP
  - User agent
## Development
### Prerequisites
- Node.js
- MongoDB instance
- TypeScript
### Installation
```bash
npm install
 ```

### Running the Application
Development mode:

```bash
npm run dev
 ```

TypeScript compilation watch mode:

```bash
npm run tsc
 ```

Production mode:

```bash
npm start
 ```

## Security Features
- Input validation using Zod
- JWT authentication support
- Error handling middleware
- CORS enabled
## Git Configuration
The following files and directories are ignored in version control:

- .env - Environment variables
- *.log - Log files
- node_modules/ - Dependencies
