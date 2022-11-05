student_array=[];

function submit()
{
    var display_array=[];

    for(var i=1; i<=4; i++)
    {
        var studentname=document.getElementById("student"+i).value;
        console.log(studentname);
        student_array.push(studentname);

    }
    console.log(student_array);

    var arraylength=student_array.length;
    console.log(arraylength);

    for(var j=0; j<arraylength; j++)
    {
        display_array.push("<h4>NAME-"+student_array[j]+"</h4>");
        console.log(display_array);

    }

    console.log(display_array);
    document.getElementById("displaynamewithcommas").innerHTML=display_array;

    var nocommas=display_array.join(" ");
    console.log(nocommas);

    document.getElementById("displaynamewithoutcommas").innerHTML=nocommas;

    document.getElementById("submiting").style.display="none";
    document.getElementById("sort").style.display="inline-block";

    

}

function sorting()
{
    student_array.sort();
    console.log(student_array);

    var sorted_array=[];
    var legnthofarray=student_array.length;
    console.log(legnthofarray);

    for(var k=0; k<legnthofarray; k++)
    {

        sorted_array.push("<h4> NAME-"+student_array[k]+"</h4>");
        console.log(sorted_array);

    }

    var removecommas=sorted_array.join(" ");
    console.log(removecommas);
    document.getElementById("displaynamewithoutcommas").innerHTML=removecommas;
}