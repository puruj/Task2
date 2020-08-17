/**
 This program will display 8 unique configurations of images and text and will keep going sshuffling the scenarios with new text and images.
 You can modify the images, text, font size, gradient on text, and location. 

 If given more time I would have liked to have it so that you could choose word wrap width and then have a function that would check if no chracters go out of bounds on viewport.
 If chracters do go out of bounds the program would display a error messgae to the programmer in the console. 
 */
//**************************************************************************************************************************************************************************************** */
//place directory location of desired images here
var img = ['Images/cardBack_blue5.png', 'Images/cardClubs2.png', 'Images/cardJoker.png', 'Images/cardBack_red2.png' , 'Images/cardSpadesA.png'];
//place desired text here
var text = ['Sample text with a lot of options and across multiple lines.', "Sample text with few multiple lines.", "Sample text", "Lorem Ipsum is simply dummy text of the printing and typesetting industry."];
//place desired font size here
var fontSize = [20,30,50];
//place desired gradeint on font here
var gradient = ['#ffa500', '#ff0000', '#c71585'];
//Location set like this to scale with screen size. However, can modify to get to your liking.
var loc1 = {x:window.innerWidth/6, y:window.innerHeight/3};
var loc2 = {x:(window.innerWidth/2) - 100, y:window.innerHeight/3};
var loc3 = {x:window.innerWidth - 500 , y:window.innerHeight/3};
//**************************************************************************************************************************************************************************************** */
var scenario = [];
scenario = [
  //iii
  {
    text1: '-1',
    text2: '-1',
    text3: '-1',
    fontS: fontSize[Math.floor(Math.random() * fontSize.length)],
    grad: gradient[Math.floor(Math.random() * gradient.length)],
    img1: img[Math.floor(Math.random() * img.length)],
    img2: img[Math.floor(Math.random() * img.length)],
    img3: img[Math.floor(Math.random() * img.length)],
    },
  //iti
  {
    text1: '-1',
    text2: text[Math.floor(Math.random() * text.length)],
    text3: '-1',
    fontS: fontSize[Math.floor(Math.random() * fontSize.length)],
    grad: gradient[Math.floor(Math.random() * gradient.length)],
    img1: img[Math.floor(Math.random() * img.length)],
    img2: -1,
    img3: img[Math.floor(Math.random() * img.length)],
    },
  //itt
  {
    text1: '-1',
    text2: text[Math.floor(Math.random() * text.length)],
    text3: text[Math.floor(Math.random() * text.length)],
    fontS: fontSize[Math.floor(Math.random() * fontSize.length)],
    grad: gradient[Math.floor(Math.random() * gradient.length)],
    img1: img[Math.floor(Math.random() * img.length)],
    img2: -1,
    img3: -1
    },
  //iit
  {
    text1: '-1',
    text2: '-1',
    text3: text[Math.floor(Math.random() * text.length)],
    fontS: fontSize[Math.floor(Math.random() * fontSize.length)],
    grad: gradient[Math.floor(Math.random() * gradient.length)],
    img1: img[Math.floor(Math.random() * img.length)],
    img2: img[Math.floor(Math.random() * img.length)],
    img3: -1
    },
  //ttt
  {
   text1: text[Math.floor(Math.random() * text.length)],
   text2: text[Math.floor(Math.random() * text.length)],
   text3: text[Math.floor(Math.random() * text.length)],
   fontS: fontSize[Math.floor(Math.random() * fontSize.length)],
   grad: gradient[Math.floor(Math.random() * gradient.length)],
  },
  //tit
  {
    text1: text[Math.floor(Math.random() * text.length)],
    text2: '-1',
    text3: text[Math.floor(Math.random() * text.length)],
    fontS: fontSize[Math.floor(Math.random() * fontSize.length)],
    grad: gradient[Math.floor(Math.random() * gradient.length)],
    img2: img[Math.floor(Math.random() * img.length)],
   },
  //tii
  {
    text1: text[Math.floor(Math.random() * text.length)],
    text2: '-1',
    text3: '-1',
    fontS: fontSize[Math.floor(Math.random() * fontSize.length)],
    grad: gradient[Math.floor(Math.random() * gradient.length)],
    img2: img[Math.floor(Math.random() * img.length)],
    img3: img[Math.floor(Math.random() * img.length)],
   },
  //tti
  {
    text1: text[Math.floor(Math.random() * text.length)],
    text2: text[Math.floor(Math.random() * text.length)],
    text3: '-1',
    fontS: fontSize[Math.floor(Math.random() * fontSize.length)],
    grad: gradient[Math.floor(Math.random() * gradient.length)],
    img3: img[Math.floor(Math.random() * img.length)],
   },
]
function shuffle(a) {
  for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}
shuffle(scenario);
