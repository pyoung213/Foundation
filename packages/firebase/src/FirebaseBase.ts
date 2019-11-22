import { forOwn } from "foundation-low";

interface Options {
    db: any;
}

export default class FirebaseBase<T extends FirebaseBase<T>> {
    protected db: any;
    protected chain: any;

    constructor(options: Options) {
        this.db = options.db;
    }

    collection(this: T, name: string): T {
        this.chain = this.db.collection(name);

        return this;
    }

    doc(this: T, ref: string): T {
        this.chain = this.chain.doc(ref);

        return this;
    }

    protected async get(): Promise<Array<any> | any | undefined> {
        const snapshot = await this.chain.get();

        return this.getDataFromSnapshot(snapshot);
    }

    protected getDataFromSnapshot(snapshot: any): Array<any> | any {
        if (snapshot.data) {
            if (!snapshot.exists) {
                return undefined;
            }

            return {
                id: snapshot.id,
                ...snapshot.data()
            };
        }

        const docs = [] as Array<any>;
        snapshot.forEach((doc: any) => {
            docs.push({
                id: doc.id,
                ...doc.data()
            });
        });

        return docs;
    }

    where(this: T, query: object | Array<any>): T {
        forOwn(query, (value: Array<any> | string, key: string) => {
            switch (true) {
                case Array.isArray(value):
                    this.chain = this.chain.where(key, value[0], value[1]);
                    break;

                default:
                    this.chain = this.chain.where(key, "==", value);
                    break;
            }
        });

        return this;
    }

    limit(this: T, amount: number): T {
        this.chain = this.chain.limit(amount);

        return this;
    }

    orderBy(this: T, order: string): T {
        this.chain = this.chain.orderBy(order);

        return this;
    }
}
