import { Button } from "src/base/button";
import { IAccessor } from "src/workbench";
import { EPages, Page } from "../page";

export class MapPage extends Page {

    constructor(accessor: IAccessor) {
        super(EPages.Map , accessor);
    }

    public create(): void {
        this.element.classList.add(EPages.Map);
        
        const icon = document.createElement('img');
        icon.className = 'icon';

        const text = document.createElement('div');
        text.className = 'text';
        text.innerHTML = 'Event Map';
        
        const google = document.createElement('img');
        google.className = 'google-map';

        const back = document.createElement('div');
        back.className = 'back-button button';
        back.innerHTML = 'Back';
        const button1 = new Button();
        button1.render(back);
        button1.onDidClick(() => {
            this.accessor.displayPage(this.accessor.pageStack.pop()!, true);
        });

        this.element.appendChild(icon);
        this.element.appendChild(text);
        this.element.appendChild(google);
        this.element.appendChild(back);
    }

    public dispose(): void {
        // empty
    }

}