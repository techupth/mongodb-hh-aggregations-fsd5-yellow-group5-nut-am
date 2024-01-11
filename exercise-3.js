// Paste the complete MQL here

//ให้แสดงผลแค่ข้อมูลยอดขายทั้งหมดและจำนวนของ Pizza ใน Size medium

db.pizzaOrders.aggregate([
    {
        $group:{_id:"$size", totalPrice: {$sum:"$total_price"}}
    },
      {
    $sort:{totalPrice: -1}
    },
      {
    $match:{_id:"medium"}
    }
    ])
