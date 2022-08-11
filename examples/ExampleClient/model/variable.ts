export interface Variable {
    variableName: string;
    dataType: string;
    assetId: string;
    aspectId: string;
    adapterId?: string;
    topic?: string;
}

export function DefaultVariable(assetId: string, adapterId: number, topic: string): Variable {
    {
        const variable: Variable =
        {
            variableName: "Temperature",
            dataType : "Int32",
            assetId : `${assetId}`,
            aspectId : "" 
        }
        return  variable;
    }
}