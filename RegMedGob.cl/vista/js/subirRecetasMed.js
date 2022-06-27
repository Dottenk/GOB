$(document).ready(function () {

    var submit_click = document.querySelectorAll(".submit_button");
    var next_click = document.getElementsByClassName("next_button")
    console.log(next_click)
    var main_form = document.querySelectorAll(".main");
    var step_list = document.querySelectorAll(".progress-bar li");
    var num = document.querySelector(".step-number");
    var step_num_content = document.querySelectorAll('.step-number-content');
    var elem_step_num_content = [...step_num_content]
    console.log(elem_step_num_content)
    var eye = document.querySelectorAll(".fa-eye");
    var share = document.querySelectorAll(".fa-share-alt");
    var name = document.querySelector("#txtNombre");
    var lastname = document.querySelector("#txtApellido"); 
    var rut = document.querySelector("#txtRut");
    var diag = document.querySelector("#txtDiag");
    var reposo = document.querySelector("#sltcReposo");

    var username = document.querySelector("#user_name");
    var shownname = document.querySelector(".shown_name");

    let formnumber = 0;



    Array.prototype.forEach.call(next_click, function (next_click_form) {
        next_click_form.addEventListener('click', function () {
            if (!validateform()) {
                return false
            }
            formnumber++;
            updateform();
            progress_forward();
            contentchange();
            

        });
    });

    name.addEventListener("focusout", function(){
        document.querySelector("#lblNombre").innerHTML = document.getElementById("txtNombre").value
    });

    lastname.addEventListener("focusout", function () {
        document.querySelector("#lblApellido").innerHTML = " "+document.getElementById("txtApellido").value
    });

    rut.addEventListener("focusout", function () {
        document.querySelector("#lblRut").innerHTML = document.getElementById("txtRut").value
    });

    diag.addEventListener("focusout", function () {
        document.querySelector("#lblDiag").innerHTML = document.getElementById("txtDiag").value + " | "
    });
    
    reposo.addEventListener("focusout", function () {
        document.querySelector("#lblReposo").innerHTML = "  Reposo: "+document.getElementById("sltcReposo").value
    });

    var back_click = document.querySelectorAll(".back_button");
    back_click.forEach(function (back_click_form) {
        back_click_form.addEventListener('click', function () {
            formnumber--;
            updateform();
            progress_backward();
            contentchange();
        });
    });

    
    submit_click.forEach(function (submit_click_form) {
        submit_click_form.addEventListener('click', function () {
            shownname.innerHTML = username.value;
            formnumber++;
            updateform();
        });
    });

    for (let i = 0; i < eye.length; i++) {
        eye[i].addEventListener("click", function () {
            if (!eye[i].classList.contains("eye")){
                eye[i].classList.toggle("eye");
            }
            
        });
    }

    for (let i = 0; i < share.length; i++) {
        share[i].addEventListener("click", function () {
            share[i].classList.toggle("share");
        });
    }



    function updateform() {
        main_form.forEach(function (mainform_number) {
            mainform_number.classList.remove('active');
        })
        main_form[formnumber].classList.add('active');
    }

    function progress_forward() {
        /* step_list.forEach(list => {

            list.classList.remove('active');

        }); */


        num.innerHTML = formnumber + 1;
        step_list[formnumber].classList.add('active');
    }

    function progress_backward() {
        var form_num = formnumber + 1;
        step_list[form_num].classList.remove('active');
        num.innerHTML = form_num;
    }


    function contentchange() {
        elem_step_num_content.forEach(function (content) {
            content.classList.remove('active');
            content.classList.add('d-none');
        });
        step_num_content[formnumber].classList.add('active');
    }


    function validateform() {
        validate = true;
        var validate_inputs = document.querySelectorAll(".main.active input");
        validate_inputs.forEach(function (vaildate_input) {
            vaildate_input.classList.remove('warning');
            if (vaildate_input.hasAttribute('require')) {
                if (vaildate_input.value.length == 0) {
                    validate = false;
                    vaildate_input.classList.add('warning');
                }
            }
        });
        return validate;

    }

});





