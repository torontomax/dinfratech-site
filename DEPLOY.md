# Dinfratech - Deploy rápido

## Opção 1: Cloudflare Pages
- Framework preset: Vite
- Build command: `npm run build`
- Build output directory: `dist`

## Opção 2: servidor com Nginx
1. Rode `npm install`
2. Rode `npm run build`
3. Publique o conteúdo da pasta `dist/`
4. Use uma configuração SPA, por exemplo:

```nginx
server {
    listen 80;
    server_name dinfratech.com.br www.dinfratech.com.br;

    root /var/www/dinfratech;
    index index.html;

    location / {
        try_files $uri $uri/ /index.html;
    }
}
```

## Observações
- O projeto usa `base: "/"` no Vite.
- O arquivo `public/_redirects` ajuda em hospedagens estáticas compatíveis.
- Os arquivos públicos foram centralizados em `public/`.
