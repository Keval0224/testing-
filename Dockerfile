FROM node:20-alpine
WORKDIR /app

# Saari files copy karo
COPY . .

# Port open karo
EXPOSE 3000

# Bina kisi installation ke sedhe static website serve karo 
CMD ["npx", "serve", "JavaScript", "-l", "3000"]
