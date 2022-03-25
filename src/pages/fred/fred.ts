import { Button } from "src/base/button";
import { IAccessor } from "src/workbench";
import { EPages, Page } from "../page";

export class FredRemovePage extends Page {

    constructor(accessor: IAccessor) {
        super(EPages.FredRemovePage, accessor);
    }

    public create(): void {
        this.element.classList.add(EPages.FredRemovePage);
        
        const icon = document.createElement('img');
        icon.className = 'icon';

        const atText = document.createElement('div');
        atText.className = 'at-text';
        atText.innerHTML = '@Fredie_25';

        const protrait = document.createElement('img');
        protrait.className = 'protrait';

        const intro = document.createElement('div');
        intro.className = 'intro';
        intro.innerHTML = 'Student at UCL. Hi, my name is Fred, I am intrested in FOOTBAL and Flnance.';

        const remove = document.createElement('div');
        remove.className = 'remove-button button';
        remove.innerHTML = 'Remove friend';
        const button1 = new Button();
        button1.render(remove);
        button1.onDidClick(() => {
            // do nothing
        });
        
        const back = document.createElement('div');
        back.className = 'back-button button';
        back.innerHTML = 'Back';
        const button2 = new Button();
        button2.render(back);
        button2.onDidClick(() => {
            // TODO
        });
        
        

        this.element.appendChild(icon);
        this.element.appendChild(atText);
        this.element.appendChild(protrait);
        this.element.appendChild(intro);
        this.element.appendChild(remove);
    }

    public dispose(): void {
        // empty
    }

}