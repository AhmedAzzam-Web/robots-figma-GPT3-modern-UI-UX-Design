# pull the image from docker hub
FROM node:22-alpine3.20

# Run the app as a normal user not root for security purposes
RUN addgroup app && adduser -S -G app app

# switch to user app to create the folder but later you need to switch again to give user permission
USER app

WORKDIR /app

COPY package*.json /app/

# switch to root and give permissions
USER root

# set ownership to user app
RUN chown -R app:app /app

# install dependencies in packages before copying files to take advantage of docker caching
# later when it copies files, it won't reinstall dependencies
RUN npm install

# copy files
COPY . /app/

# expose port 3000 to tell Docker that the container listens on the specified network ports at runtime
EXPOSE 3000

# command npm start becuase we are using create-react-app in package.json
# command to serve the app for production environment
CMD ["serve", "-s", "build"]
