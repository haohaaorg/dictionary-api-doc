[Home](/) / [Shan to English API](/shn-to-eng/index) / GraphQL

------

# GraphQL


<img src="/gql.png" alt="GraphQL" />

## Request

::: danger ၾၢင်ႉ

ပေႃးယိုဝ်း API မၼ်းတၢင်း token ၼၼ်ႉပေႃးပဵၼ်လႆႈယႃႇသႂ်ႇၼႂ်း URL မိူၼ်ၼင်ႇဝႃႈ 

`https://api.shandictionary.com/api/graphql/query?token=api_token_key_is_here`

ၸိူင်ႉၼႆၶႃႈ
ၶႅၼ်းတေႃႈ ယိုဝ်းတၢင်း request header ဢဝ်ၶႃႈ

e.g 

```
{
    header:{
        'Content-Type':'application/json',
        'Cockpit-Token':'api_token_key_is_here'
    }
}
```
:::

```
// Server 1 
https://api.shandictionary.com/api/graphql/query

// Server 2
https://api.shanlang.org/api/graphql/query
```

e.g Query 

```

{
  shn2engCollection(limit:1) {
  	word
  }
}

```

---------------

## Response

```
{
  "data": {
    "shn2engCollection": [
      {
        "word": "ၵ"
      }
    ]
  }
}
```