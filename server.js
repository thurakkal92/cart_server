const express = require('express')
const bodyParser = require('body-parser')
const app = express();
const PORT = process.env.PORT || 3000
const data =  {
  "items": [
    {
      "id": 1,
      "name": "Samsung Series 4",
      "image": "https://rukminim1.flixcart.com/image/670/600/allinone-desktop/d/n/q/apple-imac-21-5-inch-4k-retina-core-i5-3-1ghz-8gb-1tb-intel-iris-original-imaeh5h83fuzbksz.jpeg?q=90",
      "price": {
        "actual": 13999,
        "display": 22500
      },
      "discount": 37
    },
    {
      "id": 2,
      "name": "Samsung Super 6",
      "image": "https://rukminim1.flixcart.com/image/670/600/allinone-desktop/d/n/q/apple-imac-21-5-inch-4k-retina-core-i5-3-1ghz-8gb-1tb-intel-iris-original-imaeh5h83fuzbksz.jpeg?q=90",
      "price": {
        "actual": 35999,
        "display": 66900
      },
      "discount": 46
    },
    {
      "id": 3,
      "name": "Samsung The Frame",
      "image": "https://rukminim1.flixcart.com/image/670/600/allinone-desktop/d/n/q/apple-imac-21-5-inch-4k-retina-core-i5-3-1ghz-8gb-1tb-intel-iris-original-imaeh5h83fuzbksz.jpeg?q=90",
      "price": {
        "actual": 84999,
        "display": 133900
      },
      "discount": 36
    },
    {
      "id": 4,
      "name": "Thomson B9 Pro",
      "image": "https://rukminim1.flixcart.com/image/670/600/allinone-desktop/d/n/q/apple-imac-21-5-inch-4k-retina-core-i5-3-1ghz-8gb-1tb-intel-iris-original-imaeh5h83fuzbksz.jpeg?q=90",
      "price": {
        "actual": 9999,
        "display": 16999
      },
      "discount": 41
    },
    {
      "id": 5,
      "name": "LG Ultra HD",
      "image": "https://rukminim1.flixcart.com/image/670/600/allinone-desktop/d/n/q/apple-imac-21-5-inch-4k-retina-core-i5-3-1ghz-8gb-1tb-intel-iris-original-imaeh5h83fuzbksz.jpeg?q=90",
      "price": {
        "actual": 39990,
        "display": 79990
      },
      "discount": 50
    },
    {
      "id": 6,
      "name": "Vu Ready LED TV",
      "image": "https://rukminim1.flixcart.com/image/670/600/allinone-desktop/d/n/q/apple-imac-21-5-inch-4k-retina-core-i5-3-1ghz-8gb-1tb-intel-iris-original-imaeh5h83fuzbksz.jpeg?q=90",
      "price": {
        "actual": 7999,
        "display": 17e3
      },
      "discount": 52
    },
    {
      "id": 7,
      "name": "Koryo Android TV",
      "image": "https://rukminim1.flixcart.com/image/670/600/allinone-desktop/d/n/q/apple-imac-21-5-inch-4k-retina-core-i5-3-1ghz-8gb-1tb-intel-iris-original-imaeh5h83fuzbksz.jpeg?q=90",
      "price": {
        "actual": 55999,
        "display": 199990
      },
      "discount": 71
    },
    {
      "id": 8,
      "name": "Micromax LED Smart",
      "image": "https://rukminim1.flixcart.com/image/670/600/allinone-desktop/d/n/q/apple-imac-21-5-inch-4k-retina-core-i5-3-1ghz-8gb-1tb-intel-iris-original-imaeh5h83fuzbksz.jpeg?q=90",
      "price": {
        "actual": 9999,
        "display": 27990
      },
      "discount": 64
    }
  ]
}

var allowCrossDomain = function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');
  if ('OPTIONS' == req.method) {
    res.send(200);
  }
  else {
    next();
  }
};

app.use(allowCrossDomain)
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.get('/', function (req, res) { res.send('hello world') })
app.get('/cart', function (req, res) {
  res.send(data)
})

app.listen(PORT, () => {
  console.log("server started")
})



