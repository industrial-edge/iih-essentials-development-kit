import { Constants } from "../helper/constants";

export interface Asset{
    assetId: string;
    name:string;
    parentId:string;
    hasChildren:boolean;
}

export function DefaultAsset(): Asset {
    const asset: Asset = {
        assetId:Constants.assetId,
        name: Constants.assetName,
        parentId: '0',
        hasChildren : false 
    }
    return asset;
}
