class GoldItem {
  constructor(
    id,
    name,
    weight,
    price,
    category,
    thumbNail,
    images,
    optionalText
  ) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.category = category;
    this.thumbNail = thumbNail;
    this.images = images;
    this.weight = weight;
    this.optionalText = optionalText;
  }
}

export default GoldItem;
