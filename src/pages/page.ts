import { IAccessor } from "src/workbench";

let uuid = 0;

export const PAGE_MANAGER = new Map<string, Page>();

export const enum EPages {
    Login1 = 'login1',
    Login2 = 'login2',
    Event = 'event',
    Forums = 'forums',
    FredRemovePage = 'fred-remove',
    FredAddPage = 'fred-add',
    Account = 'account',
    Notification = 'notification',
    Timetable = 'timetable',
    Map = 'map',
    Workshop = 'workshop',
    Forum = 'forum',
}

export abstract class Page {

    public readonly name: string;
    public readonly id: number = uuid++;

    public element: HTMLElement;

    protected accessor: IAccessor;

    constructor(name: string, accessor: IAccessor) {
        this.name = name;
        this.accessor = accessor;
        this.element = document.createElement('div');
        this.element.className = `page ${name}`;
        
        PAGE_MANAGER.set(name, this);
        this.create();
    }

    protected abstract create(): void;

    public abstract dispose(): void;
}
