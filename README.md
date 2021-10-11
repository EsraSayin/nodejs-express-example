# NodeJS + Express and MongoDB Rest-API Example

## Requirements

Only having **Docker** or **Docker-Desktop** already installed in your OS.

* Installation guide -> ```https://docs.docker.com/```

## Instructions

After installing Docker on you Computer just execute the following commands on the project's main directory

* ```docker-compose build```

* ```docker-compose up``` or ```docker-compose up -d``` 

The usage of the Teacher, Student and Comment APIs is not restricted. Here follows some examples of entity creations:

* Example of **Teacher** generation

```
curl -X POST \
  http://localhost:8090/teachers \
  -H 'Content-Type: application/json' \
  -H 'cache-control: no-cache' \
  -d '{
	"name": "name",
	"surname": "surname",
	"idCardNumber": "123123123J",
	"birthDate": "1984-12-12"
}'
```

* Example of **Student** generation

```
curl -X POST \
  http://localhost:8090/student \
  -H 'Content-Type: application/json' \
  -H 'cache-control: no-cache' \
  -d '{
	"name": "name",
	"surname": "surname",
	"idCardNumber": "123123123J",
	"birthDate": "1984-12-12"
}'
```

* Example of **Comment** generation

```
curl -X POST \
  http://localhost:8090/student \
  -H 'Content-Type: application/json' \
  -H 'cache-control: no-cache' \
  -d '{
	"text": "123123123J",
	"date": "1984-12-12",
  "studentId": "128731as2556asde123"
}'
```

## Examples

More examples are contained inside the **example**folder. In order to use them, downloading **Insomnia** is required.

* https://insomnia.rest/download