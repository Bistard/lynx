import { Button } from "src/base/button";
import { IAccessor } from "src/workbench";
import { EPages, Page } from "../page";

export class EventPage extends Page {

    constructor(accessor: IAccessor) {
        super(EPages.Event, accessor);
    }

    public create(): void {
        
        this.element.appendChild(this._createTop());
        this.element.appendChild(this._createMiddle());
        this.element.appendChild(this._createBottom());
    }

    private _createTop(): HTMLElement {
        const top = document.createElement('div');
        top.className = 'top-part';

        // left
        const left = document.createElement('div');
        left.className = 'left-part';

        const accountButton = document.createElement('div');
        accountButton.className = 'account-button button';
        accountButton.innerHTML = 'Account';
        const button1 = new Button();
        button1.render(accountButton);
        button1.onDidClick(() => {
            this.accessor.displayPage(EPages.Account);
        });

        const notificationButton = document.createElement('div');
        notificationButton.className = 'notification-button button';
        notificationButton.innerHTML = 'Notification';
        const button2 = new Button();
        button2.render(notificationButton);
        button2.onDidClick(() => {
            this.accessor.displayPage(EPages.Notification);
        });

        left.appendChild(accountButton);
        left.appendChild(notificationButton);

        // mid
        const mid = document.createElement('div');
        mid.className = 'mid-part';

        const icon = document.createElement('img');
        icon.className = 'icon';
        mid.appendChild(icon);

        // right
        const right = document.createElement('div');
        right.className = 'right-part';
        const mapButton = document.createElement('div');
        mapButton.className = 'map-button button';
        mapButton.innerHTML = 'Map';
        const button3 = new Button();
        button3.render(mapButton);
        button3.onDidClick(() => {
            this.accessor.displayPage(EPages.Map);
        });

        const timetableButton = document.createElement('div');
        timetableButton.className = 'timetable-button button';
        timetableButton.innerHTML = 'Timetable';
        const button4 = new Button();
        button4.render(timetableButton);
        button4.onDidClick(() => {
            this.accessor.displayPage(EPages.Timetable);
        });

        right.appendChild(mapButton);
        right.appendChild(timetableButton);

        // render
        top.appendChild(left);
        top.appendChild(mid);
        top.appendChild(right);
        return top;
    }

    private _createMiddle(): HTMLElement {
        const middle = document.createElement('div');
        middle.className = 'middle-part';

        const workshop = document.createElement('div');
        workshop.className = 'workshop button';
        workshop.innerHTML = 'Coding Skill Workshop';
        const workshopBtn = new Button();
        workshopBtn.render(workshop);
        workshopBtn.onDidClick(() => {
            this.accessor.displayPage(EPages.FredRemovePage);
        });

        const event1 = document.createElement('img');
        event1.className = 'event1';
        event1.addEventListener('click', () => {
            this.accessor.displayPage(EPages.Workshop);
        });

        const tour = document.createElement('div');
        tour.className = 'tour button';
        tour.innerHTML = 'Family Unit Tour';
        const tourBtn = new Button();
        tourBtn.render(tour);
        tourBtn.onDidClick(() => {
            this.accessor.displayPage(EPages.FredRemovePage);
        });

        const event2 = document.createElement('img');
        event2.className = 'event2';
        event2.addEventListener('click', () => {
            // do nothing here
        });

        middle.appendChild(workshop);
        middle.appendChild(event1);
        middle.appendChild(tour);
        middle.appendChild(event2);

        return middle;
    }

    private _createBottom(): HTMLElement {
        const bottom = document.createElement('div');
        bottom.className = 'bottom-part';

        const events = document.createElement('div');
        events.className = 'event-btn button';
        events.innerHTML = 'Events';
        const button1 = new Button();
        button1.render(events);
        button1.onDidClick(() => {
            if (this.accessor.currentPage === EPages.Event) return;
            this.accessor.displayPage(EPages.Event);
        });

        const forum = document.createElement('div');
        forum.className = 'forum-btn button';
        forum.innerHTML = 'Forums';
        const button2 = new Button();
        button2.render(forum);
        button2.onDidClick(() => {
            if (this.accessor.currentPage === EPages.Forums) return;
            this.accessor.displayPage(EPages.Forums);
        });

        const chat = document.createElement('div');
        chat.className = 'chat-btn button';
        chat.innerHTML = 'Chat';
        const button3 = new Button();
        button3.render(chat);
        button3.onDidClick(() => {
            // TODO
        });

        bottom.appendChild(events);
        bottom.appendChild(forum);
        bottom.appendChild(chat);
        return bottom;
    }

    public dispose(): void {
        // empty
    }

}