## Docker

project จะมี dockerfile อยู่ใน folder docker โดยจะแยกออกตาม env ใน sub folder

docker
 ┣ development
 ┃ ┣ Dockerfile
 ┃ ┗ Dockerfile.ref
 ┗ production
 ┃ ┣ Dockerfile
 ┃ ┗ Dockerfile.ref

ยกตัวอย่างเช่น 

1. development env จะอยู่ใน folder development
2. production env จะอยู่ใน folder production

ขึ้นอยู่กับว่า จะ build แบบ env ไหน

วิธีการ build docker สามารถทำได้ 2 แบบดังนี้

### How to build Docker image

Build โดยตรงจาก Dockerfile เช่น หากต้องการ build ให้อยู่ที่ root path แล้วชี้ไปที่ dockerfile ตาม path

1. -t คือการใส่ tag ให้กับ image

2. -f คือการชี้ไปที่ dockerfile

3. . คือ context ของ docker

4. {env-folder} คือ folder ของ env

```
docker build -t ai-learn-landing -f .\docker\{env-folder}\Dockerfile .
```

เช่น ต้องการ build แบบ development

```
docker build -t ai-learn-landing -f .\docker\development\Dockerfile .
```

เช่น ต้องการ build แบบ production

```
docker build -t ai-learn-landing -f .\docker\production\Dockerfile .
```

### How to run docker container from image

หลังจากที่ build docker image แล้ว จะทำการ run โดยคำสั่งต่อไปนี้

```
docker run -tid --name ai-learn-landing -p 80:3000 ai-learn-landing
```

**Explain**

-t : Allocates a pseudo-tty (terminal) for the container. This allows you to interact with the container's shell if needed.

-i : Keeps STDIN open even if not attached. This ensures that you can interact with the container's terminal even when it's detached.

-d : Detaches the container and runs it in the background, allowing you to continue using the current terminal session.

--name : container name

-p : host-port:container-port

-และอันสุดท้ายคือ docker image tag ในที่นี้จะอ้างอิง docker image ที่มี tag ว่า 'ai-learn-landing'

### How to run docker container with Docker compose

เราสามารถ run docker container ผ่าน docker compose ได้

เช่น ต้องการ run แบบ development env

```
docker compose -f .\docker-compose-dev.yaml up -d --build
```

เช่น ต้องการ run แบบ production env

```
docker compose -f .\docker-compose-prod.yaml up -d --build
```

**Explain**

```
-docker-compose: This is the Docker Compose command-line tool used to manage multi-container Docker applications.

-f .\docker-compose-dev.yaml: Specifies the path to the docker-compose YAML file, in this case, docker-compose-dev.yaml.
up: This command is used to create and start containers defined in the YAML file. If the containers are already running, it will attempt to recreate them.

-d or --detach: Runs containers in the background (detached mode), allowing you to continue using the terminal.

--build: This flag tells Docker Compose to build the images before starting the containers. It will rebuild the images even if they already exist, ensuring that you have the latest changes from your Dockerfiles or build contexts.

```

### Building and running your application

When you're ready, start your application by running:
`docker compose up --build`.

Your application will be available at http://localhost:3000.

### Deploying your application to the cloud

First, build your image, e.g.: `docker build -t myapp .`.
If your cloud uses a different CPU architecture than your development
machine (e.g., you are on a Mac M1 and your cloud provider is amd64),
you'll want to build the image for that platform, e.g.:
`docker build --platform=linux/amd64 -t myapp .`.

Then, push it to your registry, e.g. `docker push myregistry.com/myapp`.

Consult Docker's [getting started](https://docs.docker.com/go/get-started-sharing/)
docs for more detail on building and pushing.

### References
* [Docker's Node.js guide](https://docs.docker.com/language/nodejs/)