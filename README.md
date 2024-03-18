This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

-   [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
-   [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

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