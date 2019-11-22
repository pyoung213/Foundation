import FirebaseBase from "./firebaseBase";

interface Options {
    db: any;
}

export default class Firebase extends FirebaseBase<Firebase> {
    constructor(options: Options) {
        super({
            db: options.db
        });

        this.db = options.db;
    }

    getServerTimestamp(): any {
        return this.db.FieldValue.serverTimestamp();
    }

    add(entity: object): any {
        return this.chain.add(entity);
    }

    set(entity: object): any {
        return this.chain.set(entity);
    }

    update(entity: object): any {
        return this.chain.update(entity);
    }

    delete(): Promise<Record<string, any>> {
        return this.chain.delete();
    }
}
