# To compile you need to use this tsconfig.node.json:
```
{
  "compilerOptions": {
    "composite": true,
    "module": "ESNext",
    "moduleResolution": "Node",
    "allowSyntheticDefaultImports": true,
    "paths": {
      "@/*": ["./src/*"],
    }
  },
  "include": ["vite.config.ts"],
}
```

# To code the file needs to be like this:

```
{
  "compilerOptions": {
    "composite": true,
    "skipLibCheck": true,
    "module": "ESNext",
    "moduleResolution": "bundler",
    "allowSyntheticDefaultImports": true,
    "strict": true,
    "jsx": "react-jsx",
    "paths": {
      "@/*": ["./src/*"],
    }
  },
  "include": ["src/**/*.ts", "src/**/*.tsx", "vite.config.ts"],
}
```