[Home](/) / Shn to English API

------
# Shan To English API

## Table of contents
- [Summary](#summary)
- Rest API
    - [Get Request](get.md)
    - [Post Request](post.md)
- [GraphQL](graphql.md)

------

## Summary

API server ႁဝ်းတေမီးသွင်တီႈ 

- server 1 - `https://api.shandictionary.com` 
- server 2 - `https://api.shanlang.org`

ႁဝ်းၶႃႈၽေဝႆႉ API server မၼ်းသွင်ဢၼ်ၼႆႉ ၵွပ်ႈယွၼ်ႉဝႃႈပေႃး server ဢၼ်ၼိုင်ႈတူၵ်းၵႂႃႇ ဢၼ်ၵိုတ်းမၼ်းထႅင်ႈၼိုင်ႈဢၼ်ၼၼ်ႉ ႁႂ်ႈမၼ်းႁဵတ်းၵၢၼ်ဝႆႉၶႃႈ။ ယဝ်ႉၵေႃႈပေႃး traffic ၵူၼ်းၸႂ်ႉမၼ်းၼမ်မႃး ႁႂ်ႈ server မၼ်းဢမ်ႇတူၵ်းၵႂႃႇၶႃႈ။

::: tip မၢႆတွင်း
ပေႃးတေၸၼ် API ၼႆႉၶႅၼ်းတေႃႈယွၼ်းဢဝ် API Key မၼ်းတီႈ hello@haohaa.com ဢွၼ်တၢင်းၶႃႈ!
:::

::: danger ၾၢင်ႉ
- 1 minute ၼႆႉ တေပၼ်ယိုဝ်း/ႁွင်ႉ API request မၼ်း 100 ၵမ်းၵူၺ်းၶႃႈ 
> ပေႃးလိူဝ်ၼၼ်ႉၶႃႈၶဝ်တေပိၵ်ႉဝႆႉတၢင်း rate limit error ၵွပ်ႈၵူဝ် server မၼ်းတူၵ်းပႅတ်ႈလႄႈၶႃႈ
- ပေႃးၸၼ်ဢဝ် data မၼ်းတေပၼ်ၼိုင်ႈၵမ်း 10 ဢၼ် (10 results per call) ၵူၺ်းၶႃႈ 
> ဢၼ်ၼႆႉၶႅၼ်းတေႃႈပွင်ႇၸႂ်ပၼ် ၵွပ်ႈယွၼ်ႉၵူဝ်ပိူၼ်ႈမႃး scrape ဢဝ်ၵႂႃႇ dictionary data ႁဝ်းတၢင်းမူတ်း
:::



