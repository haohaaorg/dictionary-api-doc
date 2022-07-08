# Get Request 

## Exact Match

Exact Match ၼႆႉတႄႉပေႃးႁႃ တူဝ်လႆတူဝ်ၼၼ်ႉ API ၶိုၼ်းတေသူင်ႇမႃးၶိုၼ်းတူဝ်ၼၼ်ႉတူဝ်လဵဝ်ၵူၺ်း 
မိူၼ်ၼင်ႇဝႃႈ ႁဝ်းႁႃတူဝ် `ၵႃလမ်` ၼႆမၼ်းတေႁႃပၼ် `ၵႃလမ်` တူဝ်လဵဝ်ၵူၺ်းၶႃႈ

#### Parameters
- filter[word]
- token

#### Request

```

https://api.shanlang.org/api/collections/entries/shn2eng?filter[word]=ၵႃလမ်&token=<api_token>

```

#### Response

<details><summary>Response Data</summary>

```
{
  "fields": {
    "word": {
      "name": "word",
      "type": "text",
      "localize": false,
      "options": [
        
      ]
    },
    "type": {
      "name": "type",
      "type": "text",
      "localize": false,
      "options": [
        
      ]
    },
    "defination": {
      "name": "defination",
      "type": "text",
      "localize": false,
      "options": [
        
      ]
    }
  },
  "entries": [
    {
      "word": "ၵႃလမ်",
      "type": "Noun",
      "defination": "crow",
      "_by": "d691499c3039374ecd0002f2",
      "_mby": "d691499c3039374ecd0002f2",
      "_modified": 1657090701,
      "_created": 1657090701,
      "_id": "3706c19a376438ce6e000073"
    }
  ],
  "total": 1
}
```

</details>


## Full Text Search

Full Text Search ၼႆႉမိူၼ်ၼင်ႇ user ပေႃႉမႃး `ၵႃ` ၼႆမၼ်းတေႁႃတူဝ်ဢၼ်ပႃး `ၵႃ` ၼၼ်ႉၵႂႃႇတၢင်းမူတ်း မိူၼ်ၼင်ႇ 
`ၵႃလမ်` , `ၵႃႈ` , `ၵႃး` , `တၢင်းၵႃႈ` ၸိူဝ်းၼႆႉၶႃႈ 


::: danger
လၢႆးၼႆႉဢမ်ႇပေႃးပၼ်ႁႅင်းၶႃႈ ၵွပ်ႈယွၼ်ႉမၼ်းၵိၼ် server resource ႁဝ်းၼမ်ၼႃႇလႄႈ ပေႃးပဵၼ်လႆႈႁႃတၢင်းပဵၼ်တူဝ်မႅၼ်ႈမႅၼ်ႈ [Exact Match](#exact-match) မိူၼ်တၢင်းၼိူဝ်ၼၼ်ႉတႄႉတေလီၶႃႈ 
:::

::: tip
ပေႃးၸိူင်ႉၼၼ်တေလႆႈႁဵတ်းႁိုဝ်ႁႃ full text search ၼၼ်ႉလႃႇၼႆႇလူတ်ႇလူင်း [words.json](words.json) ၼႆႉသေ ႁဵၼ်းမိူၼ်ၼင်ႇ autocomplete တီႈ client side ၼၼ်ႉယဝ်ႉၸင်ယိုဝ်းမႃး API တႄႉတေလီၶႃႈ ၼၼ်ႉၼႆ server resource api ႁဝ်းမၼ်းတေဢမ်ႇပေႃးၵိၼ်ၼမ်ၶႃႈ
:::

#### Parameters

- filter[word][$regex]
- token

#### Request

```

https://api.shanlang.org/api/collections/entries/shn2eng?filter[word][$regex]=ၵႃ&token=<api_token>

```

#### Response

<details>
<summary>Respone Data</summary>

```
{
  "fields": {
    "word": {
      "name": "word",
      "type": "text",
      "localize": false,
      "options": [
        
      ]
    },
    "type": {
      "name": "type",
      "type": "text",
      "localize": false,
      "options": [
        
      ]
    },
    "defination": {
      "name": "defination",
      "type": "text",
      "localize": false,
      "options": [
        
      ]
    }
  },
  "entries": [
    {
      "word": "ၵႃ",
      "type": "Noun",
      "defination": "crow",
      "_by": "d691499c3039374ecd0002f2",
      "_mby": "d691499c3039374ecd0002f2",
      "_modified": 1657090701,
      "_created": 1657090701,
      "_id": "3706c199303835b7c800012d"
    },
    {
      "word": "ၵႃလမ်",
      "type": "Noun",
      "defination": "crow",
      "_by": "d691499c3039374ecd0002f2",
      "_mby": "d691499c3039374ecd0002f2",
      "_modified": 1657090701,
      "_created": 1657090701,
      "_id": "3706c19a376438ce6e000073"
    },
    {
      "word": "ၵႃၵႄ",
      "type": "Noun",
      "defination": "pigeon",
      "_by": "d691499c3039374ecd0002f2",
      "_mby": "d691499c3039374ecd0002f2",
      "_modified": 1657090701,
      "_created": 1657090701,
      "_id": "3706c19c303766ce640000df"
    },
    {...}
  ],
  "total": 10
}
```

</details>




