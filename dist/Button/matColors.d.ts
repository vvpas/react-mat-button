export declare const MatColors: Map<string, {
    50: string;
    100: string;
    200: string;
    300: string;
    400: string;
    500: string;
    600: string;
    700: string;
    800: string;
    900: string;
    1000: string;
    2000: string;
    4000: string;
    7000: string;
}>;
export declare type MatColorVariant = MatColorVariants.RED | MatColorVariants.YELLOW | MatColorVariants.TEAL | MatColorVariants.PURPLE | MatColorVariants.AMBER | MatColorVariants.BLUE | MatColorVariants.BLUE_GREY | MatColorVariants.BROWN | MatColorVariants.CYAN | MatColorVariants.DEEP_ORANGE | MatColorVariants.DEEP_PURPLE | MatColorVariants.GREEN | MatColorVariants.GREY | MatColorVariants.INDIGO | MatColorVariants.LIGHT_BLUE | MatColorVariants.LIGHT_GREEN | MatColorVariants.LIME | MatColorVariants.ORANGE | MatColorVariants.PINK;
export interface MatColorShadeTypes {
    50: string;
    100: string;
    200: string;
    300: string;
    400: string;
    500: string;
    600: string;
    700: string;
    800: string;
    900: string;
    1000: string;
    2000: string;
    A400: string;
    A700: string;
}
export declare type MatColorShade = MatColorShades.S50 | MatColorShades.S100 | MatColorShades.S200 | MatColorShades.S300 | MatColorShades.S400 | MatColorShades.S500 | MatColorShades.S600 | MatColorShades.S700 | MatColorShades.S800 | MatColorShades.S900 | MatColorShades.A100 | MatColorShades.A200 | MatColorShades.A400 | MatColorShades.A700;
export declare enum MatColorShades {
    S50 = 50,
    S100 = 100,
    S200 = 200,
    S300 = 300,
    S400 = 400,
    S500 = 500,
    S600 = 600,
    S700 = 700,
    S800 = 800,
    S900 = 900,
    A100 = 1000,
    A200 = 2000,
    A400 = 4000,
    A700 = 7000
}
export declare enum MatColorVariants {
    RED = "red",
    YELLOW = "yellow",
    AMBER = "amber",
    BLUE = "blue",
    BLUE_GREY = "blueGrey",
    BROWN = "brown",
    CYAN = "cyan",
    DEEP_ORANGE = "deepOrange",
    DEEP_PURPLE = "deepPurple",
    GREEN = "green",
    GREY = "grey",
    INDIGO = "indigo",
    LIGHT_BLUE = "lightBlue",
    LIGHT_GREEN = "lightGreen",
    LIME = "lime",
    ORANGE = "orange",
    PINK = "pink",
    PURPLE = "purple",
    TEAL = "teal"
}
export declare const getMatColor: (variant: MatColorVariant, shade?: MatColorShade) => string | undefined;
export declare const matColorKeys: string[];
