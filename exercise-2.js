// Paste the complete MQL here
// ให้เขียน Query โดยมีรายละเอียดดังนี้
// 1 ) หายอดขายทั้งหมดและจำนวนของ Pizza ในแต่ละ Size
// 2 ) โดยที่ให้เรียงผลลัพธ์ตามยอดขายที่มากที่สุด
db.pizzaOrders.aggregate([
  {
    $group: {
      _id: "$size",
      total_amount: { $sum: "$total_price" },
      total_quantity: { $sum: "$quantity" },
    },
  },
  {
    $sort: {
      total_amount: -1,
    },
  },
]);
