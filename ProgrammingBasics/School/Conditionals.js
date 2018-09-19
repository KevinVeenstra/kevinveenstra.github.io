// opdracht 1 cijfer beoordeling met if else statements
var grade = 10; // <-- voer hier het behaalde cijfer in
var yourGrade = "Je behaalde cijfer is ";

if (grade < 6) {
    console.log(yourGrade + "onvoldoende");
} else if (grade<=7) {
    console.log(yourGrade + "voldoende");
} else if (grade<=9) {
 console.log(yourGrade + "goed");
} else {
    console.log(yourGrade + "uitmunted")
}
