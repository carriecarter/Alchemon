
/*exported ScreenDisplay */
/* globals Button */
'use strict';
const screenAreaTemplate = document.getElementById('screen-area-template');
class ScreenDisplay {
    constructor(buildingList, onClick){
        this.buildingList = buildingList;
        this.onClick = onClick;

    }
    
    render() {
        const dom = screenAreaTemplate.content.cloneNode(true);
        this.buttonArea = dom.getElementById('button-area');
        for(let i in this.buildingList){
            this.imageComponent = new Button(this.buildingList[i], this.onClick);
            this.buttonArea.appendChild(this.imageComponent.render());
        }
        return dom;
    }

}