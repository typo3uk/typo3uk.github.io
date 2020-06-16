
function propertyFormatter(value, row, index) {
  // return [row.property, row.rooms, row.area].join(', ')
  return 'Продається ' + row.property + ', кімнат: ' + row.rooms + ', площа: ' + row.area + ' продавець<a href="javascript:void(0)">...</a>';
}

function detailFormatter(index, row) {
  var html = []
  const title = {
    'id': 'ID',
    'property': 'Власність',
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
