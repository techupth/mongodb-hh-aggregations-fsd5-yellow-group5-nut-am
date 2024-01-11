// Paste the complete MQL here
//หายอดขายทั้งหมดและจำนวนของ Pizza ในแต่ละ Size

//โดยที่ให้เรียงผลลัพธ์ตามยอดขายที่มากที่สุด

db.pizzaOrders.aggregate([
  {
    $group: { _id: "$size", totalPrice: { $sum: "$total_price" } },
  },
  {
    $sort: { totalPrice: -1 },
  },
]);
