$(document).ready(function () {
    // Set a hardcoded date
    var hardcodedDate = new Date("1990-01-01");
    save(hardcodedDate);
    renderAgeLoop();

    function save(dob) {
        localStorage.dob = dob.getTime();
    };

    function load() {
        var dob;
        if (dob = localStorage.getItem("dob")) {
            return new Date(parseInt(dob));
        }
        return -1;
    };

    function renderAgeLoop() {
        var dob = load();
        $("#choose").css("display", "none");
        $("#timer").css("display", "block");

        setInterval(function () {
            var age = getAge(dob);
            $("#age").html(age.year + "<sup>." + age.ms + "</sup>");
        }, 100);
    };

    function getAge(dob) {
        var now = new Date;
        var duration = now - dob;
        var years = duration / 31556900000;

        var majorMinor = years.toFixed(9).toString().split('.');

        return {
            "year": majorMinor[0],
            "ms": majorMinor[1]
        };
    };

    function main() {
        if (load() != -1) {
            renderAgeLoop();
        }
    };
    main();
});
