FROM node:latest

RUN mkdir app 
COPY image/update.js /app
COPY model/user.js /app
COPY .env /app



WORKDIR /app
RUN npm install dotenv
RUN npm install mongoose


ENTRYPOINT ["node", "update.js"]