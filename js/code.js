function enaple() {
    var check = [document.getElementById("check"),
    document.getElementById("check2"),
    document.getElementById("check3"),
    document.getElementById("check4"),
    document.getElementById("check5"),
    document.getElementById("check6"),
    document.getElementById("check7"),
    document.getElementById("check8"),
    document.getElementById("check9"),
    document.getElementById("check10")];

    var expgrade = [document.getElementById("grade"),
    document.getElementById("grade2"),
    document.getElementById("grade3"),
    document.getElementById("grade4"),
    document.getElementById("grade5"),
    document.getElementById("grade6"),
    document.getElementById("grade7"),
    document.getElementById("grade8"),
    document.getElementById("grade9"),
    document.getElementById("grade10")];

    for (var i = 0; i < 10; i++) {
        if (check[i].checked) {
            expgrade[i].removeAttribute("disabled");
        } else {
            expgrade[i].disabled = "true";
        }
    }
}

function calculate() {
    var checkGPA = parseFloat(document.getElementById("currentGPA").value);
    var error = document.getElementById("error");
    var cumulative_gpa = parseFloat(document.getElementById("currentGPA").value);
    var totalHours = parseFloat(document.getElementById("totalHours").value);
    var total_point_first = cumulative_gpa * totalHours;
    var total_grade_point = 0;
    var total_credit_hours = 0;
    var current_GPA_this_semester = 0;
    var total_point = 0;
    var total_repeted_hours = 0;
    const thead1 = document.querySelector(".thead1");
    const tbodyel = document.querySelector(".tbodyel");
    const tit1 = document.querySelector(".answer");
    var tota_grade_point_current = 0;
    var credit_hours_for_this_Semester = 0;
    if (checkGPA >= 0.0 && checkGPA <= 4.0 && isNaN(checkGPA) == false) {

        if (totalHours >= 0 && totalHours <= 999 && isNaN(totalHours) == false) {
            var check = [document.getElementById("check"),
            document.getElementById("check2"),
            document.getElementById("check3"),
            document.getElementById("check4"),
            document.getElementById("check5"),
            document.getElementById("check6"),
            document.getElementById("check7"),
            document.getElementById("check8"),
            document.getElementById("check9"),
            document.getElementById("check10")];


            var expgrade = [parseFloat(document.getElementById("expgrade").value),
            parseFloat(document.getElementById("expgrade2").value),
            parseFloat(document.getElementById("expgrade3").value),
            parseFloat(document.getElementById("expgrade4").value),
            parseFloat(document.getElementById("expgrade5").value),
            parseFloat(document.getElementById("expgrade6").value),
            parseFloat(document.getElementById("expgrade7").value),
            parseFloat(document.getElementById("expgrade8").value),
            parseFloat(document.getElementById("expgrade9").value),
            parseFloat(document.getElementById("expgrade10").value)];


            var course_grade = [parseFloat(document.getElementById("grade").value), parseFloat(document.getElementById("grade2").value), parseFloat(document.getElementById("grade3").value),
            parseFloat(document.getElementById("grade4").value),
            parseFloat(document.getElementById("grade5").value),
            parseFloat(document.getElementById("grade6").value),
            parseFloat(document.getElementById("grade7").value),
            parseFloat(document.getElementById("grade8").value),
            parseFloat(document.getElementById("grade9").value),
            parseFloat(document.getElementById("grade10").value)];


            var credit_hours = [parseFloat(document.getElementById("Credit1").value), parseFloat(document.getElementById("Credit2").value),
            parseFloat(document.getElementById("Credit3").value), parseFloat(document.getElementById("Credit4").value),
            parseFloat(document.getElementById("Credit5").value), parseFloat(document.getElementById("Credit6").value),
            parseFloat(document.getElementById("Credit7").value), parseFloat(document.getElementById("Credit8").value),
            parseFloat(document.getElementById("Credit9").value), parseFloat(document.getElementById("Credit10").value)];


            for (var i = 0; i < 10; i++) {
                if (check[i].checked && expgrade[i] > course_grade[i]) {
                    total_point += (course_grade[i] * credit_hours[i]);
                    total_grade_point += (expgrade[i] * credit_hours[i]);
                    tota_grade_point_current += (expgrade[i] * credit_hours[i]);
                    totalHours += 0;
                    total_credit_hours += credit_hours[i];
                    total_repeted_hours += credit_hours[i];

                } else if (check[i].checked && expgrade[i] < course_grade[i]) {
                    totalHours += 0;
                    total_credit_hours += credit_hours[i];
                    total_repeted_hours += credit_hours[i];
                    tota_grade_point_current += (expgrade[i] * credit_hours[i]);
                } else {
                    total_grade_point += (expgrade[i] * credit_hours[i]);
                    tota_grade_point_current += (expgrade[i] * credit_hours[i]);
                    totalHours += credit_hours[i];
                    total_credit_hours += credit_hours[i];
                }
            }




            if (tota_grade_point_current == 0 && total_credit_hours == 0) {
                current_GPA_this_semester = 0;
            } else {
                current_GPA_this_semester = (tota_grade_point_current / total_credit_hours);
            }

            if (totalHours == 0 && ((total_point_first - total_point) + total_grade_point) == 0) {
                cumulative_gpa = 0;
            } else {
                cumulative_gpa = (((total_point_first - total_point) + total_grade_point) / totalHours);
            }

            for (var i = 0; i < 10; i++) {
                if (isNaN(credit_hours[i]) == true) {
                    error.textContent = "Number of Credit Hours for course " + (i + 1) + " is Invalid";
                    error.style.color = "red";
                    tit1.innerHTML = ``;
                    thead1.innerHTML = ``;
                    tbodyel.innerHTML = ``;
                    break;
                }
                else if (credit_hours[i] < 0.0 || credit_hours[i] > 14) {
                    error.textContent = "Number of Credit Hours for course " + (i + 1) + " is Invalid";
                    error.style.color = "red";
                    tit1.innerHTML = ``;
                    thead1.innerHTML = ``;
                    tbodyel.innerHTML = ``;
                    break;
                } else if (check[i].checked && parseFloat(document.getElementById("totalHours").value) <= total_repeted_hours) {
                    error.textContent = "Total credit hours must be equal to or greater than the sum of all repeated class credit hours.";
                    error.style.color = "red";
                    tit1.innerHTML = ``;
                    thead1.innerHTML = ``;
                    tbodyel.innerHTML = ``;
                    break;
                } else if (check[i].checked && expgrade[i] > 3.3 && course_grade[i] == 0) {
                    error.textContent = "The highest grade that can be obtained is B+";
                    error.style.color = "red";
                    tit1.innerHTML = ``;
                    thead1.innerHTML = ``;
                    tbodyel.innerHTML = ``;
                    break;
                } else {

                    tit1.innerHTML = `
            <h2>Projected GPA</h2>
        `


                    thead1.innerHTML = `
            <th class="hours m-test"><label class="m-test" for="current-GPA">Projected Semester GPA</label></th>
                        <th class="hours"><label for="credit-hours">Credit Hours for this Semester</label></th>
                        <th class="hours"><label for="cumulative-GPA">Projected Overall GPA</label></th>
                        <th class="hours"><label for="total-credit-hours">Total Credit hours</label></th>
        `
                    tbodyel.innerHTML = `
            <tr>
                <td>${current_GPA_this_semester.toFixed(3)}</td>
                <td>${(total_credit_hours + credit_hours_for_this_Semester)}</td>
                <td>${cumulative_gpa.toFixed(3)}</td>
                <td>${totalHours}</td>
            </tr>
        `
                    error.textContent = "";
                    error.style.color = "white";
                }
            }
        } else {
            error.textContent = "The total hours must be grater than 0";
            error.style.color = "red";
            tit1.innerHTML = ``;
            thead1.innerHTML = ``;
            tbodyel.innerHTML = ``;
        }
    } else {
        error.textContent = "The GPA must be between 0 and 4.";
        error.style.color = "red";
        tit1.innerHTML = ``;
        thead1.innerHTML = ``;
        tbodyel.innerHTML = ``;
    }


}

function delete_result() {
    const thead1 = document.querySelector(".thead1");
    const tbodyel = document.querySelector(".tbodyel");
    const tit1 = document.querySelector(".answer");
    var error = document.getElementById("error");

    tit1.innerHTML = ``;
    thead1.innerHTML = ``;
    tbodyel.innerHTML = ``;
    error.textContent = "";
    error.style.color = "white";
}

function targeGPA() {
    var checktarget_GPA = parseFloat(document.getElementById("target_GPA").value);
    var checkcurrent_GPA = parseFloat(document.getElementById("currentGPA-goal-GPA").value);
    var target_GPA = parseFloat(document.getElementById("target_GPA").value);
    var completed_Credit_Hours = parseFloat(document.getElementById("completed_Credit_Hours").value);
    var planned_Credit_Hours = parseFloat(document.getElementById("planned_Credit_Hours").value);
    var current_GPA = parseFloat(document.getElementById("currentGPA-goal-GPA").value);
    var goal_GPA;
    const result = document.querySelector(".target_GPA_result");

    if ((checkcurrent_GPA > 0 && checkcurrent_GPA <= 4)) {
        if (completed_Credit_Hours > 0.0 && completed_Credit_Hours <= 350.0) {
            if ((checktarget_GPA > 0 && checktarget_GPA <= 4)) {
                if (planned_Credit_Hours >= 0.0 && planned_Credit_Hours <= 350.0) {
                    goal_GPA = ((target_GPA * (completed_Credit_Hours + planned_Credit_Hours)) - (current_GPA * completed_Credit_Hours)) / planned_Credit_Hours;
                    if (goal_GPA >= 0 && goal_GPA <= 4) {
                        result.textContent = `You will need a GPA of ${goal_GPA.toFixed(3)} to meet your goal of ${target_GPA.toFixed(3)} while taking ${planned_Credit_Hours} credits this semester.`;
                        document.getElementById("goal-result").style.color = "black";
                    } else {
                        result.textContent = `Unfortunately, you would need a GPA of ${goal_GPA.toFixed(3)} to meet your goal of ${target_GPA.toFixed(3)} which is not possible while taking ${planned_Credit_Hours} credits this semester.`
                        document.getElementById("goal-result").style.color = "black";
                    }
                } else {
                    result.textContent = `Credits for this semester must be greater than 0.`;
                    document.getElementById("goal-result").style.color = "red";
                }
            } else {
                result.textContent = `Your desired GPA must be between 0 and 4.`;
                document.getElementById("goal-result").style.color = "red";
            }
        } else {
            result.textContent = `Total Credit Hours this Semester is Invalid`;
            document.getElementById("goal-result").style.color = "red";
        }

    } else {
        result.textContent = `The current GPA must be between 0 and 4.`;
        document.getElementById("goal-result").style.color = "red";
    }


}

function delete_target_GPA() {
    const result = document.querySelector(".target_GPA_result");
    result.textContent = ``;
}

function deficit_result() {
    var currentGPA_deficit = parseFloat(document.getElementById("currentGPA-deficit").value);
    var credit_hours_for_this_Semester = parseFloat(document.getElementById("Credit_Hours_deficit_this_semester").value);
    var ceheckcurrentGPA_deficit = parseFloat(document.getElementById("currentGPA-deficit").value);
    var completed_Credit_Hours_deficit = parseFloat(document.getElementById("completed_Credit_Hours_deficit").value);
    var total_credit_hours_deficit = parseFloat(document.getElementById("completed_Credit_Hours_deficit").value);
    var total_point = currentGPA_deficit * completed_Credit_Hours_deficit;
    var deficit_dd = (completed_Credit_Hours_deficit * 2) - total_point;
    var deficit = (completed_Credit_Hours_deficit * 2) - total_point;
    var second_option_deficit = (completed_Credit_Hours_deficit * 2) - total_point;
    var third_option_deficit = (completed_Credit_Hours_deficit * 2) - total_point;
    var fourth_option_deficit = (completed_Credit_Hours_deficit * 2) - total_point;
    var fifth_option_deficit = (completed_Credit_Hours_deficit * 2) - total_point;
    var sixth_option_deficit = (completed_Credit_Hours_deficit * 2) - total_point;
    const result = document.querySelector(".deficit_GPA_result");
    var mindeficit = document.querySelector(".deficit_GPA_final_result");
    var error = document.getElementById("error_deficit");
    var total_point_first = currentGPA_deficit * completed_Credit_Hours_deficit;
    var total_grade_point = 0;
    var total_repeted_hours = 0;
    var total_point_to = 0;
    var tota_grade_point_current = 0;
    var total_credit_hours = 0;
    var total_Hours = 0;
    var j = 0;
    const thead1 = document.querySelector(".thead-deficit");
    const tbodyel = document.querySelector(".tbody-deficit");
    const thead2 = document.querySelector(".thead-deficit_2option");
    const tbodye2 = document.querySelector(".tbody-deficit_2option");
    const thead3 = document.querySelector(".thead-deficit_3option");
    const tbodye3 = document.querySelector(".tbody-deficit_3option");
    const thead4 = document.querySelector(".thead-deficit_4option");
    const tbodye4 = document.querySelector(".tbody-deficit_4option");
    const thead5 = document.querySelector(".thead-deficit_5option");
    const tbodye5 = document.querySelector(".tbody-deficit_5option");
    const thead6 = document.querySelector(".thead-deficit_6option");
    const tbodye6 = document.querySelector(".tbody-deficit_6option");
    const print_btn = document.querySelector(".print_button");

    const check1 = document.querySelector("#check_1_deficit");
    const check2 = document.querySelector("#check_2_deficit");
    const check3 = document.querySelector("#check_3_deficit");
    const check4 = document.querySelector("#check_4_deficit");
    const check5 = document.querySelector("#check_5_deficit");
    const check6 = document.querySelector("#check_6_deficit");


    result.textContent = ``;
    thead1.innerHTML = ``;
    tbodyel.innerHTML = '';
    mindeficit.innerHTML = ``;
    thead2.innerHTML = ``;
    tbodye2.innerHTML = ``;
    thead3.innerHTML = ``;
    tbodye3.innerHTML = ``;
    thead4.innerHTML = ``;
    tbodye4.innerHTML = ``;
    thead5.innerHTML = ``;
    tbodye5.innerHTML = ``;
    thead6.innerHTML = ``;
    tbodye6.innerHTML = ``;
    print_btn.innerHTML = ``;
    check1.innerHTML = ``;
    check2.innerHTML = ``;
    check3.innerHTML = ``;
    check4.innerHTML = ``;
    check5.innerHTML = ``;
    check6.innerHTML = ``;
    error.textContent = "";

    var course_hours_repeat = [parseFloat(document.getElementById("course_deficit1").value),
    parseFloat(document.getElementById("course_deficit2").value),
    parseFloat(document.getElementById("course_deficit3").value),
    parseFloat(document.getElementById("course_deficit4").value),
    parseFloat(document.getElementById("course_deficit5").value),
    parseFloat(document.getElementById("course_deficit6").value),
    parseFloat(document.getElementById("course_deficit7").value)];


    var course_grade_deficit = [parseFloat(document.getElementById("grade_deficit").value),
    parseFloat(document.getElementById("grade_deficit2").value),
    parseFloat(document.getElementById("grade_deficit3").value),
    parseFloat(document.getElementById("grade_deficit4").value),
    parseFloat(document.getElementById("grade_deficit5").value),
    parseFloat(document.getElementById("grade_deficit6").value),
    parseFloat(document.getElementById("grade_deficit7").value)];

    if (completed_Credit_Hours_deficit >= 0 && completed_Credit_Hours_deficit <= 999 && isNaN(completed_Credit_Hours_deficit) == false) {
        if (isNaN(credit_hours_for_this_Semester) == false || (credit_hours_for_this_Semester > 0 && credit_hours_for_this_Semester < 16)) {
            for (var i = 0; i < 7; i++) {
                if (isNaN(course_hours_repeat[i]) == true) {
                    error.textContent = "Number of Credit Hours for course " + (i + 1) + " is Invalid";
                    error.style.color = "red";
                    result.textContent = ``;
                    thead1.innerHTML = ``;
                    tbodyel.innerHTML = '';
                    mindeficit.innerHTML = ``;
                    thead2.innerHTML = ``;
                    tbodye2.innerHTML = ``;
                    thead3.innerHTML = ``;
                    tbodye3.innerHTML = ``;
                    thead4.innerHTML = ``;
                    tbodye4.innerHTML = ``;
                    thead5.innerHTML = ``;
                    tbodye5.innerHTML = ``;
                    thead6.innerHTML = ``;
                    tbodye6.innerHTML = ``;
                    print_btn.innerHTML = ``;
                    check1.innerHTML = ``;
                    check2.innerHTML = ``;
                    check3.innerHTML = ``;
                    check4.innerHTML = ``;
                    check5.innerHTML = ``;
                    check6.innerHTML = ``;
                    break;
                }
                else if (course_hours_repeat[i] < 0.0 || course_hours_repeat[i] > 14) {
                    error.textContent = "Number of Credit Hours for course " + (i + 1) + " is Invalid";
                    error.style.color = "red";
                    result.textContent = ``;
                    thead1.innerHTML = ``;
                    tbodyel.innerHTML = '';
                    mindeficit.innerHTML = ``;
                    thead2.innerHTML = ``;
                    tbodye2.innerHTML = ``;
                    thead3.innerHTML = ``;
                    tbodye3.innerHTML = ``;
                    thead4.innerHTML = ``;
                    tbodye4.innerHTML = ``;
                    thead5.innerHTML = ``;
                    tbodye5.innerHTML = ``;
                    thead6.innerHTML = ``;
                    tbodye6.innerHTML = ``;
                    print_btn.innerHTML = ``;
                    check1.innerHTML = ``;
                    check2.innerHTML = ``;
                    check3.innerHTML = ``;
                    check4.innerHTML = ``;
                    check5.innerHTML = ``;
                    check6.innerHTML = ``;
                    break;
                } else {
                    // The first option
                    if (ceheckcurrentGPA_deficit >= 0 && ceheckcurrentGPA_deficit < 4) {
                        if (deficit <= 0) {
                            result.textContent = `Good academic standing your Deficit is ${deficit}`;
                        } else {
                            result.textContent = `Propation standing your Deficit is ${deficit_dd}`;
                            thead1.innerHTML = `
                        <th class="hours"><label for="current-GPA">status</label></th>
                        <th class="hours"><label for="credit-hours">Credit Hours</label></th>
                        <th class="hours"><label for="credit-hours">Previous grade</label></th>
                        <th class="hours"><label for="cumulative-GPA">Expected Grade</label></th>`;
                            for (var i = 0; i < 7; i++) {
                                if (deficit >= 0 && total_Hours + 2 < credit_hours_for_this_Semester) {
                                    if (course_grade_deficit[i] == 0 && course_hours_repeat[i] != 0) {
                                        total_point_to += (course_grade_deficit[i] * course_hours_repeat[i]);
                                        total_grade_point += (2.3 * course_hours_repeat[i]);
                                        tota_grade_point_current += (2.3 * course_hours_repeat[i]);
                                        total_credit_hours_deficit += 0;
                                        total_credit_hours += course_hours_repeat[i];
                                        total_repeted_hours += course_hours_repeat[i];
                                        tbodyel.innerHTML += `
                        <tr>
                            <td>Repeat the course</td>
                            <td>${course_hours_repeat[i]}</td>
                            <td>F</td>
                            <td>C+</td>
                        </tr>`
                                        deficit -= (course_hours_repeat[i] * 2.3);
                                        total_Hours += course_hours_repeat[i];
                                    }
                                }
                            }

                            for (var i = 0; i < 7; i++) {
                                if ((course_grade_deficit[i] == 1 && course_hours_repeat[i] != 0 && total_Hours + 2 < credit_hours_for_this_Semester)) {
                                    total_point_to += (course_grade_deficit[i] * course_hours_repeat[i]);
                                    total_grade_point += (3.0 * course_hours_repeat[i]);
                                    tota_grade_point_current += (3.0 * course_hours_repeat[i]);
                                    total_credit_hours_deficit += 0;
                                    total_credit_hours += course_hours_repeat[i];
                                    total_repeted_hours += course_hours_repeat[i];
                                    tbodyel.innerHTML += `
                        <tr>
                            <td>Repeat the course</td>
                            <td>${course_hours_repeat[i]}</td>
                            <td>D</td>
                            <td>B</td>
                        </tr>`
                                    deficit -= (course_hours_repeat[i] * 2);
                                    total_Hours += course_hours_repeat[i];
                                }
                            }
                            for (var i = 0; i < 7; i++) {
                                if ((course_grade_deficit[i] == 1 && total_Hours + 2 <= credit_hours_for_this_Semester)) {
                                    if (total_Hours >= 12) {
                                        total_grade_point += (3.3 * 2);
                                        tota_grade_point_current += (3.3 * 2);
                                        total_credit_hours_deficit += 2;
                                        total_credit_hours += 2;
                                        tbodyel.innerHTML += `
                        <tr>
                            <td>New course</td>
                            <td>2</td>
                            <td>-</td>
                            <td>B+</td>
                        </tr>`
                                        deficit -= (2 * 1.333);
                                        total_Hours += 2;
                                    } else {
                                        total_grade_point += (3.0 * 3);
                                        tota_grade_point_current += (3.0 * 3);
                                        total_credit_hours_deficit += 3;
                                        total_credit_hours += 3;
                                        tbodyel.innerHTML += `
                        <tr>
                            <td>New course</td>
                            <td>3</td>
                            <td>-</td>
                            <td>B</td>
                        </tr>`
                                        deficit -= (3 * 1);
                                        total_Hours += 3;
                                    }
                                }
                            }
                            check1.innerHTML = `<input type="checkbox" name="BoxSelect[]" id="check_1" required>`;
                            if (total_credit_hours_deficit == 0 && ((total_point_first - total_point_to) + total_grade_point) == 0) {
                                cumulative_gpa = 0;
                            } else {
                                cumulative_gpa = (((total_point_first - total_point_to) + total_grade_point) / total_credit_hours_deficit);
                            }
                            tbodyel.innerHTML += `
                        <tr>
                            <td colspan='3'>Cumulative GPA</td>
                            <td>${cumulative_gpa.toFixed(3)}</td>
                        </tr>`

                        }


                    } else {
                        result.textContent = `The GPA must be between 0 and 4.`
                    }

                    total_Hours = 0;
                    total_grade_point = 0;
                    total_repeted_hours = 0;
                    total_point_to = 0;
                    tota_grade_point_current = 0;
                    total_credit_hours = 0;
                    total_credit_hours_deficit = parseFloat(document.getElementById("completed_Credit_Hours_deficit").value);
                    // The second option
                    if (ceheckcurrentGPA_deficit >= 0 && ceheckcurrentGPA_deficit <= 4) {
                        if (second_option_deficit <= 0) {
                            result.textContent = `Good academic standing your Deficit is ${deficit}`;
                        } else {
                            result.textContent = `Propation standing your Deficit is ${deficit_dd}`;
                            thead2.innerHTML = `
                        <th><label for="current-GPA">status</label></th>
                        <th><label for="credit-hours">Credit Hours</label></th>
                        <th><label for="credit-hours">Previous grade</label></th>
                        <th><label for="cumulative-GPA">Expected Grade</label></th>`;
                            for (var i = 0; i < 7; i++) {
                                if (second_option_deficit >= 0) {
                                    if (course_grade_deficit[i] == 0 && course_hours_repeat[i] != 0 && j == 0) {
                                        total_point_to += (course_grade_deficit[i] * course_hours_repeat[i]);
                                        total_grade_point += (3.0 * course_hours_repeat[i]);
                                        tota_grade_point_current += (3.0 * course_hours_repeat[i]);
                                        total_credit_hours_deficit += 0;
                                        total_credit_hours += course_hours_repeat[i];
                                        total_repeted_hours += course_hours_repeat[i];
                                        tbodye2.innerHTML += `
                        <tr>
                            <td>Repeat the course</td>
                            <td>${course_hours_repeat[i]}</td>
                            <td>F</td>
                            <td>B</td>
                        </tr>`
                                        second_option_deficit -= (course_hours_repeat[i] * 3.0);
                                        total_Hours += course_hours_repeat[i];
                                        j++;

                                    } else if (course_grade_deficit[i] == 0 && course_hours_repeat[i] != 0 && total_Hours + 2 < credit_hours_for_this_Semester) {
                                        total_point_to += (course_grade_deficit[i] * course_hours_repeat[i]);
                                        total_grade_point += (2.3 * course_hours_repeat[i]);
                                        tota_grade_point_current += (2.3 * course_hours_repeat[i]);
                                        total_credit_hours_deficit += 0;
                                        total_credit_hours += course_hours_repeat[i];
                                        total_repeted_hours += course_hours_repeat[i];
                                        tbodye2.innerHTML += `
                        <tr>
                            <td>Repeat the course</td>
                            <td>${course_hours_repeat[i]}</td>
                            <td>F</td>
                            <td>C+</td>
                        </tr>`
                                        second_option_deficit -= (course_hours_repeat[i] * 2.3);
                                        total_Hours += course_hours_repeat[i];
                                    }
                                }
                            }
                            j = 0;
                            for (var i = 0; i < 7; i++) {

                                if (j == 0 && total_Hours + 2 < credit_hours_for_this_Semester) {
                                    total_grade_point += (3.3 * 3);
                                    tota_grade_point_current += (3.3 * 3);
                                    total_credit_hours_deficit += 3;
                                    total_credit_hours += 3;
                                    tbodye2.innerHTML += `
                        <tr>
                            <td>New course</td>
                            <td>3</td>
                            <td>-</td>
                            <td>B+</td>
                        </tr>`
                                    second_option_deficit -= (3 * 1.33);
                                    total_Hours += 3;
                                    j++
                                } else if (j == 1 && total_Hours + 2 < credit_hours_for_this_Semester) {
                                    total_grade_point += (2.3 * 2);
                                    tota_grade_point_current += (2.3 * 2);
                                    total_credit_hours_deficit += 3;
                                    total_credit_hours += 3;
                                    tbodye2.innerHTML += `
                        <tr>
                            <td>New course</td>
                            <td>2</td>
                            <td>-</td>
                            <td>C+</td>
                        </tr>`
                                    second_option_deficit -= (2 * 0.33);
                                    total_Hours += 2;
                                    j++
                                } else if (total_Hours + 2 < credit_hours_for_this_Semester) {
                                    total_grade_point += (2.7 * 3);
                                    tota_grade_point_current += (2.7 * 3);
                                    total_credit_hours_deficit += 3;
                                    total_credit_hours += 3;
                                    tbodye2.innerHTML += `
                        <tr>
                            <td>New course</td>
                            <td>3</td>
                            <td>-</td>
                            <td>B-</td>
                        </tr>`
                                    second_option_deficit -= (2 * 0.66);
                                    total_Hours += 3;
                                }
                            }
                            check2.innerHTML = `<input type="checkbox" name="BoxSelect[]" id="check_2" required>`;
                            if (total_credit_hours_deficit == 0 && ((total_point_first - total_point_to) + total_grade_point) == 0) {
                                cumulative_gpa = 0;
                            } else {
                                cumulative_gpa = (((total_point_first - total_point_to) + total_grade_point) / total_credit_hours_deficit);
                            }
                            tbodye2.innerHTML += `
                        <tr>
                            <td colspan='3'>Cumulative GPA</td>
                            <td>${cumulative_gpa.toFixed(3)}</td>
                        </tr>`


                        }
                        total_Hours = 0;
                        total_grade_point = 0;
                        total_repeted_hours = 0;
                        total_point_to = 0;
                        tota_grade_point_current = 0;
                        total_credit_hours = 0;
                        total_credit_hours_deficit = parseFloat(document.getElementById("completed_Credit_Hours_deficit").value);
                        // The option three 
                        if (ceheckcurrentGPA_deficit >= 0 && ceheckcurrentGPA_deficit <= 4) {
                            if (third_option_deficit <= 0) {
                                result.textContent = `Good academic standing your Deficit is ${deficit}`;
                            } else {
                                result.textContent = `Propation standing your Deficit is ${deficit_dd}`;
                                thead3.innerHTML = `
                            <th><label for="current-GPA">status</label></th>
                            <th><label for="credit-hours">Credit Hours</label></th>
                            <th><label for="credit-hours">Previous grade</label></th>
                            <th><label for="cumulative-GPA">Expected Grade</label></th>`;
                                for (var i = 0; i < 7; i++) {
                                    if (third_option_deficit >= 0) {
                                        if (course_grade_deficit[i] == 0 && course_hours_repeat[i] != 0 && j == 0) {
                                            total_point_to += (course_grade_deficit[i] * course_hours_repeat[i]);
                                            total_grade_point += (2.0 * course_hours_repeat[i]);
                                            tota_grade_point_current += (2.0 * course_hours_repeat[i]);
                                            total_credit_hours_deficit += 0;
                                            total_credit_hours += course_hours_repeat[i];
                                            total_repeted_hours += course_hours_repeat[i];
                                            tbodye3.innerHTML += `
                            <tr>
                                <td>Repeat the course</td>
                                <td>${course_hours_repeat[i]}</td>
                                <td>F</td>
                                <td>C</td>
                            </tr>`
                                            third_option_deficit -= (course_hours_repeat[i] * 2.0);
                                            total_Hours += course_hours_repeat[i];
                                            j++;

                                        } else if (course_grade_deficit[i] == 0 && course_hours_repeat[i] != 0 && total_Hours + 2 < credit_hours_for_this_Semester) {
                                            total_point_to += (course_grade_deficit[i] * course_hours_repeat[i]);
                                            total_grade_point += (2.7 * course_hours_repeat[i]);
                                            tota_grade_point_current += (2.7 * course_hours_repeat[i]);
                                            total_credit_hours_deficit += 0;
                                            total_credit_hours += course_hours_repeat[i];
                                            total_repeted_hours += course_hours_repeat[i];
                                            tbodye3.innerHTML += `
                            <tr>
                                <td>Repeat the course</td>
                                <td>${course_hours_repeat[i]}</td>
                                <td>F</td>
                                <td>B-</td>
                            </tr>`
                                            third_option_deficit -= (course_hours_repeat[i] * 2.7);
                                            total_Hours += course_hours_repeat[i];
                                        }
                                    }
                                }
                                j = 0;
                                for (var i = 0; i < 7; i++) {

                                    if (j == 0 && total_Hours + 2 < credit_hours_for_this_Semester) {
                                        total_grade_point += (3.3 * 3);
                                        tota_grade_point_current += (3.3 * 3);
                                        total_credit_hours_deficit += 3;
                                        total_credit_hours += 3;
                                        tbodye3.innerHTML += `
                            <tr>
                                <td>New course</td>
                                <td>3</td>
                                <td>-</td>
                                <td>B+</td>
                            </tr>`
                                        third_option_deficit -= (3 * 1.00);
                                        total_Hours += 3;
                                        j++
                                    } else if (j == 1 && total_Hours + 2 < credit_hours_for_this_Semester) {
                                        total_grade_point += (3.3 * 2);
                                        tota_grade_point_current += (3.3 * 2);
                                        total_credit_hours_deficit += 2;
                                        total_credit_hours += 2;
                                        tbodye3.innerHTML += `
                            <tr>
                                <td>New course</td>
                                <td>2</td>
                                <td>-</td>
                                <td>B+</td>
                            </tr>`
                                        third_option_deficit -= (2 * 1.33);
                                        total_Hours += 2;
                                        j++
                                    } else if (total_Hours + 2 < credit_hours_for_this_Semester) {
                                        total_grade_point += (2.7 * 3);
                                        tota_grade_point_current += (2.7 * 3);
                                        total_credit_hours_deficit += 3;
                                        total_credit_hours += 3;
                                        tbodye3.innerHTML += `
                            <tr>
                                <td>New course</td>
                                <td>3</td>
                                <td>-</td>
                                <td>B-</td>
                            </tr>`
                                        third_option_deficit -= ((2 * 0.66));
                                        total_Hours += 3;
                                    }
                                }
                                check3.innerHTML = `<input type="checkbox" name="BoxSelect[]" id="check_3" required>`;
                                if (total_credit_hours_deficit == 0 && ((total_point_first - total_point_to) + total_grade_point) == 0) {
                                    cumulative_gpa = 0;
                                } else {
                                    cumulative_gpa = (((total_point_first - total_point_to) + total_grade_point) / total_credit_hours_deficit);
                                }
                                tbodye3.innerHTML += `
                            <tr>
                                <td colspan='3'>Cumulative GPA</td>
                                <td>${cumulative_gpa.toFixed(3)}</td>
                            </tr>`

                            }




                        } else {
                            result.textContent = `The GPA must be between 0 and 4.`
                        }
                        total_Hours = 0;
                        total_grade_point = 0;
                        total_repeted_hours = 0;
                        total_point_to = 0;
                        tota_grade_point_current = 0;
                        total_credit_hours = 0;
                        total_credit_hours_deficit = parseFloat(document.getElementById("completed_Credit_Hours_deficit").value);
                        // The option fourth 
                        if (ceheckcurrentGPA_deficit >= 0 && ceheckcurrentGPA_deficit <= 4) {
                            if (fourth_option_deficit <= 0) {
                                result.textContent = `Good academic standing your Deficit is ${deficit}`;
                            } else {
                                result.textContent = `Propation standing your Deficit is ${deficit_dd}`;
                                thead4.innerHTML = `
                        <th><label for="current-GPA">status</label></th>
                        <th><label for="credit-hours">Credit Hours</label></th>
                        <th><label for="credit-hours">Previous grade</label></th>
                        <th><label for="cumulative-GPA">Expected Grade</label></th>`;
                                for (var i = 0; i < 7; i++) {
                                    if (fourth_option_deficit >= 0) {
                                        if (course_grade_deficit[i] == 0 && course_hours_repeat[i] != 0 && j == 0) {
                                            total_point_to += (course_grade_deficit[i] * course_hours_repeat[i]);
                                            total_grade_point += (3.0 * course_hours_repeat[i]);
                                            tota_grade_point_current += (3.0 * course_hours_repeat[i]);
                                            total_credit_hours_deficit += 0;
                                            total_credit_hours += course_hours_repeat[i];
                                            total_repeted_hours += course_hours_repeat[i];
                                            tbodye4.innerHTML += `
                        <tr>
                            <td>Repeat the course</td>
                            <td>${course_hours_repeat[i]}</td>
                            <td>F</td>
                            <td>B</td>
                        </tr>`
                                            fourth_option_deficit -= (course_hours_repeat[i] * 3.0);
                                            total_Hours += course_hours_repeat[i];
                                            j++;

                                        } else if (course_grade_deficit[i] == 0 && course_hours_repeat[i] != 0 && total_Hours + 2 < credit_hours_for_this_Semester) {
                                            total_point_to += (course_grade_deficit[i] * course_hours_repeat[i]);
                                            total_grade_point += (2.3 * course_hours_repeat[i]);
                                            tota_grade_point_current += (2.3 * course_hours_repeat[i]);
                                            total_credit_hours_deficit += 0;
                                            total_credit_hours += course_hours_repeat[i];
                                            total_repeted_hours += course_hours_repeat[i];
                                            tbodye4.innerHTML += `
                        <tr>
                            <td>Repeat the course</td>
                            <td>${course_hours_repeat[i]}</td>
                            <td>F</td>
                            <td>C+</td>
                        </tr>`
                                            fourth_option_deficit -= (course_hours_repeat[i] * 2.3);
                                            total_Hours += course_hours_repeat[i];
                                        }
                                    }
                                }
                                j = 0;
                                for (var i = 0; i < 7; i++) {

                                    if (j == 0 && total_Hours + 2 < credit_hours_for_this_Semester) {
                                        total_grade_point += (3.3 * 3);
                                        tota_grade_point_current += (3.3 * 3);
                                        total_credit_hours_deficit += 3;
                                        total_credit_hours += 3;
                                        tbodye4.innerHTML += `
                        <tr>
                            <td>New course</td>
                            <td>3</td>
                            <td>-</td>
                            <td>B+</td>
                        </tr>`
                                        fourth_option_deficit -= (3 * 1.33);
                                        total_Hours += 3;
                                        j++
                                    } else if (j == 1 && total_Hours + 2 < credit_hours_for_this_Semester) {
                                        total_grade_point += (2.3 * 2);
                                        tota_grade_point_current += (2.3 * 2);
                                        total_credit_hours_deficit += 2;
                                        total_credit_hours += 2;
                                        tbodye4.innerHTML += `
                        <tr>
                            <td>New course</td>
                            <td>2</td>
                            <td>-</td>
                            <td>C+</td>
                        </tr>`
                                        fourth_option_deficit -= (2 * 0.33);
                                        total_Hours += 2;
                                        j++
                                    } else if (total_Hours + 2 < credit_hours_for_this_Semester) {
                                        total_grade_point += (2.7 * 3);
                                        tota_grade_point_current += (2.7 * 3);
                                        total_credit_hours_deficit += 3;
                                        total_credit_hours += 3;
                                        tbodye4.innerHTML += `
                        <tr>
                            <td>New course</td>
                            <td>3</td>
                            <td>-</td>
                            <td>B-</td>
                        </tr>`
                                        fourth_option_deficit -= (2 * 0.66);
                                        total_Hours += 3;
                                    }
                                }
                                check4.innerHTML = `<input type="checkbox" name="BoxSelect[]" id="check_4" required>`;
                                if (total_credit_hours_deficit == 0 && ((total_point_first - total_point_to) + total_grade_point) == 0) {
                                    cumulative_gpa = 0;
                                } else {
                                    cumulative_gpa = (((total_point_first - total_point_to) + total_grade_point) / total_credit_hours_deficit);
                                }
                                tbodye4.innerHTML += `
                        <tr>
                            <td colspan='3'>Cumulative GPA</td>
                            <td>${cumulative_gpa.toFixed(3)}</td>
                        </tr>`

                            }




                        } else {
                            result.textContent = `The GPA must be between 0 and 4.`
                        }
                        total_Hours = 0;
                        total_grade_point = 0;
                        total_repeted_hours = 0;
                        total_point_to = 0;
                        tota_grade_point_current = 0;
                        total_credit_hours = 0;
                        total_credit_hours_deficit = parseFloat(document.getElementById("completed_Credit_Hours_deficit").value);
                        // The option fifth 
                        if (ceheckcurrentGPA_deficit >= 0 && ceheckcurrentGPA_deficit <= 4) {
                            if (fifth_option_deficit <= 0) {
                                result.textContent = `Good academic standing your Deficit is ${deficit}`;
                            } else {
                                result.textContent = `Propation standing your Deficit is ${deficit_dd}`;
                                thead5.innerHTML = `
                    <th><label for="current-GPA">status</label></th>
                    <th><label for="credit-hours">Credit Hours</label></th>
                    <th><label for="credit-hours">Previous grade</label></th>
                    <th><label for="cumulative-GPA">Expected Grade</label></th>`;

                                j = 0;
                                for (var i = 0; i < 7; i++) {

                                    if (j == 0 && total_Hours + 2 < credit_hours_for_this_Semester) {
                                        total_grade_point += (2.7 * 3);
                                        tota_grade_point_current += (2.7 * 3);
                                        total_credit_hours_deficit += 3;
                                        total_credit_hours += 3;
                                        tbodye5.innerHTML += `
                    <tr>
                        <td>New course</td>
                        <td>3</td>
                        <td>-</td>
                        <td>B-</td>
                    </tr>`
                                        fifth_option_deficit -= (3 * 0.667);
                                        total_Hours += 3;
                                        j++
                                    } else if (j == 1 && total_Hours + 2 < credit_hours_for_this_Semester) {
                                        total_grade_point += (3.0 * 2);
                                        tota_grade_point_current += (3.0 * 2);
                                        total_credit_hours_deficit += 2;
                                        total_credit_hours += 2;
                                        tbodye5.innerHTML += `
                    <tr>
                        <td>New course</td>
                        <td>2</td>
                        <td>-</td>
                        <td>B</td>
                    </tr>`
                                        fifth_option_deficit -= (2 * 1.00);
                                        total_Hours += 2;
                                        j++
                                    } else if (total_Hours < credit_hours_for_this_Semester) {
                                        total_grade_point += (3.3 * 3);
                                        tota_grade_point_current += (3.3 * 3);
                                        total_credit_hours_deficit += 3;
                                        total_credit_hours += 3;
                                        tbodye5.innerHTML += `
                    <tr>
                        <td>New course</td>
                        <td>3</td>
                        <td>-</td>
                        <td>B+</td>
                    </tr>`
                                        fifth_option_deficit -= (3 * 1.333);
                                        total_Hours += 3;
                                    }
                                }
                                check5.innerHTML = `<input type="checkbox" name="BoxSelect[]" id="check_5" required>`;
                                if (total_credit_hours_deficit == 0 && ((total_point_first - total_point_to) + total_grade_point) == 0) {
                                    cumulative_gpa = 0;
                                } else {
                                    cumulative_gpa = (((total_point_first - total_point_to) + total_grade_point) / total_credit_hours_deficit);
                                }
                                tbodye5.innerHTML += `
                    <tr>
                        <td colspan='3'>cumulative GPA</td>
                        <td>${cumulative_gpa.toFixed(3)}</td>
                    </tr>`
                                print_btn.innerHTML = `<input type="button" id="print_btn" value="Print" onclick="printPage();">`;
                            }


                        } else {
                            result.textContent = `The GPA must be between 0 and 4.`
                        }
                        total_Hours = 0;
                        total_grade_point = 0;
                        total_repeted_hours = 0;
                        total_point_to = 0;
                        tota_grade_point_current = 0;
                        total_credit_hours = 0;
                        total_credit_hours_deficit = parseFloat(document.getElementById("completed_Credit_Hours_deficit").value);
                        // The option Sixth
                        if (ceheckcurrentGPA_deficit >= 0 && ceheckcurrentGPA_deficit <= 4) {
                            if (sixth_option_deficit <= 0) {
                                result.textContent = `Good academic standing your Deficit is ${deficit}`;
                            } else {
                                result.textContent = `Propation standing your Deficit is ${deficit_dd}`;
                                thead6.innerHTML = `
                    <th><label for="current-GPA">status</label></th>
                    <th><label for="credit-hours">Credit Hours</label></th>
                    <th><label for="credit-hours">Previous grade</label></th>
                    <th><label for="cumulative-GPA">Expected Grade</label></th>`;

                                j = 0;
                                for (var i = 0; i < 7; i++) {
                                    if (j == 0 && total_Hours + 2 < credit_hours_for_this_Semester) {
                                        total_grade_point += (2.3 * 3);
                                        tota_grade_point_current += (2.3 * 3);
                                        total_credit_hours_deficit += 3;
                                        total_credit_hours += 3;
                                        tbodye6.innerHTML += `
                    <tr>
                        <td>New course</td>
                        <td>3</td>
                        <td>-</td>
                        <td>C+</td>
                    </tr>`
                                        sixth_option_deficit -= (3 * 0.333);
                                        total_Hours += 3;
                                        j++
                                    } else if (j == 1 && total_Hours + 2 < credit_hours_for_this_Semester) {
                                        total_grade_point += (3.7 * 2);
                                        tota_grade_point_current += (3.7 * 2);
                                        total_credit_hours_deficit += 2;
                                        total_credit_hours += 2;
                                        tbodye6.innerHTML += `
                    <tr>
                        <td>New course</td>
                        <td>2</td>
                        <td>-</td>
                        <td>A-</td>
                    </tr>`
                                        sixth_option_deficit -= (2 * 1.667);
                                        total_Hours += 2;
                                        j++
                                    } else if (total_Hours + 2 < credit_hours_for_this_Semester) {
                                        total_grade_point += (2.7 * 3);
                                        tota_grade_point_current += (2.7 * 3);
                                        total_credit_hours_deficit += 3;
                                        total_credit_hours += 3;
                                        tbodye6.innerHTML += `
                    <tr>
                        <td>New course</td>
                        <td>3</td>
                        <td>-</td>
                        <td>B-</td>
                    </tr>`
                                        sixth_option_deficit -= (3 * 0.667);
                                        total_Hours += 3;
                                    }
                                }
                                check6.innerHTML = `<input type="checkbox" name="BoxSelect[]" id="check_6" required>`;
                                if (total_credit_hours_deficit == 0 && ((total_point_first - total_point_to) + total_grade_point) == 0) {
                                    cumulative_gpa = 0;
                                } else {
                                    cumulative_gpa = (((total_point_first - total_point_to) + total_grade_point) / total_credit_hours_deficit);
                                }
                                tbodye6.innerHTML += `
                    <tr>
                        <td colspan='3'>Cumulative GPA</td>
                        <td>${cumulative_gpa.toFixed(3)}</td>
                    </tr>`
                                print_btn.innerHTML = `<input type="button" id="print_btn" value="Print"  onclick="printPage();">`;
                            }


                        } else {
                            result.textContent = `The GPA must be between 0 and 4.`
                        }


                    }
                }
            }
        }
        else {
            error.textContent = "The credit hours for this Semester is invalid";
            error.style.color = "red";
            result.textContent = ``;
            thead1.innerHTML = ``;
            tbodyel.innerHTML = '';
            mindeficit.innerHTML = ``;
            thead2.innerHTML = ``;
            tbodye2.innerHTML = ``;
            thead3.innerHTML = ``;
            tbodye3.innerHTML = ``;
            thead4.innerHTML = ``;
            tbodye4.innerHTML = ``;
            thead5.innerHTML = ``;
            tbodye5.innerHTML = ``;
            thead6.innerHTML = ``;
            tbodye6.innerHTML = ``;
            print_btn.innerHTML = ``;
            check1.innerHTML = ``;
            check2.innerHTML = ``;
            check3.innerHTML = ``;
            check4.innerHTML = ``;
            check5.innerHTML = ``;
            check6.innerHTML = ``;
        }

    } else {
        error.textContent = "The total hours must be grater than 0";
        error.style.color = "red";
        result.textContent = ``;
        thead1.innerHTML = ``;
        tbodyel.innerHTML = '';
        mindeficit.innerHTML = ``;
        thead2.innerHTML = ``;
        tbodye2.innerHTML = ``;
        thead3.innerHTML = ``;
        tbodye3.innerHTML = ``;
        thead4.innerHTML = ``;
        tbodye4.innerHTML = ``;
        thead5.innerHTML = ``;
        tbodye5.innerHTML = ``;
        thead6.innerHTML = ``;
        tbodye6.innerHTML = ``;
        print_btn.innerHTML = ``;
        check1.innerHTML = ``;
        check2.innerHTML = ``;
        check3.innerHTML = ``;
        check4.innerHTML = ``;
        check5.innerHTML = ``;
        check6.innerHTML = ``;
    }


}

function delete_deficit_result() {
    const result = document.querySelector(".deficit_GPA_result");
    const thead1 = document.querySelector(".thead-deficit");
    const tbodyel = document.querySelector(".tbody-deficit");
    var mindeficit = document.querySelector(".deficit_GPA_final_result");
    const thead2 = document.querySelector(".thead-deficit_2option");
    const tbodye2 = document.querySelector(".tbody-deficit_2option");
    const thead3 = document.querySelector(".thead-deficit_3option");
    const tbodye3 = document.querySelector(".tbody-deficit_3option");
    const thead4 = document.querySelector(".thead-deficit_4option");
    const tbodye4 = document.querySelector(".tbody-deficit_4option");
    const thead5 = document.querySelector(".thead-deficit_5option");
    const tbodye5 = document.querySelector(".tbody-deficit_5option");
    const thead6 = document.querySelector(".thead-deficit_6option");
    const tbodye6 = document.querySelector(".tbody-deficit_6option");
    var error = document.getElementById("error_deficit");
    const check1_deficit = document.getElementById("check_1");
    const check2_deficit = document.getElementById("check_2");
    const check3_deficit = document.getElementById("check_3");
    const check4_deficit = document.getElementById("check_4");
    const check5_deficit = document.getElementById("check_5");
    const check6_deficit = document.getElementById("check_6");

    const print_btn = document.getElementById("print_btn");
    result.textContent = ``;
    thead1.innerHTML = ``;
    tbodyel.innerHTML = '';
    mindeficit.innerHTML = ``;
    thead2.innerHTML = ``;
    tbodye2.innerHTML = ``;
    thead3.innerHTML = ``;
    tbodye3.innerHTML = ``;
    thead4.innerHTML = ``;
    tbodye4.innerHTML = ``;
    thead5.innerHTML = ``;
    tbodye5.innerHTML = ``;
    thead6.innerHTML = ``;
    tbodye6.innerHTML = ``;
    error.textContent = "";
    check1_deficit.remove();
    check2_deficit.remove();
    check3_deficit.remove();
    check4_deficit.remove();
    check5_deficit.remove();
    check6_deficit.remove();
    print_btn.remove();

}

function printPage() {
    var checkboxes = document.querySelectorAll('input[type="checkbox"]');
    var isChecked = false;

    for (var i = 0; i < checkboxes.length; i++) {
        if (checkboxes[i].checked) {
            isChecked = true;
            break;
        }
    }

    if (!isChecked) {
        alert("Please check at least one checkbox.");
        return false; // Prevent form submission
    } else{
                var check = [document.getElementById("check_1"),
                document.getElementById("check_2"),
                document.getElementById("check_3"),
                document.getElementById("check_4"),
                document.getElementById("check_5"),
                document.getElementById("check_6"),
                ];

                var body = document.getElementById("body").innerHTML;
                var option;
                for (var i = 0; i < check.length; i++) {
                    if (check[i].checked) {
                        option += document.getElementById("print-" + (i + 1) + "-table").innerHTML;
                    }
                }
                document.getElementById("body").innerHTML = option;
                window.print();
                document.getElementById("body").innerHTML = body;
    };
    
}

