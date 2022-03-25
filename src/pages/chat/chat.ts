import { Button } from "src/base/button";
import { IAccessor } from "src/workbench";
import { EPages, Page } from "../page";

export class ChatPage extends Page {

    constructor(accessor: IAccessor) {
        super(EPages.Chat, accessor);
    }

    public create(): void {
        this.element.appendChild(this._createTop());
        this.element.appendChild(this._createBottom());
    }

    private _createTop(): HTMLElement {
        const top = document.createElement('div');
        top.className = 'top-part';

        const box = document.createElement('div');
        box.className = 'box';

        for (let i = 0; i < 6; i++) {
            const message = document.createElement('div');
            message.className = 'message';
            message.addEventListener('click', () => {
                this.accessor.displayPage(EPages.FredRemovePage);
            });
            box.appendChild(message);
        }

        top.appendChild(box);
        return top;
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
            if (this.accessor.currentPage === EPages.Chat) return;
            this.accessor.displayPage(EPages.Chat);
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