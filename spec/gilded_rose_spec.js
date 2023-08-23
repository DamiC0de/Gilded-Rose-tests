const {Shop, Item} = require('../src/gilded_rose.js');

describe("Gilded Rose", function() {

  it("full test", () => {
    const items = [
      new Item("+5 Dexterity Vest", 10, 20),
      new Item("Aged Brie", 2, 0),
      new Item("Elixir of the Mongoose", 5, 7),
      new Item("Sulfuras, Hand of Ragnaros", 0, 80),
      new Item("Sulfuras, Hand of Ragnaros", -1, 80),
      new Item("Backstage passes to a TAFKAL80ETC concert", 15, 20),
      new Item("Backstage passes to a TAFKAL80ETC concert", 10, 49),
      new Item("Backstage passes to a TAFKAL80ETC concert", 5, 39),

      // This Conjured item does not work properly yet
      new Item("Conjured Mana Cake", 3, 6),
    ];

    const days = Number(process.argv[2]) || 2;;
    const gildedRose = new Shop(items);

    for (let day = 0; day < days; day++) {
      console.log(`\n-------- day ${day} --------`);
      console.log("name, sellIn, quality");
      items.forEach(item => console.log(`${item.name}, ${item.sellIn}, ${item.quality}`));
      gildedRose.updateQuality();
    }
  });
  
  it("Backstage Passes quality increase or decrease ", () => {
    const items = [
      new Item("Backstage passes to a TAFKAL80ETC concert", 15, 39),
      new Item("Backstage passes to a TAFKAL80ETC concert", 10, 20),
      new Item("Backstage passes to a TAFKAL80ETC concert", 2, 29),
      new Item("Backstage passes to a TAFKAL80ETC concert", 3, 49),
      new Item("Backstage passes to a TAFKAL80ETC concert", 5, 39),
      new Item("Backstage passes to a TAFKAL80ETC concert", 0, 39),
    ];
    const gildedRose = new Shop(items);
    gildedRose.updateQuality();
    console.log("////////"+"Backstage Passes quality increase or decrease"+" /////////////////////////")
    items.forEach(item => console.log(`days / quality ${item.sellIn}/ ${item.quality}`));
    expect(items[0].quality).toBe(40);
    expect(items[1].quality).toBe(22);
    expect(items[2].quality).toBe(32);
    expect(items[3].quality).toBe(50);
    expect(items[4].quality).toBe(42);
    expect(items[5].quality).toBe(0);
  });

  it("Normal items quality decrease + Sulfuras", () => {
    const items = [
      new Item("Legendary sword Of Roger", 100, 50),
      new Item("Brocken armor", 0, 20),
      new Item("random Bullshit", 10, 29),
      new Item("Dead body of a Goblin", 3, 49),
      new Item("Brocken knife", 1, 0),
      new Item("Sulfuras, Hand of Ragnaros", 1, 40),
      new Item("Sulfuras, Hand of Ragnaros", 0, 40),
    ];
    const gildedRose = new Shop(items);
    gildedRose.updateQuality();
    console.log("////////"+"Normal items quality  decrease"+" /////////////////////////////////////")
    items.forEach(item => console.log(`-${item.name}: ${item.sellIn} days, ${item.quality} Quality.`));
    expect(items[0].quality).toBe(49);
    expect(items[1].quality).toBe(18);
    expect(items[2].quality).toBe(28);
    expect(items[3].quality).toBe(48);
    expect(items[4].quality).toBe(0);
    expect(items[5].quality).toBe(40);
    expect(items[6].quality).toBe(40);
  });  

  it("Brie quality increase or decrease ", () => {
    const items = [
      new Item("Aged Brie", 2, 39),
      new Item("Aged Brie", 10, 20),
      new Item("Aged Brie", 0, 29),
      new Item("Aged Brie", 5, 50),
      new Item("Aged Brie", 0, 49),
    ];
    const gildedRose = new Shop(items);
    gildedRose.updateQuality();
    console.log("////////"+"Brie quality increase "+" /////////////////////////////////////")
    items.forEach(item => console.log(`days / quality ${item.sellIn}/ ${item.quality}`));
    expect(items[0].quality).toBe(40);
    expect(items[1].quality).toBe(21);
    expect(items[2].quality).toBe(31);
    expect(items[3].quality).toBe(50);
    expect(items[4].quality).toBe(50);
  });

});
