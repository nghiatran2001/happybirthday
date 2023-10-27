var to = "THÙY DUNG";
var gift_url =
  "https://scontent.fsgn2-8.fna.fbcdn.net/v/t39.30808-6/363386163_3500518656827800_7675756323884075315_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=5f2048&_nc_ohc=O7ytv8wJDv0AX-Fs9wE&_nc_ht=scontent.fsgn2-8.fna&oh=00_AfAv1ilqsCda7ugbmB6lMeboWaZZpM81_YRZ2qoz0pHqhw&oe=653FB686";
var gift_image_url =
  "https://scontent.fsgn2-3.fna.fbcdn.net/v/t39.30808-6/335083772_3432023673736836_7140485257170215443_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=5f2048&_nc_ohc=INcHhYdNKoYAX-F-6EZ&_nc_ht=scontent.fsgn2-3.fna&oh=00_AfA3pJHJI-onOh9KuIsixIrZbq-QhTpwDcsovbhOQ8XpYg&oe=6540CE31";

var nametag = document.getElementById("nametag");
var present = document.getElementById("present");
var presentImage = document.getElementById("present-image");

function init() {
  var _giftLink, _giftImg;

  if (gift_url) {
    _giftLink = document.createElement("a");
    _giftLink.href = gift_url;
    _giftLink.target = "_blank";
    presentImage.appendChild(_giftLink);
  }

  if (gift_image_url) {
    _giftImg = document.createElement("img");
    _giftImg.src = gift_image_url;
    if (_giftLink) {
      _giftLink.appendChild(_giftImg);
    } else {
      presentImage.appendChild(_giftImg);
    }
  }

  present.addEventListener(
    "click",
    function (e) {
      present.classList.toggle("open");
      document.getElementById("card").classList.add("card-show");
    },
    false
  );

  nametag.innerText = to;
}

init();
