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

## Blog Management (Keystatic)

This project uses [Keystatic](https://keystatic.com/) as a headless CMS for managing blog content.

### Accessing the Admin UI
1. Ensure the development server is running (`npm run dev`).
2. Visit [http://localhost:3000/keystatic](http://localhost:3000/keystatic) (or the port your dev server is running on).

### Workflow
1. **Create/Edit Posts**: Use the visual editor to write your content.
   - **Images**: Drag and drop images directly into the editor.
   - **Custom Blocks**: Type `/` to insert custom components like the `TerminalBlock` for code snippets.
2. **Save Changes**: Clicking "Save" or "Create" will write the content to `content/posts/` (as `.mdoc` files) and images to `public/images/posts/` on your local filesystem.
3. **Commit & Push**: Since content is stored as files, you must commit the changes to git to publish them.
   ```bash
   git add content/posts public/images/posts
   git commit -m "Add new blog post"
   git push
   ```

## Writing Guide (Markdoc)

This blog uses [Markdoc](https://markdoc.dev/) for content. Below is a guide on the supported syntax and components.

### 1. Basic Formatting

- **Bold**: Use double asterisks: `**Bold Text**`
- **Italic**: Use underscores or asterisks: `_Italic_` or `*Italic*`
- **Bullet Points**: Use hyphens or asterisks:
  ```markdown
  - Item 1
  - Item 2
  ```
- **Ordered Lists**: Use numbers:
  ```markdown
  1. First item
  2. Second item
  ```

### 2. Table of Contents (TOC) Hierarchy

The Table of Contents is automatically generated based on the headings in your post.

- `## Heading 2`: Main section (appears at the top level of TOC).
- `### Heading 3`: Subsection (nested under the preceding H2 in TOC).
- `#### Heading 4`: Not included in TOC.

**Example:**
```markdown
## Introduction (TOC Level 1)
Some intro text...

### Background (TOC Level 2)
More details...

## Implementation (TOC Level 1)
How we built it...
```

### 3. Custom Components

You can insert custom React components using the Markdoc tag syntax `{% ComponentName prop="value" /%}`.

#### TerminalBlock
Displays a terminal window with a command and its output.

```markdoc
{% TerminalBlock
   command="npm run dev"
   output="> dev
> next dev

ready - started server on 0.0.0.0:3000, url: http://localhost:3000"
   title="terminal" 
/%}
```

#### WorkflowDiagram
Visualizes a workflow with a central LLM node and connected tools.

```markdoc
{% WorkflowDiagram
   tools=[
     { label: "Calendar", imageSrc: "/images/posts/calendar.png" },
     { label: "Weather App", imageSrc: "/weather.png" }
   ]
/%}
```
*Note: `imageSrc` should be a path to an image in the `public` folder.*

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
