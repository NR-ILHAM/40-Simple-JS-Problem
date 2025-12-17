// 1st problem > ভ্যারিয়েবল, কনসোল, কন্ডিশন

const age = 17; //aikane const variable ta dara bujai man change kora jabe

if (age >= 18)
{
    console.log("Adult");
} else
{
        console.log(" Not Adult");

}

// 2nd problem >> লুপ দিয়ে কাউন্ট করা

let count = 0;

for(let i =1; i<=20; i++)
{
    count=count + i;
}
console.log("Total :", count);

// 3rd Problem >>  অ্যারে থেকে সর্বোচ্চ সংখ্যাটি খুঁজে বের করা

const arr = [4, 2, 9, 1, 7];
let max = arr[0];

for (let i = 1; i < arr.length; i++) {
  if (arr[i] > max) {
    max = arr[i];
  }
}

console.log("Total length of array : " ,arr.length);//length count korbe
console.log("Max Array:", max);
console.log("Position:", arr.indexOf(max));//array position ber hobe koto number a maximum ace oita 

// 4th Problem >> স্ট্রিং উল্টো করা (রিভার্স)

const word = "NR ILHAM";
let reversed = "";

for (let i = word.length - 1; i >= 0; i--) {
  reversed = reversed + word[i];
}
console.log("Total length of word : ",word.length);
console.log("Reversed:", reversed);

// 5th Problem >>  ক্যারেক্টার কাউন্ট (স্ট্রিং এ কয়টা ভাওয়েল আছে)
const text = "javascript";
let count = 0;

for (let i = 0; i < text.length; i++) {
  const ch = text[i];

  if (
    ch === "a" ||
    ch === "e" ||
    ch === "i" ||
    ch === "o" ||
    ch === "u"
  ) {
    count++;
  }
}

console.log("Vowel Count:", count);

// 6th Problem >>নাম্বারের ফ্যাক্টোরিয়াল
const num = 5;
let factorial = 1;

for (let i = 1; i <= num; i++) {
  factorial *= i;
}

console.log("Factorial:", factorial);


// 7th Problem >>সংখ্যা জোড় না বিজোড়

const n = 11;

if (n % 2 === 0) {
  console.log("Even");
} else {
  console.log("Odd");
}

// 8th Problem >>  অ্যারেতে উপাদান খুঁজে বের করা (without includes)

const items = ["pen", "book", "pencil"];
const target = "book";
let found = false;

for (let i = 0; i < items.length; i++) {
  if (items[i] === target) {
    found = true;
  }
}

if(found){

console.log("Found>>", target);
}else{
  console.log("Not Found>>", target);
}


// 9th Problem >>অ্যারে উল্টো করা (নতুন অ্যারে বানিয়ে)
const nums = [1, 2, 3, 4, 5];
const reversed = [];

for (let i = nums.length - 1; i >= 0; i--) {
  reversed.push(nums[i]);//array te element add korte hole push use korte hobe
}

console.log("Reversed Array:", reversed);

// 10th problem >>> ডিজিট কাউন্ট (একটি সংখ্যা কত অঙ্কের)

let number = 12345;
let count = 0;

while (number !== 0) {
  number = Math.floor(number / 10);
  count++;
}

console.log("Digit count:", count);
