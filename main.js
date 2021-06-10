var images = ["family.jpeg", "me.jpeg", "brother.jpeg", "mother.jpeg", "father.jpeg", "gm.jpeg", "gf.jpeg"];

var names = ["My Family", "Siya", "Heet", "Nisha", "Nikunj", "Gaauriben", "Kishorkumar"];

var i = 0;

function update()
{
    i++;
    var numbers_of_family_member_in_array = 6
    if(i > numbers_of_family_member_in_array){
        i = 0;
    }
    var updatedImage = images[i];
    var updatednames = names[i];
    document.getElementById("family_member_image").src = updatedImage;
    document.getElementById("family_member_name").innerHTML = updatednames;
}