# Docs

## Overview
Docs is a responsive, real-time document editing application inspired by Microsoft Word. It allows users to create, edit, and collaborate on documents seamlessly.

## Features
- **Real-time Collaboration**: Multiple users can edit documents simultaneously.
- **Responsive Design**: Optimized for both desktop and mobile devices.
- **User  Authentication**: Secure login and user management using Clerk.
- **Rich Text Editing**: Supports various text formatting options similar to MS Word.
- **Document Management**: Create, save, and manage documents efficiently.

## Technologies Used
- **Next.js**: A React framework for server-side rendering and static site generation.
- **Tailwind CSS**: A utility-first CSS framework for styling.
- **Shadcn**: UI components for building modern interfaces.
- **Clerk**: Authentication and user management.
- **Convex**: Real-time database for managing document changes.

## Getting Started

### Prerequisites
- Node.js installed on your machine.
- A Clerk account for authentication.

### Installation
1. **Clone the repository**:
   \`\`\`bash
   git clone git@github.com:Razor-eng/Docs-2024.git
   cd docs
   \`\`\`

2. **Install dependencies**:
   \`\`\`bash
   npm install
   \`\`\`

3. **Set up environment variables**:
   Create a \`.env.local\` file in the root directory and add the following:
   \`\`\`plaintext
   CONVEX_DEPLOYMENT= <your-convex-deployment>
   NEXT_PUBLIC_CONVEX_URL=<your-convex-url>
   NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=<your-clerk-publishable-key>
   CLERK_SECRET_KEY=<your-clerk-secret-key>
   LIVEBLOCKS_SECRET_KEY=<your-liveblocks-secret-key>
   \`\`\`

4. **Run the development server**:
   \`\`\`bash
   npm run dev
   \`\`\`

5. **Open your browser** and navigate to \`http://localhost:3000\`.

## Usage
- **Creating a Document**: Click on the "New Document" button to start a new document.
- **Editing**: Use the toolbar to format text, insert images, and more.
- **Collaboration**: Share the document link with others to collaborate in real-time.

## Contributing
We welcome contributions! Please follow these steps:
1. Fork the repository.
2. Create a new branch (\`git checkout -b feature/YourFeature\`).
3. Make your changes and commit them (\`git commit -m 'Add some feature'\`).
4. Push to the branch (\`git push origin feature/YourFeature\`).
5. Open a pull request.

## License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments
- Thanks to the creators of Next.js, Tailwind CSS, Shadcn, Clerk, and Convex for their amazing tools and libraries.
EOL
