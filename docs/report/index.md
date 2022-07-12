# Report Data Issues

ဢၼ်ၼႆပဵၼ် API တႃႇထႅမ်လႆႈ ၶေႃႈမုၼ်းဢၼ်ၽိတ်းပိူင်ႈၸိူဝ်းၼၼ်ႉၶႃႈ

## Table of contents
- [Post Request](#post-request.md)


-----

### Post Request


#### Summary
ပေႃးယိုင်း post request ၶဝ်ႈမႃးယဝ်ႉ status မၼ်းတေမႃးပဵၼ် `draft` ဝႆႉတီႈၼႆႉ sever ႁဝ်းၶႃႈ developer ၶဝ်သမ်ႉတေၸႅတ်ႈတူၺ်းသေ၊ တေၶိုၼ်းမေးပၼ်၊ ယဝ်ႉတေၶၢႆႉပၼ် status မၼ်း `published/approved` ၶႃႈ။ ယဝ်ႉၼၼ်ႉၸွင်ႇမၼ်းတေၶဝ်ႈမႃးၼႂ်း dictionary ႁဝ်းၶႃႈ။


Route တႃႇတေလႆႈသူင်ႇ request

```

// Only Server 1
https://api.shandictionary.com/api/collections/save/reports

```

<details>
<summary>
Request example
</summary>

```
    fetch('https://api.shandictionary.com/api/collections/save/reports?token=<token>', {
        method: 'post',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            data: {
              word:'ၸၢမ်း',
              type:'Verb',
              defination:'Test',
              ipa:'tɛst',
              dictionary:'shn2eng'
          }
        })
    })
    .then(collection => collection.json())
    .then(collection => console.log(collection));
```

</details>



| name       | type   | required | available values                                                        | description                                                                                         |
|------------|--------|----------|-------------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------|
| word       | string | true     | -                                                                       | တူဝ်/ၶေႃႈ                                                                                            |
| type       | string | no-type  | Noun,Verb,Adverb,Adjective,Pronoun,Preposition,Conjunction,Interjection | part of speeches မိူၼ်ၼင်ႇ Noun,Verb,Adverb,Adjective,Pronoun,Preposition,Conjunction,Interjection    |
| defination | string | -        | -                                                                       | လွင်ႈသပ်းလႅင်း defination မၼ်း                                                                      |
| ipa        | string | -        | -                                                                       | [International Phonetic Alphabet](https://en.wikipedia.org/wiki/International_Phonetic_Alphabet)    |
| dictionary | string | -        | shn2eng,eng2shn,shn2myanmar,shn2shn                                     | ယၢမ်းလဵဝ်တႄႉ dictionary ႁဝ်းမီႊဝႆႉ 4 မဵဝ်းၶႃႈ၊ တေလႆႈလိူၵ်ႈပၼ် dictionary ဢၼ်လႂ်ၼၼ်ႉမီးလွင်ႈၽိတ်းဝႆႉၼႆၶႃႈ |