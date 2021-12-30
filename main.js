var dog = 0;
var cat = 0;
var lion = 0;
var cow = 0;

function startClassification()
{
navigator.mediaDevices.getUserMedia({ audio: true});
classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/model.json',modelReady);
}
function modelReady(){
    classifier.classify(gotResults);
}
function gotResults(error, results)
{
if(error){
console.error(error);
}
else{
    console.log(results);
 random_number_r = Math.floor(Math.random() * 255) + 1;
 random_number_b = Math.floor(Math.random() * 255) + 1;
 random_number_g = Math.floor(Math.random() * 255) + 1;


 document.getElementById("detected").innerHTML = 'detected dog - '+dog+' detected cat -'+cat+' detected cow - '+cow+' detected lion - '+lion
 document.getElementById("detected").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_b+")";
 document.getElementById("animal_voices").innerHTML = 'detected voice is of - '+results[0].label
 document.getElementById("animal_voices").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_b+")";

 results[0].label;
 document.getElementById("result_confidence").innerHTML = 'Accuracy - '+
(results[0].confidence*100).toFixed(2)+" %";
document.getElementById("result_label").style.color = "rgb("
random_number_r+","+random_number_g+","+random_number_b+")";
document.getElementById("result_confidence").style.color = "rgb("
random_number_r+","+random_number_g+","+random_number_b+")";


img = document.getElementById('animal_images');


if(results[0].label == "Moo")
{
img.src = 'sus.jpg';
cow = cow + 1;
}
else if(results[0].label == "Bark"){
img.src = 'cutedog.jpg'
dog = dog + 1;
}
else if(results[0].label == "Meow"){
img.src = 'foryukii.jpg';
cat = cat + 1;
}else if(results[0].label == "Roar"){
    img.src = 'alsocool.jpg';
    lion = lion = 1;
}
}
}