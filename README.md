# ms-telegram

> It provides a communication interface with a user or group of the telegram.

#### :warning: This project uses the Adonisjs Framework, so make the necessary installations

## Endpoints

#### register/

```bash
$ curl --request POST \
  --url http://127.0.0.1:3333/register \
  --header 'content-type: application/json' \
  --data '{
	"username" : "John Doe",
	"password" : "password"
}'
```

> get the token

### auth/

```bash
$ curl --request POST \
  --url http://127.0.0.1:3333/auth \
  --header 'content-type: application/json' \
  --data '{
	"username" : "John Doe",
	"password" : "password"
}'
```

> > return:
> > {
> > "type": "bearer",
> > "token": "token", "refreshToken": null
> > }

> send message

### telegram/

```bash
$ curl --request POST \
  --url http://127.0.0.1:3333/telegram \
  --header 'authorization: Bearer token' \
  --header 'content-type: application/json' \
  --data '{
	"message" : "Hello World"
}'
```

> > return :
> > { "data": { "message": "Hello World"}}

### mail

>send emails 

```bash 
curl -X POST \
  http://127.0.0.1:3333/mail \
  -H 'Authorization: Bearer token \
  -H 'Cache-Control: no-cache' \
  -H 'Content-Type: application/json' \
  -H 'Postman-Token: 53237989-4089-4fd8-a183-037c8ed71b2b' \
  -d '
{
"emails" : ["jondoe@gmail.com"],
"message" : "Hello World",
"from" : "Jon Doe <jondoe@mail.com",
"subject" : "subject"
}'

```
