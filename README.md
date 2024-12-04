# startup-community-next15

A platform to submit and showcase new projects to a vibrant community of startups and emerging ideas

## nextjs also provides

- Parallel Routes
- Intercepting Routes
- Internationalized Routes
- Dynamic Routes
- Grouping Routes

### **SSG: Static Site Generation.** (Pages are generated at build time from the server, doesn't change on each request)

- `getStaticProps` and `getStaticPaths` are used to generate static pages at build time.
- `getStaticProps` is used to fetch data at build time.
- `getStaticPaths` is used to generate dynamic routes based on data.

### **SSR: Server Side Rendering.** (Similar to ISR, but pages are generated on each request dinamically)

- `getServerSideProps` is used to fetch data on each request.

### **ISR: Incremental Static Regeneration.** (Pages are generated at build time from the server, but can be regenerated on each request using revalidate)

- `revalidate` is used to regenerate static pages on each request.
- `revalidate` is used to set the time in seconds after which a page is regenerated.

### **API Routes.**

- `pages/api` is used to create API routes.
- API routes are serverless functions that run server-side.

### **Partial Prerendering PPR (NEW FEATURE NEXTJS15).**

_it combines the best of both worlds, SSG (statis) and SSR (dynamic) rendering._

#### It means that you page will have some content prerendered at build time and some content prerendered at request time, and some content half static and half dynamic

---

**With this files nextjs will generate metadata.**

### @/app Images

| File convention | Supported file types |
| --------------- | -------------------- |
| opengraph-image | .jpg, .jpeg, .png, .gif |
| twitter-image   | .jpg, .jpeg, .png, .gif |
| opengraph-image.alt | .txt |
| twitter-image.alt | .text |

### @/app Dynamic Routes

| Route | URL | params |
| ----- | --- | ------ |
| app/shop/icon.js | /shop | undefined |
| app/shop/[slug]/icon.js | /shop/1 | { slug: '1'} |
| app/shop/[tag]/[item]/icon.js | /shop/1/2 | { tag: '1', item: '2' } |
