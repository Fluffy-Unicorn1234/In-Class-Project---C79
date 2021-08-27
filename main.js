name_of_the_person_array = [];

function submit()
{
    
    var name_1 = document.getElementById("name_of_the_person_1").value;
    var name_1 = document.getElementById("name_of_the_person_2").value;
    var name_1 = document.getElementById("name_of_the_person_3").value;
    var name_1 = document.getElementById("name_of_the_person_4").value;

    name_of_the_person_array.push(name_1);
    name_of_the_person_array.push(name_2);
    name_of_the_person_array.push(name_3);
    name_of_the_person_array.push(name_4);

    console.log(name_of_the_person_array);

    document.getElementById("display_name").innerHTML = name_of_the_person_array;
    document.getElementById("submit_button").style.display = "none";
    document.getElementById("sort_button").style.display = "inline-block";

}

function sorting()
{
    name_of_the_person_array.sort();
    console.log(name_of_the_person_array);
    document.getElementById("display_name").innerHTML = name_of_the_person_array;
}