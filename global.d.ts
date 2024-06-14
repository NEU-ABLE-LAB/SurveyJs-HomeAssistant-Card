// This file is used to provide TypeScript declarations for CSS module imports
declare module "*.css" {
  const content: any; // Declares the content of CSS modules as 'any' type
  export default content; // Allows the CSS module to be imported and used in TypeScript files
}
