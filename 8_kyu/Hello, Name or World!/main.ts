export const hello = (name: string = ""): string => `Hello, ${name === "" ? 
      "World" : name[0].toUpperCase() + name.slice(1).toLowerCase()}!`;