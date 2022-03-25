import { Button } from "src/base/button";
import { IAccessor } from "src/workbench";
import { EPages, Page } from "../page";

export class TimetablePage extends Page {

    constructor(accessor: IAccessor) {
        super(EPages.Timetable , accessor);
    }

    public create(): void {
        
        const icon = document.createElement('img');
        icon.className = 'icon';

        const text = document.createElement('div');
        text.className = 'text';
        text.innerHTML = 'Timetable';

        const schedule = document.createElement('img');
        schedule.className = 'schedule';

        const back = document.createElement('div');
        back.className = 'back-button button';
        back.innerHTML = 'Back';
        const button2 = new Button();
        button2.render(back);
        button2.onDidClick(() => {
            this.accessor.displayPage(this.accessor.pageStack.pop()!, true);
        });

        this.element.appendChild(icon);
        this.element.appendChild(text);
        this.element.appendChild(schedule);
        this.element.appendChild(back);
    }

    public dispose(): void {
        // empty
    }

}