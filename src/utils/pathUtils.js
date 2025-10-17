// Utility function to handle base path for GitHub Pages deployment
export const getAssetPath = (path) => {
  // Remove leading slash if present
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  
  // Add base path for production
  if (process.env.NODE_ENV === 'production') {
    return `/zeeautotryes-website/${cleanPath}`;
  }
  
  return `/${cleanPath}`;
};
