## React, Express, TypeScript Lerna Monorepo Boilerplate

React, Express, TypeScript를 Lerna로 구축한 모노레포하여 쉽게 시작할 수 있도록 제공합니다.

<br />

### 📂 폴더 구조

이 보일러플레이트는 다음과 같은 폴더 구조를 가집니다.

```
├── packages/
│   ├── client/
│   ├── server/
├── lerna.json
├── package.json
├── tsconfig.base.json
├── ...
```

- packages/client: React 클라이언트 애플리케이션
- packages/server: Express 서버 애플리케이션

<br />

### 📖 사용 방법

1. 프로젝트 클론
```shell
git clone https://github.com/chan9yu/react-express-typescript-lerna-boilerplate.git
```

2. 의존성 설치

```shell
# root 위치에서 시작합니다.
yarn install
```

3. 개발 서버 시작

```shell
# client와 server 패키지의 개발서버가 동시에 실행됩니다.
yarn dev
```

<br />

### ⚙️ 세팅 환경

#### client

- react: v18.2.0
- vite: v4.2.0

#### server

- express: v4.18.2

#### common

- lerna: v6.5.1
- typescript: v5.0.2

<br />

### 📌 참고

- 객체지향문법을 공부하기 위해 server 패키지는 OOP로 작성하였으며 싱글턴 패턴을 사용하고 있습니다.
- controller, service, router로 나누어 api를 작성할 수 있게 폴더구조를 작성하였습니다.

<br />

### ⚙️ setting

node -v

```
v18.12.1
```
