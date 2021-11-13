# 👀 Como foi resolvido o problema

A solução do problema foi feita através de um objeto que utiliza números romanos correspondentes a grupos de unidade, dezena, centena e milhar. Que em um looping, o número informado é dividido e analisado caractere por caractere junto com seu tamanho para fazer a busca no grupo numérico correto, retornando o valor em romano corretamente.

O valor máximo aceito pelo conversor éK '3999'.
Foram implementados 9 testes, de valores que abrangem uma grande margem de valores aceitos.

# 🚀 Como usar

Para rodar os testes, é necessário [Node.js](https://nodejs.org) instalado no seu ambiente. 

Para o uso do conversor, é necessário utilizar as linhas abaixo e testar utilizando o [Insomnia](https://insomnia.rest) na rota [localhost:3000/convert](http://localhost:3000/convert).

O método é do tipo `POST`, recebendo um body simples como mostrado abaixo: 
```JSON
{
    "number": 100
}
```

O valor passado deve ser numérico de valor 1 a 3999.

# ✔ Instalação

Para instalação é simples. Basta digitar os seguintes comando na pasta raiz do projeto no seu terminal:
## Instalando as dependencias
```
$ npm install
```

## Rodando a aplicação
```
$ npm run dev
```

## Usando testes
```
$ npm run test
```

## Autor

👤 **Gabriel Fritz**

- Linkedin: [@gffritz](https://www.linkedin.com/in/gffritz/)
- Github: [@gffritz](https://github.com/GFFritz)

## 📝 Licença

Copyright © 2021 [@gffritz](https://github.com/GFFritz).<br />
Esse Projeto possui licença MIT.
