import { Button } from "src/base/button";
import { IAccessor } from "src/workbench";
import { EPages, Page } from "../page";

export class AccountPage extends Page {

    constructor(accessor: IAccessor) {
        super(EPages.Account, accessor);
    }

    public create(): void {
        
        const icon = document.createElement('img');
        icon.className = 'icon';

        const setPicture = document.createElement('div');
        setPicture.className = 'set-picture text';
        setPicture.innerHTML = 'SET PROFILE PICTURE';

        const distrib = document.createElement('div');
        distrib.className = 'distrib text';
        distrib.innerHTML = 'DISTRIBUTION';

        const intrests = document.createElement('div');
        intrests.className = 'intrests text';
        intrests.innerHTML = 'INTERESTS';

        const back = document.createElement('div');
        back.className = 'back-button button';
        back.innerHTML = 'Back';
        const button2 = new Button();
        button2.render(back);
        button2.onDidClick(() => {
            this.accessor.displayPage(this.accessor.pageStack.pop()!, true);
        });

        this.element.appendChild(icon);
        this.element.appendChild(setPicture);
        this.element.appendChild(distrib);
        this.element.appendChild(intrests);
        this.element.appendChild(back);
    }

    public dispose(): void {
        // empty
    }

}