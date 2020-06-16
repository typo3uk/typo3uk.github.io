function detailFormatter(index, row) {
  var row = ({
      "#": row.id,
      "Квартира": row.apartment,
      "Кімнат": row.rooms,
      "Площа": row.area,
      "Ціна": row.price,
      "Продавець": row.seller,
      "Телефон": row.phone
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
