# Template Esbuild Typescript

Ce template front utilise le bundler esbuild et typescript.

## Utilisation

Commande | Role
--- | --- 
`npm start` | Pour lancer le serveur de dev
`npm run build` | Pour build le projet dans le dossier dist

## Debugger

Ce template fonctionne avec le debugger de vscode, il faut cependant bien configurer url et webRoot
    
```
    {
    "version": "0.2.0",
    "configurations": [
        {
            "type": "pwa-chrome",
            "request": "launch",
            "name": "Launch Chrome against localhost",
            "url": "http://localhost:8000", /** adapt to your port number */
            "webRoot": "${workspaceFolder}/template-esbuild-jsdoc" /** <-- insert folder name  */
        }
    }
```

