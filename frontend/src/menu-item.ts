import { MenuItem, RootMenuItem } from "../../api/api";

export class FrontendMenuItem {
    path: string[];
    items: FrontendMenuItem[];
    constructor(readonly menuItem: MenuItem, previousPath: string[] = []) {
        this.path = [...previousPath, menuItem.route];
        this.items = menuItem.items.map((it) => new FrontendMenuItem(it, this.path));
    }
}

export class FrontendRootMenuItem {
    items: FrontendMenuItem[];
    constructor(readonly rootMenuItem: RootMenuItem) {
        this.items = rootMenuItem.items.map((it) => new FrontendMenuItem(it));
    }
}
