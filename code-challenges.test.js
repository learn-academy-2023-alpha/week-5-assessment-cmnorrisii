// ASSESSMENT 5: JavaScript Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// ********* TEST TEMPLATE ************
// describe("aFunction", () => {
//       it("description of what aFunction outputs with a given input", () => {
//         expect(aFunction()).toEqual("expected outcome")
//       })
//     })

// --------------------1) Create a function that takes in a string and returns a string with a coded message. The coded message converts "a" to 4, "e" to 3, "i" to 1, and "o" to 0.

// a) Create a test with expect statements using the variables provided.

describe("transcoder", () => {
  const secretCodeWord1 = "Lackadaisical";
  // Expected output: "L4ck4d41s1c4l"
  const secretCodeWord2 = "Gobbledygook";
  // Expected output: "G0bbl3dyg00k"
  const secretCodeWord3 = "Eccentric";
  // Expected output: "3cc3ntr1c"
  it("takes in a string and returns a string with a coded message. The coded message converts 'a' to 4, 'e' to 3, 'i' to 1, and 'o' to 0.", () => {
    expect(transcoder(secretCodeWord1)).toEqual("L4ck4d41s1c4l");
    expect(transcoder(secretCodeWord2)).toEqual("G0bbl3dyg00k");
    expect(transcoder(secretCodeWord3)).toEqual("3cc3ntr1c");
  });
});

// ReferenceError: transcoder is not defined

// b) Create the function that makes the test pass.

// pseudo: (Gene, if you're reading this, I'm sorry for this pseudo lol.)

// create a function named transcoder that take in a string as an argument
// within our function we are going to call on the .replaceAll() method for each letter we are wanting to replace using a regular expression (regex) for each letter. .replaceAll() is a built in method for JS that takes in a value that we want to replace, and a replacement for that value. This replacement can be a function or a string.
// since .replaceAll() can only take in one replacement, in order to replace all for values in our prompt, we would have to make an object within our function for our replacement to reference in order to replace all instances of the given values. This is a totally valid way to think about this problem.
// im not going to do that
// instead of creating an object, and passing a function into our .replaceAll(), i am just going to call on .replaceAll() for each value that i want to replace with one replacement per value.
// I know what you're thinking "CJ, are you really going to call on the same method 4 times in your function?" Yes I am, here's why; i think it will read better, and i think it will be just as performant as the creating an object technique. Specifically given in our prompt we are only replacing 4 values, this pushes me to do the solution the way that i am, given a more complex prompt could require a refactor here.
// So, each .replaceAll() will take a regex for each letter, and the replacement for that letter in a string. string.replaceAll(/a/gi, "4").replaceAll(/e/gi, "3").replaceAll(/i/gi, "1").replaceAll(/o/gi, "0")
// regex is object in JS that we can use to match text with a pattern the data within the "//" is the value we are wanting to replace. The 'g' after our /a/ is required when using regex with .replaceAll(, it indicates global, which means that we are looking at every possible instance of that pattern, not just the first. The 'i' indicates ignoreCase which will account for both upper and lower case instances of the pattern.
// return original string with these characters swapped: "a" to "4", "e" to "3", "i" to "1", and "o" to "0"
// this could be one line, but for readability we are going to have each .replaceAll() have its own line.

const transcoder = (string) => {
  return string
    .replaceAll(/a/gi, "4")
    .replaceAll(/e/gi, "3")
    .replaceAll(/i/gi, "1")
    .replaceAll(/o/gi, "0");
};

// Test Suites: 1 passed, 1 total
// Tests:       1 passed, 1 total

// just to prove that our function is performant, I included this use-case of a long lorem ipsum. Try it at home!

// console.log(
//   transcoder(
//     "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Pellentesque massa placerat duis ultricies. Id venenatis a condimentum vitae sapien pellentesque habitant. Ultrices vitae auctor eu augue ut lectus arcu bibendum at. Ipsum nunc aliquet bibendum enim facilisis gravida. Tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam sem et tortor consequat id porta nibh. Volutpat ac tincidunt vitae semper quis lectus nulla at. Dictum varius duis at consectetur lorem donec massa sapien. Dignissim suspendisse in est ante in nibh. Nunc pulvinar sapien et ligula ullamcorper malesuada proin. Curabitur vitae nunc sed velit dignissim sodales ut eu. Purus in massa tempor nec feugiat nisl pretium fusce id. Et egestas quis ipsum suspendisse ultrices. Mattis pellentesque id nibh tortor id aliquet lectus proin nibh. Augue eget arcu dictum varius duis at. Pretium aenean pharetra magna ac placerat. Laoreet non curabitur gravida arcu ac tortor dignissim convallis aenean. Rhoncus mattis rhoncus urna neque viverra justo nec ultrices dui. Turpis cursus in hac habitasse platea dictumst quisque sagittis purus."
//   )
// );

// ouput: "L0r3m 1psum d0l0r s1t 4m3t, c0ns3ct3tur 4d1p1sc1ng 3l1t, s3d d0 31usm0d t3mp0r 1nc1d1dunt ut l4b0r3 3t d0l0r3 m4gn4 4l1qu4. P3ll3nt3squ3 m4ss4 pl4c3r4t du1s ultr1c13s. 1d v3n3n4t1s 4 c0nd1m3ntum v1t43 s4p13n p3ll3nt3squ3 h4b1t4nt. Ultr1c3s v1t43 4uct0r 3u 4ugu3 ut l3ctus 4rcu b1b3ndum 4t. 1psum nunc 4l1qu3t b1b3ndum 3n1m f4c1l1s1s gr4v1d4. Tr1st1qu3 s3n3ctus 3t n3tus 3t m4l3su4d4 f4m3s 4c turp1s 3g3st4s. 4l1qu4m s3m 3t t0rt0r c0ns3qu4t 1d p0rt4 n1bh. V0lutp4t 4c t1nc1dunt v1t43 s3mp3r qu1s l3ctus null4 4t. D1ctum v4r1us du1s 4t c0ns3ct3tur l0r3m d0n3c m4ss4 s4p13n. D1gn1ss1m susp3nd1ss3 1n 3st 4nt3 1n n1bh. Nunc pulv1n4r s4p13n 3t l1gul4 ull4mc0rp3r m4l3su4d4 pr01n. Cur4b1tur v1t43 nunc s3d v3l1t d1gn1ss1m s0d4l3s ut 3u. Purus 1n m4ss4 t3mp0r n3c f3ug14t n1sl pr3t1um fusc3 1d. 3t 3g3st4s qu1s 1psum susp3nd1ss3 ultr1c3s. M4tt1s p3ll3nt3squ3 1d n1bh t0rt0r 1d 4l1qu3t l3ctus pr01n n1bh. 4ugu3 3g3t 4rcu d1ctum v4r1us du1s 4t. Pr3t1um 43n34n ph4r3tr4 m4gn4 4c pl4c3r4t. L40r33t n0n cur4b1tur gr4v1d4 4rcu 4c t0rt0r d1gn1ss1m c0nv4ll1s 43n34n. Rh0ncus m4tt1s rh0ncus urn4 n3qu3 v1v3rr4 just0 n3c ultr1c3s du1. Turp1s cursus 1n h4c h4b1t4ss3 pl4t34 d1ctumst qu1squ3 s4g1tt1s purus."

// --------------------2) Create a function that takes in an array of words and a single letter and returns an array of all the words containing that particular letter.

// a) Create a test with expects statement using the variable provided.

describe("showOnlyWordsWithThisLetter", () => {
  const fruitArray = [
    "Mango",
    "Cherry",
    "Apricot",
    "Blueberry",
    "Peach",
    "Kiwi",
  ];
  const letterA = "a";
  // Expected output: ["Mango", "Apricot", "Peach"]
  const letterE = "e";
  // Expected output: ["Cherry", "Blueberry", "Peach"]
  it("takes in an array of words and a single letter and returns an array of all the words containing that particular letter", () => {
    expect(showOnlyWordsWithThisLetter(fruitArray, letterA)).toEqual([
      "Mango",
      "Apricot",
      "Peach",
    ]);
    expect(showOnlyWordsWithThisLetter(fruitArray, letterE)).toEqual([
      "Cherry",
      "Blueberry",
      "Peach",
    ]);
  });
});

// ReferenceError: showOnlyWordsWithThisLetter is not defined

// b) Create the function that makes the test pass.

//pseudo:
// create a function named showOnlyWordsWithThisLetter that takes in an array and a letter as an argument
// within our function we will use the higher order function .filter() to iterate over the argument array and interegate each value in the array with a conditional, returning only values that meet that conditional.
// within our .filter() we want to pass through value and return each value that .includes() our argument letter. .includes() is a built in method that returns a true boolean value if an argument is included in the value that .includes() is called upon. (value.includes(letter))
// to account for capitalized letters we can use the .toLowerCase() which forces all characters in the string to be lower case. use this method before .includes(letter) (value.toLowerCase().includes(letter))
// return only words within the array than contain the argument letter

const showOnlyWordsWithThisLetter = (array, letter) => {
  return array.filter((value) => {
    return value.toLowerCase().includes(letter);
  });
};

// Test Suites: 1 passed, 1 total
// Tests:       2 passed, 2 total

// --------------------3) Create a function that takes in an array of 5 numbers and determines whether or not the array is a "full house". A full house is exactly one pair and one three of a kind.

// a) Create a test with expect statements using the variable provided.

describe("ohIThoughtYouMeantTheTvShow", () => {
  const hand1 = [5, 5, 3, 5, 3];
  // Expected output: true
  const hand2 = [5, 5, 3, 3, 4];
  // Expected output: false
  const hand3 = [5, 5, 5, 5, 4];
  // Expected output: false
  const hand4 = [7, 2, 7, 2, 7];
  // Expected output: true
  const hand5 = [2, 2, 2, 3, 3];
  it("takes in an array of 5 numbers and determines whether or not the array is a 'full house'", () => {
    expect(ohIThoughtYouMeantTheTvShow(hand1)).toEqual(true);
    expect(ohIThoughtYouMeantTheTvShow(hand2)).toEqual(false);
    expect(ohIThoughtYouMeantTheTvShow(hand3)).toEqual(false);
    expect(ohIThoughtYouMeantTheTvShow(hand4)).toEqual(true);
    expect(ohIThoughtYouMeantTheTvShow(hand5)).toEqual(true);
  });
});

// ReferenceError: ohIThoughtYouMeantTheTvShow is not defined

// b) Create the function that makes the test pass.

// pseudo:
// create a function called ohIThoughtYouMeantTheTvShow that takes in an array of 5 numbers
// within our function we can use .sort((a,b) => a - b) on our argument array (you've seen me explain this in every assessment for the past three weeks, for brevity i will refrain from doing it again lol)
// now that our array is sorted from least to greatest, we want to define two variables in our function, these two variables will essentially define what both variations of a 'full house' are.
// the first variable will be called firstTwoAndLastThreeMatch which will be defined as array[0] === array[1] && array[2] === array[4]. This is saying that the FIRST TWO indexes of our sorted array hold the same value, AND the LAST THREE indexes hold the same value.
// the second variable will be called firstThreeAndLastTwoMatch which will be defined as array[0] === array[2] && array[3] === array[4]. This variable is saying that the FIRST THREE indexes hold the same value, AND the LAST TWO indexes hold the same value.
// finally we want to return firstTwoAndLastThreeMatch || firstThreeAndLastTwoMatch which will return true if our argument array matches either of those varables.
// this is an incredibly specific/static solution to the prompt, but given the specific nature of the prompt (the array will have 5 numbers), I am comfortable with this solution. :)

const ohIThoughtYouMeantTheTvShow = (array) => {
  array.sort((a, b) => a - b);
  const firstTwoAndLastThreeMatch =
    array[0] === array[1] && array[2] === array[4];
  const firstThreeAndLastTwoMatch =
    array[0] === array[2] && array[3] === array[4];
  return firstTwoAndLastThreeMatch || firstThreeAndLastTwoMatch;
};

// Test Suites: 1 passed, 1 total
// Tests:       3 passed, 3 total
