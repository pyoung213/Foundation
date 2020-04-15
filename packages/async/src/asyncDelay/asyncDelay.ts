export function asyncDelay(milliseconds: number): Promise<void> {
    return new Promise((resolve: Function) => {
        setTimeout(() => {
            resolve();
        }, milliseconds);
    });
}
