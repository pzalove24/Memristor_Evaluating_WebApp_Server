# Memristor_Evaluating_WebApp

Setup Client

1. npx create-next-app@latest
2. npm install @mui/material @emotion/react @emotion/styled
3. npm install @mui/icons-material
4. https://github.com/mui/material-ui/tree/master/examples/material-ui-nextjs-ts
5. https://www.youtube.com/watch?v=ooy92nDRHzU
6. https://github.com/dieudonneAwa/blog-dashboard/tree/main
7. next js dashboard sidebar
8. prisma https://www.youtube.com/watch?v=NgayZAuTgwM
9. Web Worker https://loclv.hashnode.dev/a-simple-web-worker-demo-with-typescript-and-nextjs

Setup Server

1. Express Typescript following https://www.youtube.com/watch?v=i8xHOrPP3NA

- npm init -y
- npm install express
- npm install --save-dev typescript @types/express @types/morgan
- npm install --save-dev nodemon
- npm i cors dotenv helmet morgan
- npx tsc --init
- tsconfig.json uncomment outDir and set to "outDir": "./dist"
- npx tsc
- add script in package.json
  - "dev": "start /b tsc -w & nodemon dist/app.js" //Window10
  - "dev": "tsc -w & nodemon dist/app.js", //Non-Window10

2. Morgan to collect request log, for example, แนะนำ Morgan - ให้การเก็บ Request Log ใน NodeJS เป็นเรื่องง่าย BorntoDevCreators

Database Design

1. https://astera1.medium.com/all-you-need-to-know-about-database-design-1586d2a1c403

Mathematic Optimization

1. Web Workers: Move the heavy computational task (multiplication loop) into a separate JavaScript thread using Web Workers. Web Workers allow you to run code in the background without blocking the main UI thread, ensuring that your app remains responsive.
2. Chunk the Computation: Instead of running all 100,000 iterations in a single loop, break it into smaller chunks, and process them sequentially or in parallel using Web Workers. This prevents the UI from freezing during the computation.
3. Use Memoization: If you're performing the same calculations multiple times, consider memoization to cache results and avoid redundant computations.
4. Virtualization: If you're rendering the results of the computation in your React app, use virtualization techniques (e.g., React Virtualized or react-window) to efficiently render large lists without affecting performance.
5. Profiling and Optimization Tools: Use performance profiling tools like the Chrome DevTools Performance tab to identify bottlenecks in your app. Optimize the code where you find performance issues.
6. Code Splitting: Implement code splitting to load only the necessary JavaScript code when it's needed. Tools like Webpack's dynamic imports can help with this.
7. Avoid Re-renders: Ensure that your React components re-render only when necessary. Use React.memo, shouldComponentUpdate, or hooks like useMemo and useCallback to prevent unnecessary re-renders.
8. Optimize Loops: If possible, optimize the loop itself. For example, consider using mathematical properties like distributive and associative laws to reduce the number of multiplications required.
9. Lazy Loading: If you have components that are not needed immediately, use lazy loading (with React.lazy) to load them only when required.
10. Profiling and Testing: Continuously profile and test your app's performance as you make optimizations. This helps you measure the impact of changes accurately.
11. Use Performance Libraries: Consider using performance-oriented libraries for specific tasks, such as math.js for mathematical computations.
12. Minimize Re-renders: Ensure that your React components re-render only when necessary. Use React's PureComponent, shouldComponentUpdate, or React.memo for functional components to control when re-renders occur.
13. Code Splitting: Implement code splitting to load only the necessary JavaScript code when it's needed. Tools like Webpack's dynamic imports can help with this.
14. Reduce Dependencies: Keep your project dependencies up to date and remove any unused or unnecessary packages to minimize the bundle size.
15. Browser Caching: Leverage browser caching mechanisms for static assets, such as images and CSS, to reduce load times.
16. Compress Assets: Compress and minify your assets (JavaScript, CSS, and images) to reduce the size of the files that need to be loaded.

Remember that optimizing performance often involves trade-offs, so carefully evaluate which optimizations are most beneficial for your specific use case. Profiling and benchmarking your app can help you identify where performance improvements are needed most.
