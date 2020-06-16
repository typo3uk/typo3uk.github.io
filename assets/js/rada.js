$(function() {
  $('#table').bootstrapTable({
    columns: [{
      field: 'property',
      formatter: function (value, row) {
        return [row.property, row.rooms, row.area].join('+')
      }
    }]
  })
})

function propertyFormatter(value, row) {
  return [row.rooms, row.area].join('+')
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
