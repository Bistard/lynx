import { Button } from "src/base/button";
import { IAccessor } from "src/workbench";
import { EPages, Page } from "../page";

export class PostPage extends Page {

    constructor(accessor: IAccessor) {
        super(EPages.Post, accessor);
    }

    protected create(): void {
        
        const name = document.createElement('div');
        name.className = 'name button';
        name.innerHTML = 'Post Name';
        const nameBtn = new Button();
        nameBtn.render(name);
        nameBtn.onDidClick(() => {
            this.accessor.displayPage(EPages.FredRemovePage);
        });

        const box = document.createElement('div');
        box.className = 'post-box';

        const content = document.createElement('div');
        content.className = 'content';
        content.innerHTML = 'Post Content...';
        content.addEventListener('click', () => {
            this.accessor.displayPage(EPages.FredRemovePage);
        });

        const addComment = document.createElement('div');
        addComment.className = 'addComment button';
        addComment.innerHTML = 'Add Comment';
        addComment.addEventListener('click', () => {
            this.accessor.displayPage(EPages.FredRemovePage);
        });

        const like = document.createElement('div');
        like.className = 'like';

        const dislike = document.createElement('div');
        dislike.className = 'dislike';

        box.appendChild(content);
        box.appendChild(addComment);
        box.appendChild(like);
        box.appendChild(dislike);
        for (let i = 0; i < 3; i++) {
            const comment = document.createElement('div');
            comment.className = 'comment';
            comment.innerHTML = 'Comments by other users...';

            comment.addEventListener('click', () => {
                this.accessor.displayPage(EPages.FredRemovePage);
            });

            box.appendChild(comment);
        }

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

    public dispose(): void {
        // dothing
    }

}