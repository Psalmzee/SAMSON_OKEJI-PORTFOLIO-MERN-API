# Talent-Plus-Backend
### Postman link: `https://www.getpostman.com/collections/b8647f4e49e7da7d2ce8`

<!-- Project Shields -->
<div align="left">
  

<div>
  <p align="left">
    <a href="https://github.com/Psalmzee/Talent-Plus-Backend/blob/main/README.md"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://www.getpostman.com/collections/b8647f4e49e7da7d2ce8">Postman Demo</a>
    ·
    <a href="https://github.com/Psalmzee/Talent-Plus-Backend/issues">Report Bug</a>
    ·
    <a href="https://github.com/Psalmzee/Talent-Plus-Backend/issues">Request Feature</a>
  </p>
</div>
# Talent-Plus

## Backend Microservice API

##### Tools/Languages

<div align="left">

- Javascript
- Node.js
- Express.js
- MongoDB

</div>

---


## Development

### Prerequisites

- [Node.js](https://nodejs.org/en/download/)
- [MongoDB](https://www.mongodb.com/docs/manual/installation/)

#### Clone this repo

```sh
git clone https://github.com/Psalmzee/Talent-Plus-Backend.git
```

#### Install project dependencies

```sh
npm install
```

#### Update .env with [example.env](https://github.com/Psalmzee/Talent-Plus-Backend/blob/main/example.env) in root directory

#### Run a development server

```sh

npm start
---

## Usage

### Base URL

- https://localhost:9002


### Create a Text

- Route: /api/texts
- Method: POST

:point_down: Body

```json
{
  "title": "TALENT PLUS"
}
```

:point_down: Response

```json
{
  
    "status": "success",
    "data": {
        "title": "TALENT PLUS",
        "_id": "63756f852b0bed768b968d45",
        "__v": 0
    }
}
```

---

### Get all Texts in db

- Route: /api/texts
- Method: GET

:point_down: Response

```json
{
    "status": "success",
    "data": [
        {
            "_id": "63756f852b0bed768b968d45",
            "title": "TALENT PLUS",
            "__v": 0
        }
    ]
}
```
---




### Delete Text

- Route: /api/texts/:TextId
- Method: DELETE


---

- Project Link: [Talent-Plus-API](https://github.com/Psalmzee/Talent-Plus-Backend)

---
## PROJECT OWNER
- NAME: Petra
- PROJECT: TALENT-PLUS