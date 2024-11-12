/*var div = document.createElement("div");
div.style.width = "100px";
div.style.height = "100px";
div.style.background = "red";
div.style.color = "white";
div.innerHTML = "Hello";

document.getElementById("contact-content").appendChild(div);

*/
let personsXMLData = `<persons>

<person1 id="1">
    <name> ilyass Samoudi</name>
    <comment> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus sequi, doloremque ad, quidem odit adipisci, iusto ut beatae quos repudiandae autem ea voluptates vel recusandae similique repellendus saepe alias voluptatum?</comment>
</person1>
<person2 id="2">
    <name> zakaria</name>
    <comment> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus sequi, doloremque ad, quidem odit adipisci, iusto ut beatae quos repudiandae autem ea voluptates vel recusandae similique repellendus saepe alias voluptatum?</comment>
</person2 >
<person3>
    <name> zakaria zakaria</name>
    <comment> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus sequi, doloremque ad, quidem odit adipisci, iusto ut beatae quos repudiandae autem ea voluptates vel recusandae similique repellendus saepe alias voluptatum?</comment>

</person3>
</persons>`; 

let xmlParser = new DOMParser()
personsXML = xmlParser.parseFromString