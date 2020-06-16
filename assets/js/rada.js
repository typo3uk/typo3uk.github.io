
function propertyFormatter(value, row, index) {
  // return [row.property, row.rooms, row.area].join(', ')
  return 'Продається' + row.property + ', Кімнат:' + row.rooms + ', Площа:' + row.rooms;
}

function detailFormatter(index, row) {
  var html = []
  const title = {
    'id': 'ID',
    'property': 'Квартира',
    'rooms': 'Кімнат',
    "area": "Площа",
    'price': 'Ціна',
    'seller': 'Продавець',
    'phone': 'Телефон'
  }
  $.each(row, function (key, value) {
    html.push('<span class="col"><b>' + title[key] + ':</b> ' + value + '</span>')
  })
  return html.join('')
}
function priceSorter(a, b) {
  var aa = a.replace('$', '')
  var bb = b.replace('$', '')
  return aa - bb
}
