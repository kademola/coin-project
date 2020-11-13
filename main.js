let coin = {
  state: 0,
  flip: function () {
    this.state = Math.round(Math.random());
  },

  toString: function () {
    coin.flip();

    if (this.state === 1) {
      document.body.append("Head");
    } else {
      document.body.append("Tails");
    }
  },

  toHTML: function () {
    coin.flip();

    let image = document.createElement("img");

    if (this.state === 1) {
      image.src = "./images/heads.jpg";
      document.body.append(image);
    } else {
      image.src = "./images/tails.jpg";
      document.body.append(image);
    }
    return image;
  },
};

function display20Flips() {
  for (let x = 0; x < 20; x++) {
    coin.toString();
  }
}

display20Flips();

function display20Images() {
  for (let x = 0; x < 20; x++) {
    coin.toHTML();
  }
}

display20Images();
