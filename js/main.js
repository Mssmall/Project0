
let gameBoard = [

  ['1', '2', '3'],
  ['4', '5', '6'],
  ['7', '8', '9']
];
//hello
let playerTurn = true;

const checkWin = function () {
  if ('X' === gameBoard[0][0] && 'X' === gameBoard[0][1] && 'X' === gameBoard[0][2]) {
    $('.message').html("Congratulations player01")};
  if ('O' === gameBoard[0][0] && 'O' === gameBoard[0][1] && 'O' === gameBoard[0][2]) {
    $('.message').html("Congratulations player02")};
  if ('X' === gameBoard[1][0] && 'X' === gameBoard[1][1] && 'X' === gameBoard[1][2]) {
    $('.message').html("Congratulations player01")};
  if ('O' === gameBoard[1][0] && 'O' === gameBoard[1][1] && 'X' === gameBoard[1][2]) {
    $('.message').html("Congratulations player02")};
  if ('X' === gameBoard[2][0] && 'X' === gameBoard[2][1] && 'X' === gameBoard[2][2]) {
    $('.message').html("Congratulations player01")};
  if ('O' === gameBoard[2][0] && 'O' === gameBoard[2][1] && 'O' === gameBoard[2][2]) {
    $('.message').html("Congratulations player02")};
  if ('X' === gameBoard[0][0] && 'X' === gameBoard[1][0] && 'X' === gameBoard[2][0]) {
    $('.message').html("Congratulations player01")};
  if ('O' === gameBoard[0][0] && 'O' === gameBoard[1][0] && 'O' === gameBoard[2][0]) {
    $('.message').html("Congratulations player02")};
  if ('X' === gameBoard[0][1] && 'X' === gameBoard[1][1] && 'X' === gameBoard[2][1]) {
    $('.message').html("Congratulations player01")};
  if ('O' === gameBoard[0][1] && 'O' === gameBoard[1][1] && 'O' === gameBoard[2][1]) {
    $('.message').html("Congratulations player02")};
  if ('X' === gameBoard[0][2] && 'X' === gameBoard[1][2] && 'X' === gameBoard[2][2]) {
    $('.message').html("Congratulations player01")};
  if ('O' === gameBoard[0][2] && 'O' === gameBoard[1][2] && 'O' === gameBoard[2][2]) {
    $('.message').html("Congratulations player02")};
  if ('X' === gameBoard[0][0] && 'X' === gameBoard[1][1] && 'X' === gameBoard[2][2]) {
    $('.message').html("Congratulations player01")};
  if ('O' === gameBoard[0][0] && 'O' === gameBoard[1][1] && 'O' === gameBoard[2][2]) {
    $('.message').html("Congratulations player02")};
  if ('X' === gameBoard[2][0] && 'X' === gameBoard[1][1] && 'X' === gameBoard[0][2]) {
    $('.message').html("Congratulations player01")};
  if ('O' === gameBoard[2][0] && 'O' === gameBoard[1][1] && 'O' === gameBoard[0][2]) {
    $('.message').html("Congratulations player02")};
};

let player01 = function (row, index, square) {
  // console.log(playerTurn);
  if (playerTurn === true) {
    //player selects square to place marker, inputting a row # and index #
    //checks whether selected square is already taken by a marker
    if (gameBoard[row][index] === 'X' || gameBoard[row][index] === 'O') {
      alert('That square is already taken. Move on.')
      return;
    };
    //marker is assigned to gameBoard array dependent on row and index input
    gameBoard[row][index] = 'X';
    let markerOne = gameBoard[row][index];
    //marker is put on specific square dependent on row and index input

    $(square).text(markerOne);
    $(square).css('background-color', '#e6f7ff')
    // console.log( gameBoard[row][index] ); //later change to jquery, clicking
    playerTurn = false;
    // console.log(playerTurn);
    checkWin();
  } else {
    alert("Player 1, hold your horses. It's not your turn")
  }
  // console.log(gameBoard);
};

let player02 = function (row, index, square) {
  if (playerTurn === false) {
    if (gameBoard[row][index] === 'X' || gameBoard[row][index] === 'O') {
      alert('That square is already taken. Move on.')
      return;
    };
    gameBoard[row][index] = 'O';
    let markerTwo = gameBoard[row][index];
    $(square).text(markerTwo);
    $(square).css('background-color', '#b3ffb3')
    // console.log( gameBoard[row][index] );
    checkWin();
    playerTurn = true;
  } else {
    alert("Player 2, hold your horses. It's not your turn")
  }
};

// Event listeners
$(document).ready(function () {
  $('.square').on('click', function() {
    //to find the row and index that user has clicked on.
    const previousSquares = $(this).prevAll().length;
    const row = Math.floor( previousSquares / 3 );
    const index = previousSquares % 3;
    // console.log(previousSquares);
    // console.log( r, i );
    // debugger;
    // console.log(playerTurn);
    if (playerTurn === true) {
      player01(row, index, this);
    } else {
      player02(row, index, this);
    };

  });
  });
  // $('.square').on('click', function() {
  //   const previousSquares = $(this).prevAll().length;
  //   const r = Math.floor( previousSquares / 3 );
  //   const i = previousSquares % 3;
  //   // console.log( r, i );
  //   player02(r, i, this);
  // } );


  // const checkDuplicate = function (row, index) {
  //   // console.log(row, index);
  //   // console.log(gameBoard[row][index] === 'X');
  //   // console.log(gameBoard[row][index] === 'O');
  //   // console.log(gameBoard[row][index] === 'O');
  //   if (gameBoard[row][index] === 'X' || gameBoard[row][index] === 'O') {
  //     alert('That square is already taken')
  //   };
  // };
