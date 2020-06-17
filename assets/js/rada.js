
function propertyFormatter(value, row, index) {
  // return [row.property, row.rooms, row.area].join(', ')
  return 'Продається <span class="text-lowercase"><strong>' + row.property + '</strong></span>, кімнат <strong>' + row.rooms + '</strong>, площа <strong>' + row.area + '</strong>, <a href="javascript:void(0)">продавець...</a>';
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
    html.push('<span class="col-4"><b>' + title[key] + ':</b> ' + value + '</span>')
  })
  return '<span class="row">' + html.join('')' + '</span>'
}
function priceSorter(a, b) {
  var aa = a.replace('$', '')
  var bb = b.replace('$', '')
  return aa - bb
}
