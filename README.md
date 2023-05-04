This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.


## Supabase

npx supabase init

npx supabase login

npx supabase projects list / create

Copy id and ( require DB password )

npx supabase link --project-ref <ID given by npx supabase projects list> --dns-resolver https

npx supabase migration new <my_migration>

npx supabase dumb / push / commit

npx supabase db push

https://supabase.com/docs/guides/database/api/generating-types

npx supabase gen types typescript --project-id "PROJECT_ID" --schema public > src/supabase.ts



```` sql


INSERT INTO users (
	firstname,
	phone,
	point,
	lastname,
	country_code,
	job_title,
	description_profil,
	working_place,
	main_picture_url) 
VALUES 
	('firstname', '+33642561130', ST_MakePoint(2.3522, 48.8566), 'lastname', 'FR', 'job', 'deeaeazelaelapelapleapzelaple', 'google', 'https://cdn.discordapp.com/attachments/1102026209472286781/1102629973371654185/bsqkt_i_want_a_background_using_gradiant_color_and_abstract_sha_d3f18145-4c33-44b8-8369-309996477eb7.png' );
COMMIT;


SELECT *
FROM nearby_users(48.8566, 2.3522, 9000) AS result(
  id INTEGER,
  point TEXT,
  phone TEXT,
  created_at TIMESTAMP,
  firstname TEXT,
  lastname TEXT,
  country_code TEXT,
  job_title TEXT,
  description_profil TEXT,
  working_place TEXT,
  main_picture_url TEXT,
  dist_meters FLOAT
);


````