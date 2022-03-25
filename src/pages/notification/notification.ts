import { Button } from "src/base/button";
import { IAccessor } from "src/workbench";
import { EPages, Page } from "../page";

export class NotificationPage extends Page {

    constructor(accessor: IAccessor) {
        super(EPages.Notification, accessor);
    }

    public create(): void {
        
        for (let i = 0; i < 4; i++) {
            this.element.appendChild(this._createBox());
        }
        
        const back = document.createElement('div');
        back.className = 'back-button button';
        back.innerHTML = 'Back';
        const button2 = new Button();
        button2.render(back);
        button2.onDidClick(() => {
            this.accessor.displayPage(this.accessor.pageStack.pop()!, true);
        });

        this.element.appendChild(back);
    }

    private _createBox(): HTMLElement {
        const box = document.createElement('div');
        box.className = 'noti-box';

        const header = document.createElement('div');
        header.className = 'text header';
        header.innerHTML = 'NOTIFICATION';

        const content = document.createElement('div');
        content.className = 'text';
        content.innerHTML = 'Finance forum event near you monday 6 PM regent park.';

        box.appendChild(header);
        box.appendChild(content);
        return box;
    }

    public dispose(): void {
        // empty
    }

}