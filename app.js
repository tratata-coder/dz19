let weight = +prompt('Введите вес в кг.');
let height = +prompt('Введите рост в м.');
let index = weight / (height * height);
if(index <= 16){
    console.log(`Ваш индекс = ${index}, что значит что у Вас выраженный дефицит массы тела.`);
}else if(index <= 18.5) {
    console.log(`Ваш индекс = ${index}, что значит что у Вас недостаточная (дефицит) масса тела.`);
}else if(index <= 25) {
    console.log(`Ваш индекс = ${index}, что значит что Ваш вес в норме.`);
}else if(index <= 30) {
    console.log(`Ваш индекс = ${index}, что значит что у Вас избыточная масса тела (предожирение).`);
}else if(index <= 35) {
    console.log(`Ваш индекс = ${index}, что значит что у Вас ожирение.`);
}else if(index <= 40) {
    console.log(`Ваш индекс = ${index}, что значит что у Вас ожирение резкое.`);
}else if(index >= 40) {
    console.log(`Ваш индекс = ${index}, что значит что у Вас очень резкое ожирение.`);
}