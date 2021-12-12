//1.1/

const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
 
for (let i = 0; i < numbers.length; i++) {
    const numb = numbers[i];
    console.log(numb);
    
};

//1.2

for (let i = 0; i < numbers.length; i++) {
    const numb = numbers[i];
    if (numb % 2 == 0) {
        console.log(numb);
     } else {
         
     }
    
};

//1.3

const ovejas = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (let i = 0; i < ovejas.length; i++) {
    const oveja = ovejas[i];
    if (oveja < 10) {
        console.log('Intentando dormir');
    } else if (oveja == 10){
        console.log('Dormido');
    }
  };
