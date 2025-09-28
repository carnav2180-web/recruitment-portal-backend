# Recruitment Portal - Backend (starter)

This is a ready-to-upload backend starter for the recruitment portal.
It uses Node.js + Express + Sequelize (Postgres).

## Quick non-tech upload instructions

1. Create a GitHub repository named `recruitment-portal-backend`.
2. Upload the files from this `backend/` folder to that repository (use 'Add file' → 'Upload files' on GitHub).
3. In Render (render.com), create a new Web Service and connect the GitHub repo.
   - Build Command: `npm install && npm run sync`
   - Start Command: `npm start`
4. In Render, set Environment Variables (Settings → Environment):
   - DATABASE_URL (from Supabase/Neon)
   - JWT_SECRET (pick a secret string)
   - EMAIL_USER, EMAIL_PASS (from Brevo/SendGrid)
   - CLOUDINARY_URL (from Cloudinary)
5. Deploy. Render will build and start the server.
6. After deploy, you can run the database sync manually (Render shell) or ensure `npm run sync` runs during build.

If you want, I can also create the frontend ZIP and help you upload it to GitHub.
