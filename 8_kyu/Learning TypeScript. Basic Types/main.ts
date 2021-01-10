export enum Color {
    Red = 1,
    Green = 2,
    Blue = 4
};

export const var1Boolean: boolean = true;
export const var2Decimal: number = 13;
export const var3Hex: number = 0xf00d;
export const var4Binary: number = 0b111111;
export const var5Octal: number = 0o744;
export const var6String: string = "Hello, world!";
export const var7Array: number | string | Object[] = [1, 'test', {a: 3}, 4, 5];
export const var8NumericArray: Array<number> = [1, 2, 3, 4, 5];
export const var9Tuple: [string, number] = ['key', 12345];
export const var10Enum: Color = Color.Blue;
export const var11ArrayOfAny: Array<any> = [1, 'test', {a: 3}, 4, 5];
export const var12VoidFunction = (): void => {};
export const var13Null: null = null;
export const var14Undefined: undefined = undefined;
export const var15NeverFunction = (): never => {
    throw new Error();
};