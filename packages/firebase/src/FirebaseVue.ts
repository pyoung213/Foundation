import Vue from "vue";
import { FirebaseBase } from "./FirebaseBase";

interface Options {
    db: any;
    component: Vue;
    key: string;
}

export class FirebaseVue extends FirebaseBase<FirebaseVue> {
    private component: Record<string, any>;
    private key: string;
    public unsubscribe: () => void;

    constructor(options: Options) {
        super({
            db: options.db
        });

        this.component = options.component;
        this.key = options.key;
        this.unsubscribe = () => 0;
    }

    async getOnce<T, S>(func: (data: T) => Promise<S> | S): Promise<any> {
        let data = await this.get();
        if (func && data) {
            data = await func(data);
        }

        this.component[this.key] = data;
        this.component.$forceUpdate();
    }

    sync(func: Function): any {
        this.unsubscribe = this.chain.onSnapshot(async (snapshot: any) => {
            let data = this.getDataFromSnapshot(snapshot);

            if (func && data) {
                data = await func(data);
            }
            this.component[this.key] = data;
            this.component.$forceUpdate();
        });
    }
}
