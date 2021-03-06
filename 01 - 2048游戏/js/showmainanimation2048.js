/**
 * Created by gaoyuan on 17-8-22.
 */
function showNumberAnimation(x, y, number) {
  var $numberCell = $('#number_cell_' + x + "_" + y);
  $numberCell.css({
    'background-color': getNumberBackgroundColor(number),
    'color': getNumberColor(number)
  });
  $numberCell.text(number);
  $numberCell.animate({
    width: '100px',
    height: '100px',
    top: getPosTop(x, y),
    left: getPosLeft(x, y)
  }, 50)
}

function showMoveAnimation(fromX, fromY, toX, toY) {
  var $numberCell = $('#number_cell_' + fromX + "_" + fromY);
  $numberCell.animate({
    left: getPosLeft(toX, toY),
    top: getPosTop(toX, toY)
  }, 200)
}