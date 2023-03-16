echo 'Starting application...'
docker run -it -v `pwd`:/web -v ./web/node_modules --name dobry-ksiegowy -p 4000:4000 --rm dobry-ksiegowy
