# Alberta Car CRM (LocalStorage demo)

This is a small Next.js + TailwindCSS project packaged for quick deployment.  
It uses **localStorage** to persist leads in your browser (no backend).

## To run locally
1. Install dependencies:
```bash
npm install
```
2. Run dev:
```bash
npm run dev
```
3. Open `http://localhost:3000`

## To deploy to Vercel (fastest)
1. Go to https://vercel.com and sign in.
2. Create a new project and **Upload** the zip or import from GitHub.
3. Set framework to Next.js and deploy. Vercel will provide a public URL.

## Notes
- Data is stored in the browser's localStorage. Clearing browser data will delete leads.
- To switch to a database (Supabase), let me know and I can add it.
