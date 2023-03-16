1. Install Docker
2. Build docker image first

```
docker build -t dobry-ksiegowy .
```

3. Run docker container

```
sh ./run.sh

or

docker run -it -v `pwd`:/web -v ./web/node_modules --name dobry-ksiegowy -p 4000:4000 --rm dobry-ksiegowy
```
