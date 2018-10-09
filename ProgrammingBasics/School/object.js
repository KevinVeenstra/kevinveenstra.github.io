var lapTimes = {
    lapTimes: [55.99, 63.00, 63.01, 54.01, 62.79, 52.88, 53.10, 54.12],
}

const teachers = [
    {
        name: Loek,
        profession: Teacher,
        brand: Linux,
        hoursPerWeek: 24,
        salary: 420,
        salaryPerHour(x, y) {
            var x = this.salary
            var y = this.hoursPerWeek;
            var awnser = x / y
            return awnser.toFixed(2);
        }
    },
    {
        name: Daan,
        profession: Teacher,
        brand: Arduino,
        hoursPerWeek: 24,
        salary: 999,
        salaryPerHour(x, y) {
            var x = this.salary
            var y = this.hoursPerWeek;
            var awnser = x / y
            return awnser.toFixed(2);
        }
    },
    {
        name: Rimmert,
        profession: Teacher,
        brand: Apple,
        hoursPerWeek: 24,
        salary: 666,
        salaryPerHour(x, y) {
            var x = this.salary
            var y = this.hoursPerWeek;
            var awnser = x / y
            return awnser.toFixed(2);
        }
    }
]

teachers.forEach(function(teachers) {
    console.log(I have a ${teachers.profession} named ${teachers.name} and he like to work on a ${teachers.brand} computer. And earns $${teachers.salaryPerHour()} per hour.)
});