// $(function() {
//   $table.bootstrapTable({
//     columns: [
//       {
//         field: 'id',
//         title: 'Номер'
//       },
//       {
//         field: 'apartmente',
//         title: 'Квартира'
//       },
//       {
//         field: 'rooms',
//         title: 'Кімнат'
//       },
//       {
//         field: 'area',
//         title: 'Площа'
//       },
//       {
//         field: 'price',
//         title: 'Ціна'
//       }
//     ]
//   })
// };

function detailFormatter(index, row) {

  var row = ({
      Title: row.id,
      Apartmente: row.apartmente,
      Rooms: row.rooms,
      Area: row.area,
      Price: row.price
  })

  var html = []
  $.each(row, function (key, value) {
    html.push('<span class="col"><b>' + key + ':</b> ' + value + '</span>')
  })
  return html.join('')
}
function priceSorter(a, b) {
  var aa = a.replace('$', '')
  var bb = b.replace('$', '')
  return aa - bb
}
