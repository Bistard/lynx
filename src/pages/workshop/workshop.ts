import { Button } from "src/base/button";
import { IAccessor } from "src/workbench";
import { EPages, Page } from "../page";

export class WorkshopPage extends Page {

    constructor(accessor: IAccessor) {
        super(EPages.Workshop, accessor);
    }

    public create(): void {
        
        const icon = document.createElement('img');
        icon.className = 'icon';
        
        const img = document.createElement('img');
        img.className = 'image';

        const registerButton = document.createElement('div');
        registerButton.className = 'register-button button';
        registerButton.innerHTML = 'Register';
        const button1 = new Button();
        button1.render(registerButton);
        button1.onDidClick(() => {
            this.accessor.displayPage(EPages.FredRemovePage);
        });

        const box = document.createElement('div');
        box.className = 'detail-box';

        const descrip = document.createElement('div');
        descrip.className = 'text description';
        descrip.innerHTML = 'A coding workshop to enhance personal skill';

        const date = document.createElement('div');
        date.className = 'text date';
        date.innerHTML = 'Date: 12/31 19:00 PM 2021';

        const link = document.createElement('div');
        link.className = 'text';
        link.innerHTML = 'Zoom link: 1361asdijqiwem1.zoom';

        box.appendChild(descrip);
        box.appendChild(date);
        box.appendChild(link);
        box.addEventListener('click', () => {
            this.accessor.displayPage(EPages.FredRemovePage);
        });
        
        const back = document.createElement('div');
        back.className = 'back-button button';
        back.innerHTML = 'Back';
        const button2 = new Button();
        button2.render(back);
        button2.onDidClick(() => {
            this.accessor.displayPage(this.accessor.pageStack.pop()!, true);
        });
        
        this.element.appendChild(icon);
        this.element.appendChild(img);
        this.element.appendChild(registerButton);
        this.element.appendChild(box);
        this.element.appendChild(back);
    }

    public dispose(): void {
        // empty
    }

}