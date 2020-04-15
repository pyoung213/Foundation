export function delay(milliseconds: number): Promise<void> {
    return new Promise((resolve: Function) => {
        setTimeout(() => {
            resolve();
        }, milliseconds);
    });
}
