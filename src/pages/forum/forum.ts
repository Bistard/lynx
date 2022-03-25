import { Button } from "src/base/button";
import { IAccessor } from "src/workbench";
import { EPages, Page } from "../page";

export class ForumPage extends Page {

    constructor(accessor: IAccessor) {
        super(EPages.Forum, accessor);
    }

    protected create(): void {
        
        const name = document.createElement('div');
        name.className = 'name button';
        name.innerHTML = 'Forum Name';
        const nameBtn = new Button();
        nameBtn.render(name);
        nameBtn.onDidClick(() => {
            this.accessor.displayPage(EPages.Timetable);
        });

        const box = document.createElement('div');
        box.className = 'post-box';

        for (let i = 1; i < 8; i++) {
            box.appendChild(this._createPost(i));
        }

        box.addEventListener('click', () => {
            // TODO
        });

        const back = document.createElement('div');
        back.className = 'back-button button';
        back.innerHTML = 'Back';
        const button2 = new Button();
        button2.render(back);
        button2.onDidClick(() => {
            this.accessor.displayPage(this.accessor.pageStack.pop()!, true);
        });

        this.element.appendChild(name);
        this.element.appendChild(box);
        this.element.appendChild(back);
    }

    private _createPost(number: number): HTMLElement {
        const post = document.createElement('div');
        post.className = 'post';

        const header = document.createElement('div');
        header.className = 'text header';
        header.innerHTML = `Post ${number}`;

        const content = document.createElement('div');
        content.className = 'text';
        content.innerHTML = 'Post Content...';

        post.appendChild(header);
        post.appendChild(content);

        return post;
    }

    public dispose(): void {
        // dothing
    }

}