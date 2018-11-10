import * as React from "react";
import * as ReactDOM from "react-dom";
import TestModule from "./testmodule";
import * as image from "../../../assets/image.bmp";

window.addEventListener("load",()=>{
    ReactDOM.render(<TestModule content={"Hello"}/>,document.getElementById("test"));
    const img=document.createElement("img");
    img.src=image;
    document.body.appendChild(img);
});

